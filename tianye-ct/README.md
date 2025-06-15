# Tianye's Portfolio Website

A modern, responsive portfolio website built with React and Chakra UI, featuring dark mode support and smooth animations.

## Features

### Core Features
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Dark Mode**: Toggle between light and dark themes with persistence
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Modern UI**: Clean, minimalist design with Chakra UI components

### Pages
- **Home**: Animated introduction with typewriter effect and gradient animations
- **Portfolio**: Showcase of projects with detailed views and technology stacks
- **Blog**: Technical blog with markdown support and syntax highlighting
- **About**: Personal page with hobbies, interests, and goals
- **404**: Custom error page with animations

### Components
- **Mobile Navigation**: Hamburger menu with smooth drawer animation
- **Footer**: Contact information, social links, and site navigation
- **Loading Skeletons**: Reusable loading states for better UX
- **Scroll to Top**: Automatic scroll on navigation for better user experience
- **Color Mode Toggle**: Easy theme switching with icon animations

## Tech Stack

- **React 18**: Modern React with hooks
- **Chakra UI**: Component library with built-in accessibility
- **Framer Motion**: Animation library for smooth transitions
- **React Router v6**: Client-side routing
- **React Markdown**: Blog content rendering
- **React Syntax Highlighter**: Code block highlighting

## Getting Started

### Prerequisites
- Node.js 14+ and npm

### Installation
```bash
# Clone the repository
git clone https://github.com/tianye-ct/tianye-ct.github.io.git

# Navigate to project directory
cd tianye-ct.github.io/tianye-ct

# Install dependencies
npm install

# Start development server
npm start
```

### Available Scripts

- `npm start` - Runs the app in development mode (http://localhost:3000)
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/
│   ├── Blog/
│   │   ├── BlogList.jsx
│   │   └── BlogPost.jsx
│   ├── Portfolio/
│   │   ├── PortfolioList.jsx
│   │   └── ProjectDetail.jsx
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Introduction.jsx
│   ├── ColorModeToggle.jsx
│   ├── LoadingSkeleton.jsx
│   └── ScrollToTop.jsx
├── pages/
│   ├── About.jsx
│   ├── Blog.jsx
│   ├── Portfolio.jsx
│   └── NotFound.jsx
├── content/
│   └── blog/
│       └── [markdown files]
├── theme.js
├── App.jsx
└── index.jsx
```

## Recent Updates (Latest)

- Added responsive mobile navigation with hamburger menu
- Implemented dark mode with custom theme configuration
- Created professional footer with contact information
- Built custom 404 error page
- Added loading skeleton components
- Redesigned About page with personal touch
- Fixed color consistency across light/dark modes
- Added automatic scroll-to-top on navigation
- Enhanced blog styling with proper color theming

## Customization

### Theme
Edit `src/theme.js` to customize colors, fonts, and component styles.

### Content
- Portfolio projects: Update the projects array in `PortfolioList.jsx`
- Blog posts: Add markdown files to `src/content/blog/`
- About page: Modify hobbies, interests, and goals in `About.jsx`

## Deployment

The site is configured for GitHub Pages deployment. After building:

```bash
npm run build
# Deploy the build folder to GitHub Pages
```

## License

This project is open source and available under the MIT License.

## Contact

- Email: tf275@cornell.edu
- LinkedIn: [linkedin.com/in/tianyefan](https://www.linkedin.com/in/tianyefan)
- GitHub: [github.com/tianye-ct](https://github.com/tianye-ct)