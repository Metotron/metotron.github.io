document.addEventListener('DOMContentLoaded', function() {
	photoSlider.init()
}, false)

var photoSlider = {
	activeIndex: 0,
	slidesCount: 0,

	init: function() {
		var leftArrow = document.querySelector('.photoslider .arrow.left')
		var rightArrow = document.querySelector('.photoslider .arrow.right')
		var slider = this
		this.slidesCount = document.querySelectorAll('.photoslider .slide').length

		leftArrow.addEventListener('click', function() { slider.slideTo(slider.activeIndex - 1) }, false)
		rightArrow.addEventListener('click', function() { slider.slideTo(slider.activeIndex + 1) }, false)
	},

	slideTo: function(index) {
		if (index < 0) index = this.slidesCount - 1
		if (index >= this.slidesCount) index = 0

		if (index == this.activeIndex) return 0

		this.activeIndex = index
		document.querySelectorAll('.photoslider .slide')[0].style.marginLeft = (-index * 100) + '%';
	}
}