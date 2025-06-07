// Smooth scroll anchors to center of viewport
// Intercepts navigation clicks and scrolls to sections

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-bar a[href^="#"]').forEach(link => {
    link.addEventListener('click', evt => {
      evt.preventDefault();
      const id = link.getAttribute('href');
      const target = document.querySelector(id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        history.pushState(null, '', id);
      }
    });
  });
});
