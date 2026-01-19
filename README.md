# Tinvention Web - High-Tech Redesign

A premium, high-tech React application built for Tinvention s.r.l. This project features a state-of-the-art UI with glassmorphism, multi-language support, and a robust light/dark theme system.

## 🚀 Technology Stack

- **Framework**: [React 18](https://reactjs.org/) with [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Vanilla CSS with modern features (CSS Variables, Flexbox/Grid, Glassmorphism)
- **Internationalization**: Custom Context-based I18n system
- **Routing**: [React Router 6](https://reactrouter.com/)

## 📂 Project Structure

```text
src/
├── components/          # Reusable UI components (Navbar, Footer, etc.)
├── context/             # React Contexts (Language, Theme)
├── pages/               # Top-level route components (Home, Legal)
├── sections/            # Sections for the Home page
├── translations/        # I18n dictionary files (it.ts, en.ts)
├── App.tsx              # Main application logic & routing
├── main.tsx             # Entry point
└── index.css            # Global styles and theme tokens
```

## 🛠️ Key Features

### 1. Premium Loading Screen
A high-tech splash screen integrated into the application's entry. It uses Framer Motion for silk-smooth animations and displays the official brand logo.

### 2. Multi-Language System (I18n)
Managed via `LanguageContext`.
- **Dictionaries**: Located in `src/translations/`.
- **Usage**: Use the `useTranslation` hook to access localized strings.
- **Support**: Italian (IT) and English (EN).

### 3. Theme System (Light/Dark)
A fully adaptive theme system managed via `ThemeContext`.
- **CSS Variables**: Managed in `index.css` using `[data-theme='light']`.
- **Persistence**: User preference is saved in `localStorage`.
- **Animations**: Smooth transitions between modes.

### 4. Legal Compliance
A dedicated `LegalPage` handles all legal notices (Privacy Policy, Cookies, etc.) with 100% content parity with the original site.

## 💻 Development

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+) or [Bun](https://bun.sh/)

### Installation
```bash
bun install
# or
npm install
```

### Running Locally
```bash
bun run dev
# or
npm run dev
```

### Production Build
```bash
bun run build
# or
npm run build
```

## 🎨 Design Principles
- **Glassmorphism**: Extensive use of semi-transparent backgrounds with back-drop filters.
- **Interactive**: High emphasis on micro-interactions and scroll-triggered animations.
- **Performance**: Route-level and component-level lazy loading implemented to ensure optimal performance.

## 💡 Developer's Note

This project was built with a "Performance-First" mindset. Every animation and transition has been hand-tuned to ensure a 60fps experience, even on mid-range devices. The goal was to translate Tinvention's corporate identity into a tangible, interactive digital experience.

## 🎨 Design Philosophy
- **Detail over Generic**: Avoid standard components; everything from the loader to the scroll bar has been customized.
- **Micro-interactions**: Subtle hover states and scroll-reveal effects that guide the user's eye without being distracting.
- **Glassmorphism 2.0**: Utilizing modern CSS backdrop filters and RGB variables for deep, layered UI components.

---
Developed with ❤️ by **Javier Echevarria**.

🔗 [LinkedIn](https://www.linkedin.com/in/javier-echevarria-57690639b) | 🌐 [Portfolio](https://wildfoxy.dev)


