document.addEventListener("DOMContentLoaded", () => {
  const videos = document.querySelectorAll("#portfolio .work video");

  videos.forEach(video => {
    // Hover play/pause (desktop)
    video.addEventListener("mouseenter", () => { video.play().catch(()=>{}); });
    video.addEventListener("mouseleave", () => { video.pause(); video.currentTime = 0; });

    // Click/tap toggle (mobile/tablet or no-hover devices)
    video.addEventListener("click", () => {
      if (video.paused) { video.play().catch(()=>{}); }
      else { video.pause(); }
    });

    // Optional: show controls if JS detects no-hover environment
    if (window.matchMedia && window.matchMedia("(hover: none)").matches) {
      video.setAttribute("controls", "controls");
    }
  });
});
