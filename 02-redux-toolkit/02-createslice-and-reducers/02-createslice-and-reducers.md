# 🍰 createSlice — Actions + Reducers Ek Saath

---

## 📦 Quick Summary

```
Slice kya hai?        → State ka ek chhota tukda (e.g. "counter", "cart", "auth")
createSlice deta kya?  → Reducer + Actions automatically bana deta hai
Mutate kar sakte?      → Haan! Immer ki wajah se "direct mutation" likh sakte ho
Export kya karna?      → actions (named) + reducer (default)
```

---

## 🧠 createSlice Anatomy

```js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',           // slice ka naam — action type prefix banega
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;       // ⚡ direct mutation — Immer ki wajah se allowed
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;   // payload = dispatch ke time bheja data
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions;
export default counterSlice.reducer;
```

---

## 🤔 "Direct Mutation" Allowed Kaise Hai?

```
Normal Redux mein   → state ko kabhi mutate nahi karte, naya object return karte
RTK mein            → createSlice ke andar "Immer" library use hoti hai
Immer kya karta?     → Tumhara "mutation" code dekh ke khud immutable update bana deta hai

// Tumne likha:
state.value += 1;

// Immer ne actually kiya:
return { ...state, value: state.value + 1 };
```

> ⚠️ Yeh magic sirf `createSlice`/`createReducer` ke andar kaam karta hai — bahar normal JS mein state mutate mat karo.

---

## 📝 Object/Array State Ke Saath Kaam

```js
const todoSlice = createSlice({
  name: 'todos',
  initialState: { items: [] },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);   // push allowed hai (Immer)
    },
    removeTodo: (state, action) => {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.items.find(t => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
  },
});
```

---

## 🎯 Action Kaise Dispatch Karte Hain (Preview)

```jsx
import { useDispatch } from 'react-redux';
import { increment, incrementByAmount } from './counterSlice';

function Counter() {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </>
  );
}
```

> Detail agle topic (`03-usedispatch-useselector`) mein.

---

## 🔬 Experiment — Khud Try Karo

Ek `cartSlice` banao jisme:
- `addItem(state, action)` — item array mein push kare
- `removeItem(state, action)` — id se filter kare
- `clearCart(state)` — array empty kar de

---

## ❓ Interview Questions

**Q: `createSlice` internally kya karta hai?**
> Ek hi jagah pe action types, action creators, aur reducer generate kar deta hai. Action type automatically `sliceName/reducerName` pattern se banta hai — jaise `counter/increment`.

**Q: Immer kyun use hota hai RTK mein?**
> Immutability manually maintain karna error-prone aur verbose hota hai (spread operators har jagah). Immer se hum seedha mutate jaisa syntax likh sakte hain, aur woh background mein immutable update khud bana deta hai — code clean rehta hai.

**Q: `action.payload` kya hota hai?**
> Jab tum `dispatch(incrementByAmount(5))` karte ho, toh `5` `action.payload` ban jaata hai. Default action shape: `{ type: 'counter/incrementByAmount', payload: 5 }`.

---

> **Next →** `03-usedispatch-useselector` 👉
