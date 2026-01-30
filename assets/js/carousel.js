function initCarousel() {
  const track = document.querySelector(".carousel__track");

  if (!track) return;

  const items = Array.from(track.children);
  items.forEach((item) => {
    const clone = item.cloneNode(true);
    track.appendChild(clone);
  });

  track.addEventListener("mouseenter", () => {
    track.style.animationPlayState = "paused";
  });

  track.addEventListener("mouseleave", () => {
    track.style.animationPlayState = "running";
  });
}
