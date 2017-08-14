/**
* Класс для "плавного" изменения значения числа
*
* Позволяет найти element (см. ниже) и изменять его содержимое с помощью метода toValue(options),
* стартовое значение элемента берётся из textContent самого элемента или передаётся в параметре startValue конструктору,
* Element должен определять конечный DOM-элемент страницы, содержащий лишь число, так как его значение изменяется с помощью textContent
*
*
*
* Ключи параметра-объекта конструктора класса:
*   element — DOM-объект или селектор элемента, который нужно менять, обязательный параметр
*   startValue — стартовое значение числа. Не обязателен, если в DOM-элементе element уже есть число на момент инициализации, но если параметр указан, он имеет больший приоритет
*
* ****************
*
* toValue() — метод вызывает изменение числа и принимает параметр parameter, который может быть числом или объектом
*   Если parameter — число, то изменение значения элемента происходит в соответствии с ранее заданными параметрами,
*   а если раньше не было вызовов этой функции с параметром-объектом, то используются значения по умолчанию, которые указаны ниже
*
*   Если parameter — объект, то для него доступны следующие ключи:
*     to — число, до которого должно измениться значение элемента, обязательный параметр
*
*     time              [300] — интервал в милисекундах, в течение которого будет происходить изменение значения
*     steps            [auto] — колчиество шагов, за которые будет проходить изменение значения в течение time (setInterval будет установлен с интервалом time/steps).
*                               При значении auto вычисляется как time/50
*     useFractional   [false] — использовать ли при отображении изменения числа дробные значения
*     fractionalPrecision [2] — если useFractional == true, то здесь задаётся количество знаков после запятой, которые будут отображаться
*
* ****************
*
* setParam() — установка параметров анимации, как это делает toValue() при вызове с параметром-объектом
*   Доступные ключи параметра-объекта:
*     time  — длительность анимации
*     steps — количество итераций, которые произойдут за время time. Может содержать значение auto, которое равно time / 50
*     useFractional — флаг использования дробных значений при отрисовке числа
*     fractionalPrecision — количество знаков после запятой при useFractional == true
*
* ****************
*
* stop() — метод обрывает выполнение анимации и останавливает его на том значении, которое оказалось последним.
*  Нужен, чтобы toValue() при повторном вызове начал анимацию с того места, на котором была прекращена предыдущая
*
* ****************
*
* end() — метод завершения анимации. Элемент сразу получает конечное значение
*
* ****************
*
* run() — служебная функция, вызывается из setInterval(), меняет значение textContent элемента
*
* ****************
*
* refresh() — перечитывание значения элемента, если оно было изменено сторонним скриптом.
*   При желании можно добавить вызов этой функции в toValue() после this.stop()
*
* ****************
*
* Внутренние переменные класса:
*   element      — элемент, к которому привязан клас
*   value        — текущее числовое значение элемента
*   time, steps, useFractional, fractionalPrecision — параметры, используемые методом toValue()
*
*   endValue — конечное значение, к которому нужно прийти по окончанию всех итераций
*   addition — прибавка значения каждую итерацию
*   interval — содержит результат вызова setInterval
*
* NumberAnimator.enableDebugger — bool-переменная, которая определяет, нужно ли открывать дебаггер при ошибках
*/

class NumberAnimator {
	constructor(options) {
		try
		{
			/* **** */
			this.time                = 300       //Изменяем целевое число в течение секунды
			this.steps               = 'auto'    //За это время указанное число итераций или auto — 50 изменений в секнду
			this.useFractional       = false     //Округляем дробные промежуточные значения
			this.fractionalPrecision = 2         //Если не округляем, то отображаем 2 знака после запятой
			/* **** */

			if (options == undefined || options.constructor.name != 'Object')
				throw 'Конструктору нужно передать объект с параметрами'

			if (!options.element)
				throw 'Конструктору не передано обязательное значение element'

			/* ------------- */
			this.element = options.element
			if (this.element.constructor.name == 'String')
				this.element = document.querySelector(this.element)
			if (!this.element)
				throw `Не найден элемент ${this.element}`

			//Если есть параметр со стартовым значением в options, применяем его
			if ('startValue' in options)
			{
				this.value = parseFloat(options.startValue)
				this.element.textContent = this.value
			}
			else
			{
				//Ищем начальное значение внутри самого элемента в DOM
				const elementValue = parseFloat(this.element.textContent)
				this.value = isNaN(elementValue) ? undefined : elementValue
			}

			if (this.value == undefined)
			{
				throw 'Конструктору не передано обязательное значение startValue'
			}
		}
		catch (err)
		{
			console.error(`NumberAnimator: ${err}`)
			if (NumberAnimator.enableDebugger) debugger
		}
	}

	/* Функция смены числа */
	toValue(parameter) {
		try
		{
			this.stop()

			let to
			switch (parameter.constructor.name)
			{
				case 'Object':
					if (!parameter.to)
						throw 'Параметр функции должен содержать обязательный ключ to'

					if (parameter.time)
						this.time = parseInt(parameter.time)
					if (this.time < 1)
						this.time = 1

					if (parameter.steps)
						this.steps = (parameter.steps == 'auto') ? 'auto' : parseFloat(parameter.steps)		//float, чтобы не потерять точность при делении

					if (parameter.useFractional)
						this.useFractional = !!parameter.useFractional

					if (parameter.fractionalPrecision)
						this.fractionalPrecision = parseInt(parameter.fractionalPrecision)
					if (this.fractionalPrecision < 1)
						this.fractionalPrecision = 1

					to = parseFloat(parameter.to)
				break

				default:
					to = parseFloat(parameter)
			}
			if (isNaN(to))
				throw `Функции передано некорректное новое значение числа: ${to}`

			//Рассчитаем все параметры для совершения анимации и иницализируем переменные
			let siInterval = this.steps == 'auto' ? 50 : Math.round(this.time / this.steps)
			if (siInterval < 0)
				siInterval = 50
			this.endValue = to

			if (to != this.value)
			{
				this.addition = to - this.value
				if (this.steps != 'auto')
					this.addition /= this.steps
				else
					this.addition /= (this.time / 50)

				this.interval = setInterval(() => { this.run.call(this) }, siInterval)
			}
		}
		catch (err)
		{
			console.error(`NumberAnimator.toValue(): ${err}`)
			if (NumberAnimator.enableDebugger) debugger
			return false
		}

		return true
	}

	/* Установка параметров анимации */
	setParam(options) {
		if (options.constructor.name != 'Object')
			console.error('NumberAnimator.setParam(): параметр должен быть объектом');
		else
		{
			if (options.time)
				this.time = parseInt(parameter.time)
			if (this.time < 1)
				this.time = 1

			if (options.steps)
				this.steps = (options.steps == 'auto') ? 'auto' : parseFloat(options.steps)

			if (options.useFractional)
				this.useFractional = !!options.useFractional

			if (options.fractionalPrecision)
				this.fractionalPrecision = parseInt(options.fractionalPrecision)
			if (this.fractionalPrecision < 1)
				this.fractionalPrecision = 1
		}
	}

	/* Прерывание анимации без установки числа в конечное значение */
	stop() {
		if (this.interval)
			clearInterval(this.interval)
	}

	/* Мгновенное завершение анимации */
	end() {
		this.stop()
		this.element.textContent = this.endValue
	}

	/* Функция выполнения анимации */
	run() {
		this.value += this.addition
		let drawValue = this.value
		if (!this.useFractional)
			drawValue = Math.round(drawValue)
		else
		{
			const step = Math.pow(10, this.fractionalPrecision)
			drawValue = Math.round(this.value * step) / step
		}

		if (this.addition > 0 && this.value >= this.endValue
		   || this.addition < 0 && this.value <= this.endValue)
		{
			this.end.call(this)
			return
		}

		this.element.textContent = drawValue
	}

	/* Перечитывание DOM-значения элемента */
	refresh() {
		let newValue = parseFloat(this.element.textContent)
		if (!isNaN(newValue))
			this.value = newValue
	}
}