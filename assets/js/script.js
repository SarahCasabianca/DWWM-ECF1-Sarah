$(document).ready(function () {
  $('#footer').load('/pages/footer.html');
  $('#header').load('/pages/navbar.html');
});

// Animation Gsap des rideaux qui s'ouvrent //
if (document.querySelector('.accueil__hero__curtain__left')) {
  gsap.set('.accueil__hero__curtain__left', { x: '60%' });
  gsap.set('.accueil__hero__curtain__right', { x: '-60%' });
  gsap
    .timeline({ delay: 0.5 })
    .to('.accueil__hero__curtain__left', {
      x: '-50%',
      duration: 3,
      ease: 'power2.inOut',
    })
    .to(
      '.accueil__hero__curtain__right',
      {
        x: '50%',
        duration: 3,
        ease: 'power2.inOut',
      },
      '<'
    )
    .to(
      '.accueil__hero__overlay',
      {
        opacity: 0,
        duration: 3,
        ease: 'power2.inOut',
      },
      '<'
    );
}

// Open burger menu //
const burger = document.querySelector('.components__header__burger');
