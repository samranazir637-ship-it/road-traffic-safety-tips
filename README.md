# Traffic and Road Safety Web App

A modern, interactive React.js web application designed to promote road safety awareness through engaging visual content and animations.

## Features

✨ **Key Features:**
- **Interactive Safety Tips Section** - Animated cards with safety tips that appear on scroll
- **Responsive Design** - Fully responsive layout that works on all devices
- **Smooth Animations** - CSS and React-powered animations for smooth user experience
- **Modern UI** - Beautiful gradient backgrounds and smooth transitions
- **Accessibility** - Built with accessibility in mind

## Safety Tips Included

The app features 8 essential road safety tips:
1. 🔒 Wear Your Seatbelt
2. ⚡ Follow Speed Limits
3. 📱 Avoid Distractions
4. 👀 Check Your Mirrors
5. 🔧 Maintain Your Vehicle
6. 🛡️ Drive Defensively
7. 😴 Don't Drive When Tired
8. 👉 Use Proper Signals

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool for fast development
- **CSS3** - Animations and styling

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

The app will open at `http://localhost:5173` in your default browser (or `http://localhost:5174` if port 5173 is in use).

### Building for Production

Create an optimized production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
project/
├── src/
│   ├── components/
│   │   ├── SafetyTipsSection.tsx      # Main safety tips component
│   │   └── SafetyTipsSection.css      # Component styles
│   ├── App.tsx                        # Main app component
│   ├── App.css                        # App styles
│   ├── main.tsx                       # React entry point
│   ├── index.css                      # Global styles
│   └── vite-env.d.ts                 # Vite type definitions
├── index.html                         # HTML entry point
├── vite.config.ts                     # Vite configuration
├── tsconfig.json                      # TypeScript configuration
└── package.json                       # Project dependencies
```

## Features Breakdown

### Scroll-Based Animations
- Cards animate in as they come into view using Intersection Observer API
- Staggered animation timing for visual appeal
- Smooth fade-in and slide-up effects

### Interactive Cards
- Hover effects with smooth transitions
- Icon animations and scaling
- Responsive grid layout

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Flexible grid system

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- [ ] Add interactive quiz section
- [ ] Include statistics on road safety
- [ ] Add accident prevention scenarios
- [ ] Implement user feedback and comments
- [ ] Add more safety tips and categories
- [ ] Multi-language support

## Contributing

Feel free to modify and enhance this project! Some ideas:
- Add more safety tips
- Improve animations
- Add interactive features
- Enhance mobile experience

## License

ISC

## Support

For issues or questions, please create an issue in the project repository.

---

**Drive safely, arrive happily!** 🚗💨
