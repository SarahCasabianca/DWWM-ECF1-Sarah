$(document).ready(function () {
  $('#footer').load('/pages/footer.html');
  $('#header').load('/pages/navbar.html', function () {
    // Open burger menu
    const burger = document.querySelector('.components__header__burger');
    const nav = document.querySelector('.components__header__navbar');

    burger.addEventListener('click', function () {
      console.log('clic détecté !');
      nav.classList.toggle('is-open');
      burger.classList.toggle('is-open');
    });
    document.addEventListener('click', function (event) {
      if (!burger.contains(event.target) && !nav.contains(event.target)) {
        nav.classList.remove('is-open');
        burger.classList.remove('is-open');
      }
    });
  });
});

// Animation Gsap des rideaux qui s'ouvrent //
if (document.querySelector('.accueil__hero__curtain__left')) {
  gsap.set('.accueil__hero__curtain__left', { x: '60%' });
  gsap.set('.accueil__hero__curtain__right', { x: '-60%' });
  gsap.set('.accueil__hero__content', { opacity: 0 });
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
    )
    .to('.accueil__hero__content', {
      opacity: 1,
      duration: 0.2,
      ease: 'power2.inOut',
    });
}

// Cards dynamiques //
fetch('/assets/data/spectacles.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    const cards = document.querySelector('.programmation__cards');
    data.spectacles.forEach(function (spectacle) {
      console.log(spectacle.titre);
      console.log(spectacle.type);
      cards.innerHTML += `
        <div class="card">
    <h2>${spectacle.titre}</h2>
    <p>${spectacle.type}</p> · <p>${spectacle.date}</p>
    <p>${spectacle.description}</p>
    <p>${spectacle.horaire}</p>
    <p>${spectacle.duree}</p>
     <p>${spectacle.prix}</p>
     <p>${spectacle.artiste}</p>
      <p>${spectacle.image}</p>
  </div>
      `;
    });
  });
