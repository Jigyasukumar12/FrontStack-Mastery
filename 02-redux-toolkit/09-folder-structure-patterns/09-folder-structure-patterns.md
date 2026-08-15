# 📁 Folder Structure & Best Practices — RTK Recipes

---

## 📦 Quick Summary

```
Yahan kya hai?    → Real-world project structure + do's/don'ts
Pattern naam?     → "Feature Folder" pattern (Redux team recommended)
Goal?             → Naya feature add karna easy aur predictable ho
```

---

## 🏗️ Feature Folder Structure (Recommended)

```
src/
  app/
    store.js                  ← store config
    hooks.js                  ← typed useAppSelector/useAppDispatch (TS ke liye)
  features/
    auth/
      authSlice.js
      Login.jsx
      Login.test.js
    cart/
      cartSlice.js
      Cart.jsx
    posts/
      postsSlice.js
      PostList.jsx
      PostDetail.jsx
  services/
    apiSlice.js                ← RTK Query base API
  App.jsx
  main.jsx
```

> ❌ Purana pattern: `actions/`, `reducers/`, `types/` alag folders — files edit karne ke liye 3 jagah jaana padta tha.
> ✅ Naya pattern: sab ek feature ka code ek hi folder mein — maintain karna easy.

---

## 🔘 Full Slice Example — Production Pattern

```js
// features/posts/postsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const res = await axios.get('/api/posts');
  return res.data;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: { list: [], status: 'idle', error: null },
  reducers: {
    postAdded: (state, action) => {
      state.list.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => { state.status = 'loading'; })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Selectors bhi yahi define karo (co-located)
export const selectAllPosts = (state) => state.posts.list;
export const selectPostsStatus = (state) => state.posts.status;

export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;
```

```jsx
// Component mein selector reuse
import { useSelector } from 'react-redux';
import { selectAllPosts } from './postsSlice';

const posts = useSelector(selectAllPosts);   // ✅ inline selector se better — reusable + testable
```

---

## ✅ Do's & ❌ Don'ts

```
✅ Selectors slice file mein hi define karo (co-location)
✅ RTK Query ko normal API calls ke liye prefer karo (thunks sirf complex logic ke liye)
✅ Har slice ka initialState clearly typed/documented rakho
✅ Naming consistent rakho: fetchX, addX, updateX, deleteX

❌ Store mein non-serializable data mat rakho (functions, class instances, Dates as-is)
❌ Ek hi data ko 2 jagah store mat karo (derive karo useSelector ya selector function se)
❌ Component ke andar business logic mat likho — reducer/thunk mein rakho
❌ Bahut zyada nested state mat banao — flat structure better hota hai
```

---

## 🔬 Final Experiment

Ek mini "Task Manager" app banao:
- `tasksSlice` — CRUD (add, toggle, delete) — local reducers se
- `apiSlice` — RTK Query se ek fake API (jsonplaceholder) se todos fetch karo
- Feature-folder structure follow karo
- DevTools khol ke dispatch hote actions dekho

---

## ❓ Interview Question

**Q: Redux ka use kab NAHI karna chahiye?**
> Jab state sirf ek ya do components tak limited ho (local UI state jaise modal open/close, form input) — wahan `useState`/`useContext` kaafi hai. Redux tab use karo jab state truly global ho aur bahut components/pages ke beech share ho raha ho.

---

> 🎉 Redux Toolkit complete! Ab apne project mein implement karo 🚀
