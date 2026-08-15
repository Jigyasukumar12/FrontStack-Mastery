# 📦 Flexbox in Tailwind

---

## 📦 Quick Summary

```
Enable flex?       → flex
Direction?         → flex-row (default), flex-col
Align main axis?   → justify-start/center/end/between/around
Align cross axis?  → items-start/center/end/stretch
Wrap?              → flex-wrap
```

---

## 🧠 Flexbox Cheatsheet

```jsx
{/* Basic flex container */}
<div className="flex">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

{/* Center karna — horizontal + vertical */}
<div className="flex items-center justify-center h-screen">
  <p>Perfectly centered!</p>
</div>

{/* Space between items */}
<div className="flex justify-between items-center p-4">
  <span>Logo</span>
  <nav>Menu</nav>
</div>

{/* Column direction */}
<div className="flex flex-col gap-4">
  <div>Top</div>
  <div>Middle</div>
  <div>Bottom</div>
</div>
```

---

## 🏗️ Common Patterns

```jsx
{/* Navbar */}
<nav className="flex items-center justify-between px-6 py-4 bg-white shadow">
  <span className="text-xl font-bold">Logo</span>
  <div className="flex gap-6">
    <a href="/">Home</a>
    <a href="/about">About</a>
  </div>
</nav>

{/* Card with icon */}
<div className="flex items-start gap-3 p-4">
  <span className="text-2xl">📦</span>
  <div>
    <h3 className="font-semibold">Title</h3>
    <p className="text-gray-500 text-sm">Description</p>
  </div>
</div>

{/* Flex item grow */}
<div className="flex gap-4">
  <input className="flex-1 border p-2 rounded" placeholder="Search..." />
  <button className="bg-blue-500 text-white px-4 rounded">Go</button>
</div>
```

---

## 🔬 Experiment

Sirf Tailwind se banao:
1. Navbar — logo left, links right
2. Hero section — text left, image right  
3. Footer — 3 columns equally spaced

---

## ❓ Interview Question

**Q: `justify-content` aur `align-items` mein kya fark hai?**
> `justify-content` (justify-*) main axis pe align karta hai (flex-row mein horizontal). `align-items` (items-*) cross axis pe (flex-row mein vertical).

---

> **Next →** `05-grid` 👉
