# Le Phosphore — Show Venue Website

## Project Description

This project is a 3-page responsive website for **Le Phosphore**, a multi-purpose show venue (theatre, stand-up, concerts). It was created as part of the DWWM training program (ECF AT#1).

The website includes:

- A **homepage** with a curtain-opening animation (GSAP) and featured shows dynamically generated from a JSON file
- A **schedule page** with dynamic, filterable show cards (by type, date, and availability), generated from a JSON file, with a seats progress bar
- A **practical information page** (services, access, prices, seating plan)
- A **legal notices page** accessible from the footer

## Tech Stack

- **HTML5** (semantic, accessible markup, ARIA attributes)
- **SASS / SCSS** (BEM methodology, custom mixins)
- **JavaScript** (Vanilla JS, ES6+, jQuery for shared components)
- **GSAP** (curtain opening animation on homepage)
- **JSON** (show data)
- **Figma** (wireframes, mockups and navigation diagram)
- **Git / GitHub** (version control)

## Project Structure

```
ecf-spectacle/
├── assets/
│   ├── css/              # Compiled CSS (style.min.css)
│   ├── data/
│   │   └── spectacles.json  # Show data (type, date, seats, price...)
│   ├── fonts/
│   │   ├── Playfair-Display/
│   │   └── Source-Sans-3/
│   ├── img/              # Images and SVG icons
│   └── js/
│       └── script.js     # Main JavaScript file
├── pages/
│   ├── navbar.html       # Shared header component (jQuery .load())
│   ├── footer.html       # Shared footer component (jQuery .load())
│   ├── programmation.html
│   ├── infos-pratiques.html
│   └── mentions-legales.html
├── sass/
│   └── style.scss        # Main SCSS file (with BEM and mixins)
├── index.html
├── .gitignore
├── .prettierrc
└── README.md
```

## Key Features

### Dynamic show cards

Show cards are generated from `assets/data/spectacles.json` using `fetch()`. Each card displays:

- Show title, type, date
- Seats progress bar (gold if available, burgundy if sold out)
- Toggle "En savoir +" to reveal show details (time, duration, price, artist, description)

### Filters (schedule page)

Cards can be filtered by:

- **Type**: theatre, stand-up, concert
- **Date**: Friday 20, Saturday 21, Sunday 22
- **Availability**: hide sold out shows (checkbox)

### Curtain animation (homepage)

On page load, two burgundy curtains slide apart using **GSAP**, revealing the hero section with a fade-in effect.

### Shared components

Header and footer are loaded dynamically via **jQuery `.load()`**, avoiding code duplication across pages.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SarahCasabianca/ecf-spectacle.git
   ```
2. Open the project folder in VS Code.
3. Install the **Live Server** extension to preview the site locally.
4. To compile SASS, run:
   ```bash
   sass --watch sass/style.scss assets/css/style.min.css
   ```
   (or use the **Live Sass Compiler** extension in VS Code)

## Usage

- Open `index.html` with Live Server to view the homepage.
- Navigate to the schedule page to filter shows by type, date, or availability.
- Show data can be updated by editing `assets/data/spectacles.json`.

## Deployment

The website is deployed in two ways:

### 1. GitHub Pages

- The site is published via GitHub Pages (HTTPS).
- URL: `https://sarahcasabianca.github.io/ecf-spectacle/`

### 2. OVH Hosting (SFTP)

- Files are uploaded to the OVH server via **SFTP (port 22)** using FileZilla.
- Connect to the OVH server, upload all project files to the `www/` directory.
- Subdomain: `spectacle.sarah-casabianca.fr`
- No sensitive data (passwords, private keys) is included in the repository.

## Accessibility & Eco-design

- The site follows **RGAA** accessibility guidelines:
  - Proper contrast ratios (burgundy/gold/cream palette)
  - Semantic HTML5 elements (`header`, `nav`, `main`, `section`, `footer`)
  - ARIA attributes (`aria-label`, `aria-expanded`, `aria-controls`, `aria-hidden`, `role`)
  - Screen reader support
- Code validated with **W3C Validator** (HTML/CSS) and **ESLint** (JavaScript)
- Mobile-first responsive design, tested on iPhone, Samsung, and Pixel devices
- Optimized images (`.webp` format)

## Color Palette

| Color      | Hex       | Usage                                   |
| ---------- | --------- | --------------------------------------- |
| Burgundy   | `#6B1D3A` | Primary color, stage curtains, sold out |
| Gold       | `#D4A843` | Accents, CTAs, available seats          |
| Anthracite | `#2A2D34` | Dark backgrounds, text                  |
| Cream      | `#F5F0E8` | Light backgrounds, breathing space      |

## Typography

- **Playfair Display** (serif) — headings, show titles
- **Source Sans 3** (sans-serif) — body text, labels

## Author

Project realized by Milo as part of the DWWM training program (2026).
