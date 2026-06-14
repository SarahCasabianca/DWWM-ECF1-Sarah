# Le Phosphore — Show Venue Website

## Project Description

This project is a 3-page responsive website for **Le Phosphore**, a multi-purpose show venue (theatre, stand-up, concerts). It was created as part of the DWWM training program (ECF AT#1).

The website includes:

- A **homepage** with a curtain-opening animation (CSS/JS) and featured shows
- A **schedule page** with dynamic, filterable show cards (by type, date, and availability), generated from a JSON file
- A **practical information page** (services, access, prices, seating plan)

## Tech Stack

- HTML5 (semantic, accessible markup)
- SASS / SCSS (BEM methodology)
- JavaScript (Vanilla JS, ES6+)
- JSON (show data)
- Figma (mockups and navigation diagram)
- Git / GitHub (version control)

## Project Structure

```
ecf-spectacle/
├── assets/
│   ├── css/        # Compiled CSS
│   ├── data/        # JSON data (shows)
│   ├── fonts/
│   ├── icons/
│   ├── img/
│   └── js/          # JavaScript files
├── pages/           # Additional HTML pages
├── sass/            # SCSS source files (BEM)
├── index.html
├── .gitignore
├── .prettierrc
└── README.md
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SarahCasabianca/ecf-spectacle.git
   ```
2. Open the project folder in VS Code.
3. Install the **Live Server** extension to preview the site locally.
4. To compile SASS, run:
   ```bash
   sass --watch sass/main.scss assets/css/main.css
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
- Subdomain: `spectacle.sarah-casabianca.fr`
- No sensitive data (passwords, private keys) is included in the repository.

## Accessibility & Eco-design

- The site follows **RGAA** accessibility guidelines (contrast ratios, screen reader support, semantic HTML).
- Code is validated with **W3C Validator** (HTML/CSS) and **ESLint** (JavaScript).
- Mobile-first responsive design, tested on iPhone, Samsung, and Pixel devices.

## Author

Project realized by Milo as part of the DWWM training program (2026).
