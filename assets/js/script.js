// Jquery //
$(document).ready(function () {
  $('#footer').load('/pages/footer.html');
  $('#header').load('/pages/navbar.html', function () {
    // Open burger menu //
    const burger = document.querySelector('.components__header__burger');
    const nav = document.querySelector('.components__header__navbar');

    burger.addEventListener('click', function () {
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

// Progress bar
function createProgressBar(spectacle) {
  const progressContainer = document.createElement('div');
  progressContainer.classList.add('programmation__card__progress');

  const progressBar = document.createElement('div');
  progressBar.classList.add('programmation__card__progress__bar');

  const pourcentage = ((spectacle.places_vendues / spectacle.places_total) * 100).toFixed(0);
  progressBar.style.width = pourcentage + '%';
  progressBar.style.backgroundColor =
    spectacle.places_vendues === spectacle.places_total ? '#6B1D3A' : '#D4A843';

  const progressLabel = document.createElement('p');
  progressLabel.textContent = spectacle.places_vendues + ' / ' + spectacle.places_total + ' places';
  progressLabel.classList.add('programmation__card__progress__label');

  if (spectacle.places_vendues === spectacle.places_total) {
    progressLabel.textContent = 'Complet';
  } else {
    progressLabel.textContent =
      spectacle.places_vendues + ' / ' + spectacle.places_total + ' places';
  }

  progressContainer.appendChild(progressBar);
  progressContainer.appendChild(progressLabel);

  return progressContainer;
}

// Cards featured home //
const featuredContainer = document.querySelector('#featured-cards');

if (featuredContainer) {
  fetch('/assets/data/spectacles.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const featured = data.spectacles
        .filter(function (s) {
          return s.places_vendues < s.places_total;
        })
        .slice(0, 3);

      featured.forEach(function (spectacle) {
        const card = document.createElement('div');
        card.classList.add('programmation__card');

        const image = document.createElement('img');
        image.src = spectacle.image;
        image.alt = spectacle.alt;
        image.classList.add('programmation__card__image');

        const titre = document.createElement('h2');
        titre.textContent = spectacle.titre;
        titre.classList.add('programmation__card__titre');

        const div = document.createElement('div');
        div.classList.add('programmation__card__meta');

        const type = document.createElement('p');
        type.textContent = spectacle.type;
        type.classList.add('programmation__card__type');

        const date = document.createElement('p');
        date.textContent = spectacle.date;
        date.classList.add('programmation__card__date');

        div.appendChild(type);
        div.appendChild(date);
        card.appendChild(image);
        card.appendChild(titre);
        card.appendChild(div);
        card.appendChild(createProgressBar(spectacle)); // progress bar

        featuredContainer.appendChild(card);
      });
    });
}

// Cards dynamiques //
const cardsContainer = document.querySelector('.programmation__cards');

if (cardsContainer) {
  fetch('/assets/data/spectacles.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      data.spectacles.forEach(function (spectacle) {
        const card = document.createElement('div');
        card.classList.add('programmation__card');
        card.dataset.type = spectacle.type;
        card.dataset.date = spectacle.date;

        const image = document.createElement('img');
        image.src = spectacle.image;
        image.alt = spectacle.alt;
        image.classList.add('programmation__card__image');

        const titre = document.createElement('h2');
        titre.textContent = spectacle.titre;
        titre.classList.add('programmation__card__titre');

        const div = document.createElement('div');
        div.classList.add('programmation__card__meta');

        const type = document.createElement('p');
        type.textContent = spectacle.type;
        type.classList.add('programmation__card__type');

        const date = document.createElement('p');
        date.textContent = spectacle.date;
        date.classList.add('programmation__card__date');

        const button = document.createElement('button');
        button.textContent = 'En savoir +';
        button.classList.add('programmation__card__button');

        const divButton = document.createElement('div');
        divButton.classList.add('programmation__card__details');

        const prix = document.createElement('p');
        prix.textContent = spectacle.prix + ' €';
        prix.classList.add('programmation__card__prix');

        const metaRow = document.createElement('div');
        metaRow.classList.add('programmation__card__details__meta');

        const horaire = document.createElement('p');
        horaire.innerHTML = '🕐 ' + spectacle.horaire;
        horaire.classList.add('programmation__card__horaire');

        const duree = document.createElement('p');
        duree.innerHTML = '⏱ ' + spectacle.duree;
        duree.classList.add('programmation__card__duree');

        const artiste = document.createElement('p');
        artiste.innerHTML = '🎭 ' + spectacle.artiste;
        artiste.classList.add('programmation__card__artiste');

        const description = document.createElement('p');
        description.textContent = spectacle.description;
        description.classList.add('programmation__card__description');

        // Construction de la card
        div.appendChild(type);
        div.appendChild(date);

        metaRow.appendChild(horaire);
        metaRow.appendChild(duree);
        metaRow.appendChild(artiste);

        divButton.appendChild(prix);
        divButton.appendChild(metaRow);
        divButton.appendChild(description);

        card.appendChild(image);
        card.appendChild(titre);
        card.appendChild(div);
        card.appendChild(createProgressBar(spectacle)); // progress bar
        card.appendChild(button);
        card.appendChild(divButton);

        if (spectacle.places_vendues === spectacle.places_total) {
          card.dataset.complet = 'true';
        }

        cardsContainer.appendChild(card);

        // Toggle
        button.addEventListener('click', function (event) {
          event.stopPropagation();
          divButton.classList.toggle('is-open');
        });
      });

      // Filtres type
      const allCards = document.querySelectorAll('.programmation__card');
      const typeButtons = document.querySelectorAll('[data-type]');
      const dateButtons = document.querySelectorAll('[data-date]');

      typeButtons.forEach(function (bouton) {
        bouton.addEventListener('click', function () {
          typeButtons.forEach(function (b) {
            b.classList.remove('active');
          });
          bouton.classList.add('active');
          const valeur = bouton.dataset.type;
          allCards.forEach(function (card) {
            card.style.display =
              valeur === 'all' || card.dataset.type === valeur ? 'block' : 'none';
          });
        });
      });

      // Filtres date
      dateButtons.forEach(function (bouton) {
        bouton.addEventListener('click', function () {
          dateButtons.forEach(function (b) {
            b.classList.remove('active');
          });
          bouton.classList.add('active');
          const valeur = bouton.dataset.date;
          allCards.forEach(function (card) {
            card.style.display =
              valeur === 'all' || card.dataset.date === valeur ? 'block' : 'none';
          });
        });
      });

      // Checkbox sold out
      const checkbox = document.querySelector('#soldout');
      checkbox.addEventListener('change', function () {
        allCards.forEach(function (card) {
          if (checkbox.checked && card.dataset.complet === 'true') {
            card.style.display = 'none';
          } else {
            card.style.display = 'block';
          }
        });
      });
    });
}
