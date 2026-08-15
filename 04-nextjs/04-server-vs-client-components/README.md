# 🖥️ Server vs Client Components — Most Important Concept

---

## 📦 Quick Summary

```
Server Component?   → Server pe render hota hai, browser mein JS nahi jaati
Client Component?   → Browser mein render hota hai, useState/useEffect use kar sakte
Default?            → App Router mein sab Server Components hain by default
'use client'?       → Ye directive likhne se Client Component ban jaata hai
```

---

## 🧠 Server Component — Default

```jsx
// app/page.js — Server Component (koi 'use client' nahi)
// Yeh server pe chalega — user ke browser mein JS nahi jayegi

async function getData() {
  const res = await fetch('https://api.example.com/posts');
  return res.json();
}

export default async function Page() {
  const posts = await getData(); // Direct await — no useEffect needed!

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```

---

## 💻 Client Component — 'use client'

```jsx
'use client';  // ← Yeh line likhni padti hai

import { useState } from 'react';

// Jab bhi useState, useEffect, onClick, onChange use karna ho
export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

---

## 🔑 Rule — Kab Kya Use Karo

```
Server Component use karo jab:
✅ Data fetch karna ho (API, database)
✅ Static content dikhana ho
✅ SEO important ho
✅ Sensitive info (API keys) ho

Client Component use karo jab:
✅ useState, useEffect chahiye
✅ User interaction ho (onClick, onChange)
✅ Browser APIs use karne ho (localStorage, window)
✅ Animations
```

---

## 🏗️ Pattern — Server + Client Mix

```jsx
// app/page.js — Server Component (data fetch karo)
import LikeButton from './LikeButton'; // Client Component import

async function Page() {
  const post = await fetchPost(); // Server pe data fetch

  return (
    <article>
      <h1>{post.title}</h1>       {/* Server render */}
      <p>{post.content}</p>       {/* Server render */}
      <LikeButton />              {/* Client Component — interactive */}
    </article>
  );
}

// LikeButton.jsx — Client Component
'use client';
function LikeButton() {
  const [liked, setLiked] = useState(false);
  return (
    <button onClick={() => setLiked(!liked)}>
      {liked ? '❤️ Liked' : '🤍 Like'}
    </button>
  );
}
```

---

## ❓ Interview Questions

**Q: Server Component ka main fayda kya hai?**
> JS bundle chhoti hoti hai — server Component ka code browser ko nahi jaata. Faster page load aur better SEO.

**Q: Kya Server Component mein useState use kar sakte hain?**
> Nahi — useState, useEffect, onClick sab sirf Client Components mein kaam karte hain. `use client` directive lagana padega.

**Q: Kab Client Component use karte hain?**
> Jab user interaction ho — click, input, form. Ya jab browser APIs chahiye — localStorage, window, navigator.

---

> **Next →** `05-data-fetching` 👉
