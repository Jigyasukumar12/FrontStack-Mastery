# ⚡ Redux Toolkit — State Management Ka Modern Tareeka

> **Pehle React (hooks, props, state) complete karo, phir yahan aao**

---

## 📦 Quick Summary

```
Redux kya hai?         → Global state management library
RTK kya hai?           → Redux Toolkit — Redux likhne ka official, easy tareeka
Purana Redux vs RTK?   → RTK mein boilerplate 80% kam, immer built-in, thunk built-in
Kab use karna chahiye? → Jab state bahut components mein share ho raha ho (auth, cart, theme)
```

---

## 🗺️ Topics Order

```
01-setup-and-basics         ← Pehle yeh
02-createslice-and-reducers
03-usedispatch-useselector
04-store-multiple-slices
05-async-thunk               ← API calls yahan se
06-rtk-query-basics
07-rtk-query-mutations-caching
08-middleware-devtools
09-folder-structure-patterns ← Yahan tak aa gaye toh RTK ho gaya
```

---

## ⚙️ Setup — Vite + React Project Mein

```bash
npm install @reduxjs/toolkit react-redux
```

```
src/
  app/
    store.js
  features/
    counter/
      counterSlice.js
  main.jsx
```

> **Ab `01-setup-and-basics` kholo →**
