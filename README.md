# Bain & Company Website Clone

A modern React-based website that replicates the layout and design of Bain & Company's index page.

## Features

- **Responsive Design**: Mobile-first approach with modern CSS Grid and Flexbox
- **Component-Based Architecture**: Built with React functional components
- **Modern Styling**: CSS with gradients, shadows, and smooth animations
- **Interactive Elements**: Hover effects, mobile navigation, and smooth scrolling
- **Professional Layout**: Matches Bain.com's structure with hero, services, industries, insights, about, and footer sections

## Sections

1. **Navigation**: Fixed navbar with mobile hamburger menu
2. **Hero**: Main headline with floating visual elements and CTA buttons
3. **Services**: Four main service offerings in a grid layout
4. **Industries**: Six industry sectors with icons and descriptions
5. **Insights**: Thought leadership articles with featured content
6. **About**: Company information with statistics and world map visualization
7. **CTA**: Call-to-action section with compelling messaging
8. **Footer**: Contact information, links, and social media

## Technologies Used

- React 18
- CSS3 with modern features (Grid, Flexbox, Animations)
- Font Awesome icons
- Google Fonts (Inter)
- Responsive design principles

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd bain-website-clone
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.js      # Navigation component
│   ├── Hero.js        # Hero section
│   ├── Services.js    # Services section
│   ├── Industries.js  # Industries section
│   ├── Insights.js    # Insights section
│   ├── About.js       # About section
│   ├── CTA.js         # Call-to-action section
│   ├── Footer.js      # Footer component
│   └── *.css          # Component-specific styles
├── App.js             # Main App component
├── App.css            # Global styles
├── index.js           # React entry point
└── index.css          # Base styles
```

## Customization

- **Colors**: Update CSS custom properties in component CSS files
- **Content**: Modify text content in component JS files
- **Layout**: Adjust grid and flexbox properties in CSS files
- **Images**: Replace placeholder elements with actual images

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for educational purposes only. All design elements are inspired by Bain & Company's website.
