# 🏗️ RTK Setup & Basics — Store Kaise Banate Hain

---

## 📦 Quick Summary

```
Store kya hai?       → Poori app ka ek hi global state object
configureStore?      → Store banane ka RTK function (auto devtools + thunk)
Provider kya karta?  → Poori app ko store se connect karta hai
Kaha likhna hai?      → app/store.js mein store, main.jsx mein Provider
```

---

## 🤔 Purana Redux vs RTK

```js
// ❌ Purana Redux — bahut boilerplate
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
const rootReducer = combineReducers({ counter: counterReducer });
const store = createStore(rootReducer, applyMiddleware(thunk));

// ✅ Redux Toolkit — seedha, saaf
import { configureStore } from '@reduxjs/toolkit';
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

RTK mein `configureStore` khud hi:
- Redux DevTools enable kar deta hai
- `redux-thunk` middleware add kar deta hai
- Development mein "state ko directly mutate mat karo" wali checks laga deta hai

---

## ⚙️ Step-by-Step Setup

```bash
npm install @reduxjs/toolkit react-redux
```

### 1️⃣ Store banao — `app/store.js`

```js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // yahan aur slices add karte jao
  },
});
```

### 2️⃣ Provider se app ko wrap karo — `main.jsx`

```jsx
import { Provider } from 'react-redux';
import { store } from './app/store';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

### 3️⃣ Ab koi bhi component store use kar sakta hai

```jsx
import { useSelector, useDispatch } from 'react-redux';
// (detail agla topic mein)
```

---

## 🧠 Mental Model

```
Component  →  dispatch(action)  →  Reducer  →  Store update  →  Component re-render
    ↑___________________________________________________________|
```

- **Store** = ek single JS object jisme poori app ka state hai
- **Action** = "kya hua" ka message (e.g. `{ type: 'counter/increment' }`)
- **Reducer** = pure function jo action ke basis pe naya state return karta hai
- **Dispatch** = action ko store tak bhejne ka tareeka

---

## 🔬 Experiment — Khud Try Karo

Ek naya Vite React project banao, RTK install karo, ek empty store setup karo (`reducer: {}`), Provider se app wrap karo, aur `console.log(store.getState())` karke check karo ki empty object aa raha hai.

---

## ❓ Interview Questions

**Q: Redux Toolkit kyun banaya gaya?**
> Purane Redux mein bahut zyada boilerplate tha — action types, action creators, switch-case reducers sab manually likhne padte the. RTK ne `createSlice`, `configureStore` jaise helpers dekar ye kaam automate kar diya.

**Q: `configureStore` aur purane `createStore` mein kya fark hai?**
> `configureStore` internally `createStore` hi use karta hai, lekin saath mein DevTools, thunk middleware, aur dev-mode mutation checks by default enable kar deta hai.

---

> **Next →** `02-createslice-and-reducers` 👉
