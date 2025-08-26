document.addEventListener("DOMContentLoaded", () => {
  const videos = document.querySelectorAll("#portfolio .work video");

  videos.forEach(video => {
    video.addEventListener("mouseenter", () => {
      video.play();
    });

    video.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0; // reset to start
    });
  });
});

