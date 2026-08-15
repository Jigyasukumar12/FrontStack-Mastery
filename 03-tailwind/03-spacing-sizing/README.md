# 📏 Spacing & Sizing

---

## 📦 Quick Summary

```
Width?     → w-full, w-1/2, w-64, w-screen
Height?    → h-full, h-screen, h-64, h-auto
Max/Min?   → max-w-sm, max-w-lg, max-w-screen-xl, min-h-screen
Gap?       → gap-4 (flex/grid ke saath)
```

---

## 📐 Width & Height

```jsx
<div className="w-full">  {/* 100% */}
<div className="w-1/2">   {/* 50% */}
<div className="w-1/3">   {/* 33.3% */}
<div className="w-64">    {/* 256px */}
<div className="w-screen">{/* 100vw */}

<div className="h-screen"> {/* 100vh */}
<div className="h-full">   {/* 100% parent */}
<div className="h-64">     {/* 256px */}
<div className="min-h-screen"> {/* minimum full page height */}
```

---

## 📦 Max Width — Layout Ke Liye

```jsx
{/* Container pattern — max width + center */}
<div className="max-w-4xl mx-auto px-4">
  {/* Yeh content center mein rahega, zyada wide nahi hoga */}
</div>

{/* Common max-widths */}
max-w-sm   → 384px
max-w-md   → 448px
max-w-lg   → 512px
max-w-xl   → 576px
max-w-2xl  → 672px
max-w-4xl  → 896px
max-w-6xl  → 1152px
```

---

## 🔬 Experiment

Banao: Ek centered page layout — max-w-5xl, navbar full width, main content centered with padding.

---

> **Next →** `04-flexbox` 👉
