(() => {
  const scenes = [...document.querySelectorAll('.journey-scene')];
  const dots = [...document.querySelectorAll('.scene-pagination a')];
  const intro = scenes[0];
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let scheduled = false;
  function updateScenes() {
    scheduled = false;
    const viewport = window.innerHeight;
    const center = 56 + (viewport - 56) * .45;
    let active = 0;
    scenes.forEach((scene, index) => {
      const bounds = scene.getBoundingClientRect();
      if (bounds.top <= center) active = index;
      const visible = Math.max(0, Math.min(bounds.bottom,viewport) - Math.max(bounds.top,56));
      const fraction = Math.min(1, visible / Math.min(viewport - 56,bounds.height));
      scene.style.setProperty('--scene-opacity', reduced.matches ? 1 : .35 + fraction * .65);
    });
    const progress = Math.min(1, Math.max(0, (56 - intro.getBoundingClientRect().top) / (viewport - 56)));
    intro.style.setProperty('--intro-opacity', reduced.matches ? 1 : 1 - progress * .8);
    intro.style.setProperty('--intro-shift', reduced.matches ? '0px' : `${progress * -40}px`);
    document.body.dataset.scene = scenes[active].dataset.scene;
    dots.forEach((dot,index) => index === active ? dot.setAttribute('aria-current','page') : dot.removeAttribute('aria-current'));
  }
  function queueUpdate() { if (!scheduled) { scheduled = true; requestAnimationFrame(updateScenes); } }
  window.addEventListener('scroll',queueUpdate,{passive:true});
  window.addEventListener('resize',queueUpdate);
  reduced.addEventListener('change',queueUpdate);
  new ResizeObserver(queueUpdate).observe(document.querySelector('#schedule'));
  updateScenes();
})();
