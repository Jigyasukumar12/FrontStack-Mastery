# 🧱 Common UI Components — Tailwind Recipes

---

## 📦 Quick Summary

```
Yahan kya hai?   → Ready-to-use component patterns
Use kaise?       → Dekho → samjho → apna version banao
Goal?            → In patterns ko bina soche likh pao
```

---

## 🔘 Button Variants

```jsx
// Primary
<button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-lg transition">
  Primary
</button>

// Outline
<button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2.5 rounded-lg transition">
  Outline
</button>

// Danger
<button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2.5 rounded-lg transition">
  Delete
</button>
```

---

## 🃏 Card

```jsx
<div className="bg-white rounded-2xl shadow-md p-6 max-w-sm hover:shadow-lg transition">
  <img src="..." className="w-full h-48 object-cover rounded-xl mb-4" />
  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Tag</span>
  <h3 className="text-xl font-semibold mt-2 mb-1">Card Title</h3>
  <p className="text-gray-500 text-sm">Short description here.</p>
  <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
    Read More
  </button>
</div>
```

---

## 📝 Input Field

```jsx
<div className="flex flex-col gap-1">
  <label className="text-sm font-medium text-gray-700">Email</label>
  <input
    type="email"
    className="border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
    placeholder="you@example.com"
  />
</div>
```

---

## 🏷️ Badge

```jsx
<span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
  Active ✅
</span>
<span className="px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
  Inactive ❌
</span>
```

---

## 🔬 Final Experiment

Sirf Tailwind use karke banao:
- Navbar (logo + links + dark toggle)
- Hero section (heading + 2 buttons)
- Features grid (3 cards)
- Footer

Koi custom CSS nahi.

---

## ❓ Interview Question

**Q: Tailwind mein `@apply` kab use karte hain?**
> Jab ek hi set of classes baar baar repeat ho. Lekin zyada use avoid karo — component banao instead.

---

> 🎉 Tailwind complete! Ab `03-nextjs` folder mein jao 👉
