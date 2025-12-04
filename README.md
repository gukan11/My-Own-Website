# Gukan M - Portfolio Website

A modern, professional 7-page portfolio website featuring a deep purple/indigo dark theme with gold and electric blue accents.

## Features

- **7 Sections**: Home, About Me, Experience & Projects, Skills, Resume, Summary, and Contact
- **Responsive Design**: Fully mobile-responsive with hamburger menu navigation
- **Modern UI**: Deep dark mode with luxurious purple/indigo theme
- **Smooth Animations**: Scroll-triggered animations and hover effects
- **Interactive Elements**: Progress bars, form handling, and smooth scrolling navigation

## Design

- **Primary Colors**: Deep Purple/Indigo (#1a0d2e, #2d1b4e)
- **Accent Colors**: Gold (#ffd700) and Electric Blue (#00d4ff)
- **Typography**: Poppins and Montserrat fonts from Google Fonts
- **Theme**: Luxurious professional dark mode

## File Structure

```
├── index.html      # Main HTML structure with all 7 sections
├── styles.css      # Complete styling with responsive design
├── script.js       # JavaScript for interactivity and animations
└── README.md       # Project documentation
```

## Setup

1. Clone or download the repository
2. Open `index.html` in a web browser
3. No build process required - works directly in the browser

## Customization

### Contact Form Backend
Update the API endpoint in `script.js`:
```javascript
const response = await fetch('YOUR_BACKEND_API_ENDPOINT', {
    // ... form submission code
});
```

### Resume PDF
Replace the placeholder in the Resume section with your actual PDF file path:
```javascript
const cvPath = 'path/to/your/cv.pdf';
```

### Images
Replace placeholder divs with actual images:
- Home section: `[Placeholder: My Picture]`
- About section: `[Placeholder: Another Neat Image of Mine]`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Gukan M. All rights reserved.



