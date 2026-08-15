# 🎨 Tailwind CSS — Utility-First Styling

> **Pehle React complete karo, phir yahan aao**

---

## 📦 Quick Summary

```
Tailwind kya hai?    → Utility-first CSS framework
Kaise kaam karta?    → Classes directly HTML/JSX mein lagate hain
Bootstrap se fark?   → Tailwind mein custom classes hain, predefined components nahi
```

---

## 🗺️ Topics Order

```
01-setup-and-basics      ← Pehle yeh
02-typography-and-colors
03-spacing-sizing
04-flexbox
05-grid
06-responsive-design
07-hover-states
08-dark-mode
09-common-ui-components  ← Yahan tak aa gaye toh Tailwind ho gaya
```

---

## ⚙️ Setup — Vite + React Project Mein

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

```js
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
}
```

```css
/* src/index.css mein yeh teen lines add karo */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

> **Ab `01-setup-and-basics` kholo →**
