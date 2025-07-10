# Ladakh Taxi Services - Modern Website

A beautiful, responsive website for taxi services and custom tours in Leh Ladakh, built with modern technologies including Tailwind CSS and vanilla JavaScript.

## 🚀 Features

### Design & UX

- **Modern & Sleek Design**: Clean, professional layout with smooth animations
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Intersection Observer-based scroll animations
- **Interactive Elements**: Hover effects, transitions, and micro-interactions
- **Accessibility**: WCAG compliant with proper semantic HTML

### Technical Features

- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Vanilla JavaScript**: Modern ES6+ JavaScript with no dependencies
- **Performance Optimized**: Lazy loading, debounced scroll handlers
- **SEO Friendly**: Proper meta tags and structured data
- **PWA Ready**: Service worker registration for offline capabilities

### Content Sections

- **Hero Section**: Stunning landing with parallax effect
- **Services**: Airport transfers, custom tours, hotel transfers, photography tours
- **Fleet Showcase**: Premium vehicles with image galleries
- **About Us**: Company information and key features
- **Contact Form**: Integrated with FormSubmit.co
- **Floating Contact**: WhatsApp and phone quick access

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first CSS framework
- **Vanilla JavaScript**: Modern ES6+ features
- **Font Awesome**: Icons
- **Google Fonts**: Inter & Poppins typography
- **FormSubmit.co**: Form handling service

## 📁 Project Structure

```
taxiInLadakh/
├── assets/
│   ├── css/
│   │   └── output.css      # Compiled Tailwind CSS
│   ├── js/
│   │   └── script.js       # Modern JavaScript functionality
│   └── images/             # All taxi and destination images
├── src/
│   └── input.css           # Tailwind directives and custom styles
├── index.html              # Main website page
├── thank-you.html          # Thank you page
├── sw.js                   # Service worker for PWA
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
└── package.json            # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the project directory**

   ```bash
   cd taxiInLadakh
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Open `index-new.html` in your browser
   - Or serve with a local server like Live Server (VS Code extension)

### Build for Production

```bash
npm run build
```

This will create a minified CSS file in `dist/output.css`.

## 🎨 Design System

### Color Palette

- **Primary Blue**: `#3b82f6` (Blue-500)
- **Secondary Gray**: `#64748b` (Slate-500)
- **Success Green**: `#10b981` (Emerald-500)
- **Background**: `#f8fafc` (Slate-50)

### Typography

- **Display Font**: Poppins (Headings)
- **Body Font**: Inter (Body text)
- **Font Weights**: 300, 400, 500, 600, 700, 800

### Components

- **Buttons**: Primary and secondary button styles
- **Cards**: Hover effects with shadow transitions
- **Forms**: Styled inputs with focus states
- **Navigation**: Responsive navbar with mobile menu

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Customization

### Colors

Edit `tailwind.config.js` to modify the color palette:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    // ... other shades
    900: '#1e3a8a',
  }
}
```

### Animations

Custom animations are defined in `tailwind.config.js`:

```javascript
animation: {
  'fade-in': 'fadeIn 0.6s ease-out',
  'slide-up': 'slideUp 0.6s ease-out',
}
```

### Components

Custom component classes are defined in `src/input.css`:

```css
@layer components {
  .btn-primary {
    @apply bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl;
  }
}
```

## 📞 Contact Information

- **Phone**: +91 80823 40177
- **Email**: taxiinleh@gmail.com
- **Location**: Leh, Ladakh, India
- **WhatsApp**: [Click to chat](https://wa.me/8082340177)

## 🌟 Key Improvements from Original

### Design Enhancements

- **Modern UI/UX**: Clean, professional design with better visual hierarchy
- **Improved Typography**: Better font pairing and spacing
- **Enhanced Animations**: Smooth scroll animations and hover effects
- **Better Mobile Experience**: Optimized mobile navigation and touch interactions

### Technical Improvements

- **Performance**: Optimized CSS with Tailwind's purge
- **Maintainability**: Utility-first CSS approach
- **Accessibility**: Better semantic HTML and ARIA labels
- **SEO**: Improved meta tags and structured data

### User Experience

- **Faster Loading**: Optimized images and CSS
- **Better Navigation**: Improved mobile menu and smooth scrolling
- **Enhanced Forms**: Better form validation and user feedback
- **Social Integration**: Direct WhatsApp and phone integration

## 📄 License

This project is for Ladakh Taxi Services. All rights reserved.

## 🤝 Contributing

For any improvements or bug fixes, please contact the development team.

---

**Built with ❤️ for Ladakh Taxi Services**
