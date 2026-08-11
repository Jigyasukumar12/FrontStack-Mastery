# ⏳ createAsyncThunk — API Calls Redux Ke Saath

---

## 📦 Quick Summary

```
Thunk kya hai?           → Ek function jo action dispatch karne se pehle async kaam kare
createAsyncThunk deta?   → Automatically 3 actions: pending, fulfilled, rejected
Loading state kaha?      → extraReducers mein in 3 states ko handle karte hain
Kab use karna chahiye?   → API se data fetch/post/update/delete karna ho
```

---

## 🧠 createAsyncThunk Ki Anatomy

```js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',              // action type prefix
  async (_, thunkAPI) => {
    const response = await axios.get('https://api.example.com/users');
    return response.data;          // ✅ yeh "fulfilled" ka payload banega
  }
);
```

Yeh automatically 3 action types generate karta hai:

```
users/fetchUsers/pending     → API call start hua
users/fetchUsers/fulfilled   → API call success (data mila)
users/fetchUsers/rejected    → API call fail (error aaya)
```

---

## 🏗️ Slice Ke Saath Connect Karna — `extraReducers`

```js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const res = await axios.get('/api/users');
  return res.data;
});

const userSlice = createSlice({
  name: 'users',
  initialState: {
    list: [],
    status: 'idle',     // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {
    // yahan normal synchronous reducers
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
```

---

## 🎯 Component Mein Use Karna

```jsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './userSlice';

function UserList() {
  const dispatch = useDispatch();
  const { list, status, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <ul>
      {list.map((u) => <li key={u.id}>{u.name}</li>)}
    </ul>
  );
}
```

---

## 📤 Arguments Bhejna Thunk Mein

```js
export const fetchUserById = createAsyncThunk(
  'users/fetchUserById',
  async (userId, thunkAPI) => {
    try {
      const res = await axios.get(`/api/users/${userId}`);
      return res.data;
    } catch (err) {
      // rejectWithValue se custom error payload bhej sakte ho
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

// Dispatch karte waqt
dispatch(fetchUserById(5));
```

---

## 🔬 Experiment — Khud Try Karo

Ek `postsSlice` banao jo `https://jsonplaceholder.typicode.com/posts` se data fetch kare, `status` aur `error` handle kare, aur component mein loading/error/success teeno states dikhaye.

---

## ❓ Interview Questions

**Q: `createAsyncThunk` ke 3 lifecycle actions kya hain?**
> `pending`, `fulfilled`, `rejected` — API call start, success, aur failure ko represent karte hain. Inhe `extraReducers` mein `addCase` se handle karte hain.

**Q: `extraReducers` normal `reducers` se alag kyun hai?**
> `reducers` sirf usi slice ke actions handle karta hai (auto-generated action creators ke saath). `extraReducers` un actions ko sunta hai jo bahar se aaye hain — jaise `createAsyncThunk` ke actions ya kisi dusri slice ke actions.

**Q: `rejectWithValue` kyun use karte hain?**
> Default mein `action.error` sirf generic JS Error message deta hai. `rejectWithValue` se hum server ka actual error response (jaise validation messages) `action.payload` mein bhej sakte hain, jo zyada useful hota hai UI mein dikhane ke liye.

---

> **Next →** `06-rtk-query-basics` 👉
