# ✨ Hover, Focus & Transitions

---

## 📦 Quick Summary

```
Hover?       → hover:bg-blue-600
Focus?       → focus:ring-2 focus:outline-none
Transition?  → transition duration-200 ease-in-out
Active?      → active:scale-95
```

---

## 🧠 Interactive States

```jsx
// Button with all states
<button className="
  bg-blue-500 text-white px-6 py-2 rounded-lg
  hover:bg-blue-600
  active:scale-95
  transition duration-200
">
  Click Me
</button>

// Input with focus ring
<input className="
  border border-gray-300 rounded px-3 py-2 w-full
  focus:outline-none focus:ring-2 focus:ring-blue-500
  transition duration-150
" />

// Card hover lift effect
<div className="
  bg-white p-6 rounded-xl shadow
  hover:shadow-lg hover:-translate-y-1
  transition duration-300 cursor-pointer
">
  Hover karo!
</div>
```

---

## 🔬 Experiment

Banao: Pricing card — hover pe shadow badhe aur -translate-y-2 ho. Smooth transition ho.

---

> **Next →** `08-dark-mode` 👉
