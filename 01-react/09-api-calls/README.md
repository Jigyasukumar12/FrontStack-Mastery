# 🌐 API Calls — Backend Se Data Lana

---

## 📦 Quick Summary

```
Fetch API?      → Browser built-in — koi install nahi
Axios?          → Popular library — better error handling
React Query?    → Best for production — caching + loading states
Kab karo?       → useEffect ke andar (mostly)
```

---

## 🌐 Fetch API — Basic

```jsx
useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => {
      if (!res.ok) throw new Error("API error");
      return res.json();
    })
    .then(data => setUsers(data))
    .catch(err => setError(err.message));
}, []);
```

---

## 📦 Axios — Recommended

```bash
npm install axios
```

```jsx
import axios from 'axios';

// GET
useEffect(() => {
  axios.get("/api/users")
    .then(res => setUsers(res.data))
    .catch(err => setError(err.message));
}, []);

// POST — data bhejne ke liye
const createUser = async (userData) => {
  try {
    const res = await axios.post("/api/users", userData);
    console.log("Created:", res.data);
  } catch (err) {
    console.error(err);
  }
};
```

---

## 🏆 Async/Await Style (Cleaner)

```jsx
useEffect(() => {
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/posts");
      setPosts(res.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []);
```

---

## 🔬 Experiment — Khud Try Karo

Banao: Search feature — `https://jsonplaceholder.typicode.com/users` se users fetch karo. Input mein naam type karne pe filter ho. 

Bonus: Axios instance banao with `baseURL` set karke.

---

## ❓ Interview Questions

**Q: useEffect mein directly async function kyun nahi likh sakte?**
> `useEffect` synchronous function expect karta hai. Async function Promise return karta hai jo useEffect handle nahi karta. Solution: andar ek async function banao aur call karo.

**Q: API calls ke liye best practice kya hai React mein?**
> Loading, error, aur success states handle karo. Axios interceptors se auth token automatically add karo. React Query use karo production mein — caching aur refetching handle karta hai.

---

> 🎉 React complete! Ab `02-tailwind` folder mein jao 👉
