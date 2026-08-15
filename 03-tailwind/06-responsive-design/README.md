# 📱 Responsive Design in Tailwind

---

## 📦 Quick Summary

```
Breakpoints?    → sm(640px), md(768px), lg(1024px), xl(1280px)
Kaise use?      → prefix lagao: md:text-xl lg:flex
Mobile-first?   → Haan — pehle mobile, phir bade screens ke liye override
```

---

## 🧠 Breakpoint System

```jsx
// Mobile first — bina prefix = sab screens pe
<div className="text-sm md:text-base lg:text-lg">
  {/* 
    Mobile:  text-sm
    Tablet:  text-base  
    Desktop: text-lg
  */}
</div>

// Columns — mobile 1, tablet 2, desktop 4
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  ...
</div>

// Hide/Show on specific screens
<div className="hidden md:block">Desktop par dikhega</div>
<div className="block md:hidden">Mobile par dikhega</div>
```

---

## 🏗️ Responsive Navbar Pattern

```jsx
<nav className="flex items-center justify-between px-4 py-3">
  <span className="font-bold text-lg">Logo</span>
  
  {/* Desktop links */}
  <div className="hidden md:flex gap-6">
    <a href="/">Home</a>
    <a href="/about">About</a>
  </div>
  
  {/* Mobile hamburger */}
  <button className="md:hidden">☰</button>
</nav>
```

---

## 🔬 Experiment

Banao: Card layout — mobile pe 1 column, tablet pe 2, desktop pe 3 columns.

---

## ❓ Interview Question

**Q: Tailwind mobile-first kyun hai?**
> Default styles mobile ke liye hain, md:/lg: prefixes bade screens ke liye override karte hain. Mobile browsers sirf apni CSS parse karte hain — better performance.

---

> **Next →** `07-hover-states` 👉
