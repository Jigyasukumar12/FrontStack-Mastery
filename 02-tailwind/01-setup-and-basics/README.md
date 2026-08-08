# 🎨 Tailwind Setup & Basics — Utility Classes Kya Hain

---

## 📦 Quick Summary

```
Utility class kya?   → Ek class = ek CSS property
Pehle kaise?         → .card { padding: 16px; color: blue; font-size: 18px; }
Tailwind mein?       → className="p-4 text-blue-500 text-lg"
Fayda kya?           → CSS file alag nahi likhni — sab JSX mein
```

---

## 🤔 Normal CSS vs Tailwind

```jsx
// ❌ Normal CSS
// style.css
.button {
  background-color: blue;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
}

// component.jsx
<button className="button">Click</button>

// ✅ Tailwind
<button className="bg-blue-500 text-white px-4 py-2 rounded">
  Click
</button>
```

---

## 🧠 Class Naming Pattern Samjho

```
bg-blue-500     → background-color: blue (500 = shade)
text-white      → color: white
text-lg         → font-size: large
p-4             → padding: 1rem (4 * 0.25rem)
px-4            → padding left + right
py-2            → padding top + bottom
m-4             → margin: 1rem
mt-2            → margin-top
rounded         → border-radius: 0.25rem
rounded-full    → border-radius: 9999px (circle)
w-full          → width: 100%
h-10            → height: 2.5rem
```

---

## 🎨 Colors Ka System

```jsx
{/* Shades: 50 (lightest) → 900 (darkest) */}
<div className="bg-blue-100">Bahut light blue</div>
<div className="bg-blue-500">Medium blue</div>
<div className="bg-blue-900">Dark blue</div>

{/* Text colors */}
<p className="text-gray-600">Gray text</p>
<p className="text-red-500">Red text</p>
<p className="text-green-700">Dark green text</p>
```

---

## 📏 Spacing System (p, m)

```
p-0  → 0px
p-1  → 4px
p-2  → 8px
p-3  → 12px
p-4  → 16px
p-5  → 20px
p-6  → 24px
p-8  → 32px
p-10 → 40px
p-12 → 48px
```

```jsx
{/* Directions */}
<div className="pt-4">  {/* padding-top */}
<div className="pb-4">  {/* padding-bottom */}
<div className="pl-4">  {/* padding-left */}
<div className="pr-4">  {/* padding-right */}
<div className="px-4">  {/* left + right */}
<div className="py-4">  {/* top + bottom */}
```

---

## 🔬 Experiment — Khud Try Karo

Sirf Tailwind classes use karke yeh banao — koi custom CSS nahi:

```jsx
function Card() {
  return (
    <div className="???">  {/* white bg, shadow, rounded, padding */}
      <h2 className="???"> {/* large, bold, dark text */}
        My Profile
      </h2>
      <p className="???">  {/* gray text, small */}
        3rd Year CSE Student
      </p>
      <button className="???"> {/* blue bg, white text, rounded, padding */}
        Connect
      </button>
    </div>
  );
}
```

Hint: `bg-white shadow-md rounded-lg p-6 max-w-sm`

---

## ❓ Interview Questions

**Q: Tailwind aur Bootstrap mein kya fark hai?**
> Bootstrap mein predefined components hain (btn, card, navbar). Tailwind mein sirf utility classes hain — tum khud design karo. Tailwind zyada flexible hai, Bootstrap zyada quick hai.

**Q: Tailwind se CSS file badi nahi ho jaati?**
> Nahi — Tailwind sirf wo classes include karta hai jo tumne actually use ki hain (PurgeCSS/tree-shaking). Production build mein file bahut chhoti hoti hai.

---

> **Next →** `02-typography-and-colors` 👉
