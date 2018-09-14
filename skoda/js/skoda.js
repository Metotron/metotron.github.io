function onYouTubeIframeAPIReady() {
	videoSlider.init()
}

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
		activePoint && activePoint.classList.remove('active')
		nthPoint && nthPoint.classList.add('active')

		var slider = this

		this.videoPlayer = new YT.Player('videoplayer', {
			height: '503',
			width: '670',
			videoId: slider.videos[slider.activeVideo]
		})
	}
}