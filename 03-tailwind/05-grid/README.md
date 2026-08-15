# 🔲 Grid in Tailwind

---

## 📦 Quick Summary

```
Enable grid?    → grid
Columns?        → grid-cols-2, grid-cols-3, grid-cols-4
Gap?            → gap-4, gap-x-4, gap-y-4
Span?           → col-span-2 (2 columns le lo)
```

---

## 🧠 Grid Cheatsheet

```jsx
{/* 3 column grid */}
<div className="grid grid-cols-3 gap-4">
  <div className="bg-blue-100 p-4">1</div>
  <div className="bg-blue-100 p-4">2</div>
  <div className="bg-blue-100 p-4">3</div>
  <div className="bg-blue-100 p-4">4</div>
  <div className="bg-blue-100 p-4">5</div>
</div>

{/* Column spanning */}
<div className="grid grid-cols-4 gap-4">
  <div className="col-span-2">Half width</div>  {/* 2 columns leta hai */}
  <div className="col-span-1">Quarter</div>
  <div className="col-span-1">Quarter</div>
</div>

{/* Auto-fit — responsive without breakpoints */}
<div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
  {/* Automatically adjust columns */}
</div>
```

---

## 🏗️ Real Examples

```jsx
{/* Product cards grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {products.map(p => <ProductCard key={p.id} {...p} />)}
</div>

{/* Dashboard layout */}
<div className="grid grid-cols-12 gap-4">
  <aside className="col-span-2">Sidebar</aside>
  <main className="col-span-8">Main Content</main>
  <aside className="col-span-2">Right Panel</aside>
</div>
```

---

## 🔬 Experiment

Banao: Photo gallery — 4 column grid, pehli photo `col-span-2 row-span-2` (badi wali).

---

> **Next →** `06-responsive-design` 👉
