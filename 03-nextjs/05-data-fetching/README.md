# 📡 Data Fetching in Next.js

---

## 📦 Quick Summary

```
Server Component mein?   → Direct async/await — no useEffect
Client Component mein?   → useEffect ya React Query (React jaisa)
Caching?                 → Next.js automatically cache karta hai
Revalidate?              → Kitne time baad fresh data lana hai
```

---

## 🔄 Server Component — Simplest Way

```jsx
// app/posts/page.js
export default async function PostsPage() {
  // Direct fetch — no useState, no useEffect
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return (
    <div>
      <h1>All Posts ({posts.length})</h1>
      {posts.slice(0, 10).map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
        </div>
      ))}
    </div>
  );
}
```

---

## ⏰ Revalidation — Fresh Data Kab Lana Hai

```jsx
// Har 60 seconds mein fresh data
const res = await fetch('https://api.example.com/posts', {
  next: { revalidate: 60 }
});

// Cache bilkul mat karo — har request pe fresh
const res = await fetch('https://api.example.com/posts', {
  cache: 'no-store'
});

// Hamesha cache — static (build time pe fetch)
const res = await fetch('https://api.example.com/posts', {
  cache: 'force-cache'  // default behaviour
});
```

---

## 📊 Dynamic Route + Data Fetch

```jsx
// app/posts/[id]/page.js
export default async function PostDetail({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post = await res.json();

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
}
```

---

## 💻 Client Component Mein Data Fetch

```jsx
'use client';
import { useState, useEffect } from 'react';

// Jab user action pe data fetch karna ho
export default function SearchResults({ query }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(`/api/search?q=${query}`)
      .then(r => r.json())
      .then(setResults);
  }, [query]);

  return <ul>{results.map(r => <li key={r.id}>{r.title}</li>)}</ul>;
}
```

---

## 🔬 Experiment

Banao: Posts list page (`/posts`) jo server se data fetch kare. Post detail page (`/posts/[id]`) jo single post dikhaye. Loading state bhi add karo (`loading.js` file banao).

---

## ❓ Interview Questions

**Q: Next.js mein useEffect se data fetch kyun avoid karte hain?**
> Server Components mein directly async/await use kar sakte hain — zyada simple, better performance, aur SEO ke liye data pehle se HTML mein hota hai.

**Q: `cache: 'no-store'` kab use karte hain?**
> Jab real-time data chahiye — dashboard, live scores, stock prices. Stale data acceptable nahi hota.

---

> **Next →** `06-api-routes` 👉
