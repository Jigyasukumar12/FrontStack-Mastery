# 🌙 Dark Mode in Tailwind

---

## 📦 Quick Summary

```
Enable kaise?   → tailwind.config.js mein darkMode: 'class'
Use kaise?      → dark:bg-gray-900 dark:text-white
Toggle kaise?   → html tag pe 'dark' class add/remove karo
```

---

## ⚙️ Setup

```js
// tailwind.config.js
export default {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx}"],
  theme: { extend: {} },
  plugins: [],
}
```

---

## 🧠 Dark Mode Classes

```jsx
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6">
  <h1 className="text-2xl font-bold">Hello!</h1>
  <p className="text-gray-600 dark:text-gray-300">
    Light aur dark dono mein acha dikhega.
  </p>
</div>
```

---

## 🔄 Toggle Button

```jsx
function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button onClick={toggleTheme} className="p-2 rounded-full border">
      {isDark ? '☀️' : '🌙'}
    </button>
  );
}
```

---

## 🔬 Experiment

Poori app ka dark mode banao — navbar, cards, inputs, text. Toggle button add karo.

---

> **Next →** `09-common-ui-components` 👉
