var parallaxVideo = document.querySelector('.parallax-video');
var textElements = document.querySelectorAll('.scroll-text');
var isScrolling = false;
var currentIndex = 0;
var hasVideoPlayed = false;

function handleWheel() {
  if (!isScrolling) {
    isScrolling = true;
    playVideo();
    showText();

    setTimeout(function () {
      isScrolling = false;
      pauseVideo();
    }, 860);
  }
}

function playVideo() {
  parallaxVideo.play();

  if (!hasVideoPlayed) {
    window.removeEventListener('wheel', handleWheel);
    hasVideoPlayed = true;
  }
}

function pauseVideo() {
  parallaxVideo.pause();

  if (hasVideoPlayed) {
    window.addEventListener('wheel', handleWheel);
  }
}

function showText() {
  textElements[currentIndex].classList.add('show');
  textElements[currentIndex].classList.add('scroll-up');

  setTimeout(function () {
    textElements[currentIndex].classList.remove('scroll-up');
    currentIndex++;
    if (currentIndex >= textElements.length) {
      currentIndex = 0;
    }

    // 추가: 모든 텍스트가 보여진 후에도 스크롤 이벤트를 계속 감지
    if (currentIndex === 0) {
      window.addEventListener('wheel', handleWheel);
    }
  }, 500);
}

parallaxVideo.addEventListener('ended', function () {
  parallaxVideo.currentTime = 0;
  hasVideoPlayed = false;
});

// 초기에도 스크롤 이벤트를 감지
window.addEventListener('wheel', handleWheel);