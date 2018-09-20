document.addEventListener('DOMContentLoaded', function() {
	photoSlider.init()
	pointSlider.init()
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

var pointSlider = {
	activeIndex: 0,
	slidesCount: 0,
	wrapper: null,

	init: function() {
		var leftArrow = document.querySelector('.screenslider .arrow.left')
		var rightArrow = document.querySelector('.screenslider .arrow.right')
		var photoPoints = document.querySelector('.photopoints')
		var slider = this
		this.wrapper = document.querySelector('.photoslider .slider')
		this.slidesCount = document.querySelectorAll('.screenslider .slide').length

		leftArrow.addEventListener('click', function() { slider.slideTo(slider.activeIndex - 1) }, false)
		rightArrow.addEventListener('click', function() { slider.slideTo(slider.activeIndex + 1) }, false)

		for (var pnt = 0; pnt < this.slidesCount; ++pnt)
			photoPoints.innerHTML += '<div class="point" data-index="' + pnt + '"></div>'

		this.markActivePoint()

		Array.from(photoPoints.querySelectorAll('.point')).forEach(function(point) {
			point.addEventListener('click', function() {
				var index = +this.getAttribute('data-index')
				slider.slideTo(index)
			}, false)
		})
	},

	markActivePoint: function() {
		var photoPoints = document.querySelector('.photopoints')
		var activePoint = photoPoints.querySelector('.active')
		activePoint && activePoint.classList.remove('active')

		var newActive = photoPoints.querySelector('.point:nth-child(' + (this.activeIndex + 1) + ')')
		newActive && newActive.classList.add('active')
	},

	slideTo: function(index) {
		if (index < 0) index = this.slidesCount - 1
		if (index >= this.slidesCount) index = 0

		if (index == this.activeIndex) return 0

		document.querySelectorAll('.screenslider .slide')[0].style.marginLeft = (-index * 100) + '%';

		this.activeIndex = index
		this.markActivePoint()
	}
}