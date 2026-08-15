# 🔌 useSelector & useDispatch — Component Ko Store Se Jodna

---

## 📦 Quick Summary

```
useSelector?   → Store se data READ karne ke liye
useDispatch?   → Store ko action SEND (dispatch) karne ke liye
Re-render kab? → Jab useSelector ka return value change hota hai
Kaha se aate?  → 'react-redux' package se
```

---

## 🧠 useSelector — State Padhna

```jsx
import { useSelector } from 'react-redux';

function Counter() {
  // state.counter → store.js mein "counter" key se match karta hai
  const count = useSelector((state) => state.counter.value);

  return <h1>Count: {count}</h1>;
}
```

```
useSelector((state) => state.counter.value)
                ↑                ↑        ↑
          poora store      slice naam   field
```

---

## 🧠 useDispatch — Action Bhejna

```jsx
import { useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './counterSlice';

function Counter() {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2">
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>+10</button>
    </div>
  );
}
```

---

## 🏗️ Full Working Example

```jsx
// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

```jsx
// Counter.jsx
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-4">
      <button onClick={() => dispatch(decrement())}>➖</button>
      <span className="text-2xl font-bold">{count}</span>
      <button onClick={() => dispatch(increment())}>➕</button>
    </div>
  );
}
```

---

## ⚠️ Common Mistakes

```jsx
// ❌ Poora state select karna — unnecessary re-renders badha deta hai
const state = useSelector((state) => state);

// ✅ Sirf jo chahiye woh select karo
const value = useSelector((state) => state.counter.value);

// ❌ useSelector ke andar naya object banana — har render pe re-render trigger karega
const user = useSelector((state) => ({ name: state.user.name, age: state.user.age }));

// ✅ Alag-alag useSelector calls, ya createSelector (memoized selector) use karo
const name = useSelector((state) => state.user.name);
const age = useSelector((state) => state.user.age);
```

---

## 🔬 Experiment — Khud Try Karo

Ek `themeSlice` banao (`mode: 'light' | 'dark'`), ek `toggleTheme` reducer likho, aur ek button banao jo `useSelector` se current mode dikhaye aur `useDispatch` se toggle kare. Bonus: `dark:` Tailwind classes ke saath preview bhi karo.

---

## ❓ Interview Questions

**Q: `useSelector` component ko kab re-render karwata hai?**
> Jab selector function ka return value pichli value se strictly different (`!==`) hota hai. Isliye naya object/array return karne se avoid karna chahiye jab tak zaroori na ho.

**Q: `useDispatch` aur `connect()` (old pattern) mein kya fark hai?**
> `connect()` HOC (Higher Order Component) tha jo class components ke liye tha. `useDispatch`/`useSelector` hooks hain jo function components mein directly use hote hain — modern approach, kam boilerplate.

---

> **Next →** `04-store-multiple-slices` 👉
