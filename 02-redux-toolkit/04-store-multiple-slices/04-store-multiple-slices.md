# 🧩 Multiple Slices — Store Ko Scale Karna

---

## 📦 Quick Summary

```
Ek app mein kitne slices? → Jitni "features" hain (auth, cart, theme, todos...)
Sab slices kaha combine?   → configureStore ke "reducer" object mein
Ek slice dusre ko access?  → getState() ya thunk mein state.otherSlice se
```

---

## 🏗️ Real Project Structure

```
src/
  app/
    store.js
  features/
    auth/
      authSlice.js
    cart/
      cartSlice.js
    theme/
      themeSlice.js
```

---

## ⚙️ Store Mein Sab Slices Jodna

```js
// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import cartReducer from '../features/cart/cartSlice';
import themeReducer from '../features/theme/themeSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    theme: themeReducer,
  },
});
```

Ab store ka shape aisa dikhega:

```js
{
  auth:  { user: null, isLoggedIn: false },
  cart:  { items: [], total: 0 },
  theme: { mode: 'light' },
}
```

---

## 🧠 Example — Cart Slice with Derived Values

```js
// features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], total: 0 },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.total += action.payload.price;
    },
    removeItem: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) state.total -= item.price;
      state.items = state.items.filter(i => i.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
```

```jsx
// Component mein use
const items = useSelector((state) => state.cart.items);
const total = useSelector((state) => state.cart.total);
```

---

## 🔗 Ek Slice Se Dusre Slice Ka Data Chahiye Ho Toh?

```js
// Thunk ke andar (async logic)
export const checkoutCart = () => (dispatch, getState) => {
  const { cart, auth } = getState();
  if (!auth.isLoggedIn) {
    return console.log('Pehle login karo!');
  }
  console.log('Checkout karo:', cart.items);
};
```

> Reducers ke andar directly dusri slice ka data access nahi karte — yeh logic thunks/components mein rakhte hain (separation of concerns).

---

## 🔬 Experiment — Khud Try Karo

3 slices banao — `auth`, `cart`, `wishlist` — sabko store mein combine karo, aur ek component banao jo teeno se data padhe (`useSelector` teen baar) aur ek summary dikhaye.

---

## ❓ Interview Questions

**Q: Kya ek reducer dusre reducer ka state directly change kar sakta hai?**
> Nahi. Har slice apna hi state manage karta hai. Cross-slice logic ke liye thunks, middleware, ya `extraReducers` (dusri slice ke actions sunne ke liye) use karte hain.

**Q: Store mein slices ka naam kaise decide hota hai (`state.cart` wala "cart")?**
> `configureStore({ reducer: { cart: cartReducer } })` mein jo key do, wahi naam banta hai `useSelector((state) => state.cart)` mein — slice ke andar `name: 'cart'` sirf action type prefix ke liye hota hai, store key alag se define hoti hai.

---

> **Next →** `05-async-thunk` 👉
