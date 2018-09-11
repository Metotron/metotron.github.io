document.addEventListener('DOMContentLoaded', function() {
	Slider.start(document.querySelector('.howitwas_results .slider'))
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