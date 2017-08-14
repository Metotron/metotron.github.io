document.addEventListener('DOMContentLoaded', () => {
	//NumberAnimator.enableDebugger = true		//Если открыт devtools, то при ошибках переходим к дебагу

	const n1 = new NumberAnimator({element: '.n1'}),
	      n2 = new NumberAnimator({element: '.n2'}),
	      n3 = new NumberAnimator({element: '.n3', startValue: 1}),
	      n4 = new NumberAnimator({element: '.n4', startValue: 150.648})

	//Меняем при загрузке страницы
	n1.toValue({
		to: 1620,
		time: 1200,
		useFractional: true,
	})

	n3.toValue({
		to: 22,
		time: 500
	})

	n4.toValue({
		to: 8000
	})

	N1.onclick = () => {
		//n1 изменяется с параметрами, которые заданы выше предыдущим вызовом n1.toValue()
		n1.toValue(document.querySelector('[name=n1to]').value)
		//n2 изменяется с параметрами по умолчанию
		n2.toValue(document.querySelector('[name=n2to]').value)
	}
}, false)