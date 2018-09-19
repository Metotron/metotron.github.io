document.addEventListener('DOMContentLoaded', function() {
	Slider.start(document.querySelector('.howitwas_results .slider'))

	document.querySelector('.send_brief').addEventListener('click', function(ev) {
		ev.preventDefault()
		var parentDoc = window.parent.document
		var target = parentDoc.querySelector('.feedback_block__button')
		if (!target) return 0

		if(parentDoc.dispatchEvent) {
			var click = parentDoc.createEvent('MouseEvents')
			click.initMouseEvent("click", true, true, window.parent, 1, 1, 1, 1, 1, false, false, false, false, 0, target)
			target.dispatchEvent(click)
			parentDoc.querySelector('.feedback_block__text').scrollIntoView(false)
		}
		else if(parentDoc.fireEvent) {
			target.fireEvent('onclick')
			parentDoc.querySelector('.feedback_block__text').scrollIntoView(false)
		}
	})
}, false)

var Slider = {
	activeIndex: 0,
	slides: null,
	start: function(obj) {
		var btnLeft = obj.querySelector('.left')
		var btnRight = obj.querySelector('.right')
		var slider = this

		this.slides = obj.querySelectorAll('.slider_wrapper .slide')

		btnLeft.addEventListener('click', function() {
			var newIndex = slider.activeIndex > 0 ? slider.activeIndex - 1 : slider.slides.length - 1
			slider.moveTo(newIndex)
		}, false)

		btnRight.addEventListener('click', function() {
			var newIndex = slider.activeIndex < slider.slides.length - 1 ? slider.activeIndex + 1 : 0
			slider.moveTo(newIndex)
		}, false)
	},
	moveTo: function(index) {
		this.activeIndex = index
		this.slides[0].style.marginLeft = (-index * 100) + '%'
	}
}