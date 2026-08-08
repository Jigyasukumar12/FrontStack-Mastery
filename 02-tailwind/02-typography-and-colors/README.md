# ✍️ Typography & Colors

---

## 📦 Quick Summary

```
Font size?    → text-sm, text-base, text-lg, text-xl, text-2xl...
Font weight?  → font-thin, font-normal, font-medium, font-bold
Text align?   → text-left, text-center, text-right
Colors?       → text-{color}-{shade}, bg-{color}-{shade}
```

---

## 📝 Font Sizes

```jsx
<p className="text-xs">Extra Small — 12px</p>
<p className="text-sm">Small — 14px</p>
<p className="text-base">Base — 16px (default)</p>
<p className="text-lg">Large — 18px</p>
<p className="text-xl">XL — 20px</p>
<p className="text-2xl">2XL — 24px</p>
<p className="text-3xl">3XL — 30px</p>
<p className="text-4xl">4XL — 36px</p>
```

---

## 💪 Font Weights

```jsx
<p className="font-thin">Thin (100)</p>
<p className="font-normal">Normal (400)</p>
<p className="font-medium">Medium (500)</p>
<p className="font-semibold">Semibold (600)</p>
<p className="font-bold">Bold (700)</p>
```

---

## 🎨 Complete Color Palette

```jsx
{/* Common colors */}
text-slate-500   text-gray-500   text-zinc-500
text-red-500     text-orange-500 text-amber-500
text-yellow-500  text-lime-500   text-green-500
text-teal-500    text-cyan-500   text-blue-500
text-indigo-500  text-violet-500 text-purple-500
text-pink-500    text-rose-500

{/* Backgrounds bhi same pattern */}
bg-blue-500  bg-red-100  bg-green-900
```

---

## 🔬 Experiment

Banao: Ek article card — title (bold, 2xl), subtitle (gray, sm), body text (base), tag badges (colored small pills)

---

## ❓ Interview Question

**Q: Tailwind mein custom color kaise add karte hain?**
> `tailwind.config.js` mein `theme.extend.colors` mein add karo:
> `colors: { brand: '#FF5733' }` → phir `text-brand` use kar sakte ho.

---

> **Next →** `03-spacing-sizing` 👉
