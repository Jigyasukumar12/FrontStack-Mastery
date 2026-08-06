# 🧩 01 — Components & JSX

---

## 📌 Quick Summary

> **Component = ek reusable UI piece.**
> React mein poori app chhote chhote components se milke banti hai — jaise LEGO blocks.
> **JSX = JavaScript + HTML milake likha syntax** jo React use karta hai UI banane ke liye.

---

## 🧠 Concept — Component Kya Hota Hai?

Soch ek website ka header — logo, nav links, button. Yeh sab ek saath ek `Header` component ban sakta hai. Phir jahan chahiye wahan `<Header />` likh do — baar baar likhne ki zaroorat nahi.

```
App
 ├── Header
 ├── Main
 │    ├── ProductCard
 │    ├── ProductCard
 │    └── ProductCard
 └── Footer
```

---

## 📝 JSX — Rules Yaad Rakho

JSX dikhta hai HTML jaisa, hai nahi. Kuch important differences:

```jsx
// ✅ Sahi JSX
function MyComponent() {
  return (
    <div className="box">   {/* 'class' nahi, 'className' likhte hain */}
      <h1>Namaste!</h1>
      <p style={{ color: "red" }}>Yeh red text hai</p>  {/* style object hota hai */}
    </div>
  );
}

// ❌ Galat — do elements side by side return nahi ho sakte
function MyComponent() {
  return (
    <h1>Heading</h1>
    <p>Paragraph</p>   // ERROR aayega!
  );
}

// ✅ Fix — ek parent mein wrap karo (ya Fragment use karo)
function MyComponent() {
  return (
    <>                 {/* <> </> = React Fragment, extra div nahi banata */}
      <h1>Heading</h1>
      <p>Paragraph</p>
    </>
  );
}
```

---

## 💻 Pehla Component — Khud Banao

Yeh code apne `App.jsx` mein likho:

```jsx
// NameCard — ek simple component jo naam aur role dikhata hai
function NameCard() {
  return (
    <div
      style={{ border: "1px solid gray", padding: "16px", borderRadius: "8px" }}
    >
      <h2>keshav saxena</h2>
      <p>Full Stack Developer</p>
    </div>
  );
}

// App component mein use karo
function App() {
  return (
    <div>
      <h1>Meri App</h1>
      <NameCard /> {/* component use kiya */}
      <NameCard /> {/* dobara use kiya — yahi toh reusability hai! */}
    </div>
  );
}

export default App;
```

### 👀 Observe Karo:

- `<NameCard />` do baar likha — do baar dikha. Yahi reusability hai.
- Component ka naam **capital letter** se shuru hota hai — `NameCard`, `App`, `Header`
- Normal HTML tags lowercase hote hain — `div`, `h1`, `p`

---

## 🔬 Experiment — Khud Try Karo

Yeh banao apne `App.jsx` mein:

```jsx
// Ek ProductCard component banao jisme ho:
// - Product ka naam (h3)
// - Price (p)
// - Ek "Buy Now" button

// Phir App mein use karo 3 baar alag alag products ke liye
```

> 💡 **Tip:** Abhi data hardcoded rakho — next topic (Props) mein seekhenge ki alag alag data kaise pass karein.

---

## 🗂️ Component File Alag Kaise Karte Hain?

Jab app badi hoti hai, har component ka alag file hota hai:

```jsx
// 📁 src/components/NameCard.jsx
function NameCard() {
  return (
    <div>
      <h2>Keshav Saxena</h2>
    </div>
  );
}

export default NameCard; // export karna zaroori hai
```

```jsx
// 📁 src/App.jsx
import NameCard from "./components/NameCard"; // import karo

function App() {
  return (
    <div>
      <NameCard />
    </div>
  );
}

export default App;
```

---

## ✅ Aage Badho Jab:

- [✅] Khud ek component bana liya
- [✅] Component 2-3 baar reuse kar liya
- [✅] Alag file mein component banake import kar liya

---

> ➡️ **Next:** [`../02-props/README.md`](../02-props/README.md) — Components mein data kaise bhejte hain
