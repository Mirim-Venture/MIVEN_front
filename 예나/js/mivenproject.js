document.addEventListener('DOMContentLoaded', function () {
  const video = document.getElementById('video');

  video.addEventListener('play', function () {
      setTimeout(function () {
          video.classList.add('fadeOut');
      }, 5000); 
  });
});
