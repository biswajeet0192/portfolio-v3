# Biswajeet Behera - Portfolio Website

A modern, responsive portfolio website built with React.js, Three.js, and Tailwind CSS. Features stunning 3D particle animations, smooth scrolling, and a professional design showcasing experience, projects, and achievements.

![Portfolio Preview](https://img.shields.io/badge/Status-Active-success)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Three.js](https://img.shields.io/badge/Three.js-0.160.0-black)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.1-38bdf8)

## Features

- **3D Particle Animation** - Interactive Three.js particle system in the hero section
- **Smooth Scrolling** - Seamless navigation between sections
- **Responsive Design** - Mobile-first approach, works on all devices
- **Modern UI/UX** - Clean, professional design with glassmorphism effects
- **Fast Performance** - Optimized with Vite for blazing-fast builds
- **SEO Optimized** - Meta tags and semantic HTML for better search visibility

## Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/biswajeet0192/portfolio-v3.git
cd portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Build for Production

```bash
npm run build
# or
yarn build
```

The production-ready files will be in the `dist` directory.

## Customization

### Update Personal Information

Edit the component files in `src/components/` to update your information:

- **Hero.jsx** - Name, title, and contact links
- **About.jsx** - Education, skills, and coursework
- **Experience.jsx** - Work experience details
- **Projects.jsx** - Personal projects
- **Achievements.jsx** - Awards and recognition
- **Contact.jsx** - Contact form and social links

### Modify Colors and Styling

Edit `tailwind.config.js` to customize the theme:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      // Add custom colors
    }
  }
}
```

## 📁 Project Structure

```
portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar
│   │   ├── Hero.jsx             # Landing section with 3D animation
│   │   ├── About.jsx            # Education and skills
│   │   ├── Experience.jsx       # Work experience
│   │   ├── Projects.jsx         # Project showcase
│   │   ├── Achievements.jsx     # Awards and achievements
│   │   ├── Contact.jsx          # Contact information
│   │   └── Footer.jsx           # Footer section
│   ├── App.jsx                  # Main application component
│   ├── main.jsx                 # Application entry point
│   └── index.css                # Global styles
├── index.html                   # HTML template
├── package.json                 # Dependencies and scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
└── README.md                    # Project documentation
```

## Technologies Used

- **React 18.2.0** - UI library
- **Three.js 0.160.0** - 3D graphics and animations
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Vite 5.0.12** - Build tool and development server
- **PostCSS & Autoprefixer** - CSS processing

## Responsive Breakpoints

- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px and above

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Author

**Biswajeet Behera**

- GitHub: [@biswajeet0192](https://github.com/biswajeet0192)
- LinkedIn: [biswajeet-behera](https://linkedin.com/in/biswajeet-behera/)
- Email: biswajeet092003@gmail.com

## Contributing

Contributions, issues, and feature requests are welcome!

## Show Your Support

Give a ⭐️ if you like this project!

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Run: `npm run deploy`

## Troubleshooting

### Port Already in Use

If port 3000 is already in use, modify `vite.config.js`:

```javascript
server: {
  port: 3001, // Change to any available port
  open: true
}
```

### Three.js Not Loading

Make sure Three.js is properly installed:
```bash
npm install three
```

## Support

For support, email biswajeet092003@gmail.com or open an issue on GitHub.
