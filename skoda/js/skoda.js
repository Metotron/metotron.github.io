function onYouTubeIframeAPIReady() {
	videoSlider.init()
}

document.addEventListener('DOMContentLoaded', function() {
	photoSlider.init()
}, false)

var videoSlider = {
	videos: ['Z0zJ5A4b0v8', 'ntovh2Oi3Dk', 'gB-LEbCwwAI', 'i6t2wkScQXc'],
	activeVideo: 0,
	videoPlayer: null,

	init: function() {
		var leftArrow = document.querySelector('.videoslider .arrow.left')
		var rightArrow = document.querySelector('.videoslider .arrow.right')
		var videoPoints = document.querySelector('.videopoints')
		var slider = this

		leftArrow.addEventListener('click', function() { slider.slideTo(slider.activeVideo - 1) }, false)
		rightArrow.addEventListener('click', function() { slider.slideTo(slider.activeVideo + 1) }, false)

		for (var pnt = 0; pnt < this.videos.length; ++pnt)
			videoPoints.innerHTML += '<div class="point" data-index="' + pnt + '"></div>'

		Array.from(videoPoints.querySelectorAll('.point')).forEach(function(point) {
			point.addEventListener('click', function() {
				var index = +this.getAttribute('data-index')
				slider.slideTo(index)
			}, false)
		})

		this.createPlayer()
	},

	slideTo: function(index) {
		if (index < 0) index = this.videos.length - 1
		if (index >= this.videos.length) index = 0

		if (index == this.activeIndex) return 0

		this.activeVideo = index
		this.removePlayer()
		this.createPlayer()
	},

	removePlayer: function() {
		document.querySelector('.ipad iframe').remove()
		document.querySelector('.ipad').innerHTML = '<div id="videoplayer"></div>'
	},

	createPlayer: function() {
		var videoPoints = document.querySelector('.videopoints')
		var activePoint = videoPoints.querySelector('.active')
		var nthPoint = videoPoints.querySelector('.point:nth-child(' + (this.activeVideo + 1) + ')')
		var slider = this

		activePoint && activePoint.classList.remove('active')
		nthPoint && nthPoint.classList.add('active')

		this.videoPlayer = new YT.Player('videoplayer', {
			height: '485',
			width: '646',
			videoId: slider.videos[slider.activeVideo]
		})
	}
}

var photoSlider = {
	slidesCount: 0,
	wrapper: null,
	activeIndex: 0,
	init: function() {
		var leftArrow = document.querySelector('.photoslider .arrow.left')
		var rightArrow = document.querySelector('.photoslider .arrow.right')
		var photoPoints = document.querySelector('.photopoints')

		this.wrapper = document.querySelector('.photoslider .slider')
		this.slidesCount = this.wrapper.querySelectorAll('.slide').length

		for (var pnt = 0; pnt < this.slidesCount; ++pnt)
			photoPoints.innerHTML += '<div class="point" data-index="' + pnt + '"></div>'

		for (var sld = 1; sld <= this.slidesCount; ++sld)
			this.wrapper.querySelector('.slide:nth-child(' + sld + ')').setAttribute('data-index', sld - 2)
		this.wrapper.querySelector('.slide:first-child').setAttribute('data-index', this.slidesCount - 1)

		var slider = this
		leftArrow.addEventListener('click', function() { slider.slideTo(slider.activeIndex - 1) }, false)
		rightArrow.addEventListener('click', function() { slider.slideTo(slider.activeIndex + 1) }, false)

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

		var activeSlideIndex = +this.wrapper.querySelector('.slide:nth-child(2)').getAttribute('data-index')
		var newActive = photoPoints.querySelector('.point:nth-child(' + (activeSlideIndex + 1) + ')')
		newActive && newActive.classList.add('active')
	},

	slideTo: function(index) {
		if (index < 0) index = this.slidesCount - 1
		if (index >= this.slidesCount) index = 0

		if (index == this.activeIndex) return 0

		// Сперва ситуация, когда перематываем к слайду, который стоит первым в ряду (движение влево на один)
		var firstSlide = this.wrapper.querySelector('.slide')
		if (index == firstSlide.getAttribute('data-index')) {
			var lastSlide = this.wrapper.querySelector('.slide:last-child')
			this.wrapper.insertBefore(lastSlide, firstSlide)
		}
		else {
			var slides = Array.from(this.wrapper.querySelectorAll('.slide'))
			for (var idx = 0; idx < slides.length; ++idx) {
				var currentIndex = +slides[idx].getAttribute('data-index')
				var nextIndex = currentIndex + 1 > this.slidesCount - 1 ? 0 : currentIndex + 1
				if (nextIndex == index)
					break

				this.wrapper.appendChild(slides[idx])
			}
		}

		this.activeIndex = index
		this.markActivePoint()

	}
}