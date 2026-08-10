# 🗂️ File-Based Routing — Folders = Routes

---

## 📦 Quick Summary

```
Next.js mein?      → Folder banao = Route ban jaata hai
React Router?      → Next.js mein zarurat nahi
app/page.js        → localhost:3000/
app/about/page.js  → localhost:3000/about
```

---

## 🧠 Routing System

```
app/
├── page.js              → /          (Home)
├── about/
│   └── page.js          → /about
├── blog/
│   ├── page.js          → /blog      (Blog list)
│   └── [slug]/
│       └── page.js      → /blog/my-post  (Dynamic)
├── dashboard/
│   ├── layout.js        → Dashboard ka shared layout
│   ├── page.js          → /dashboard
│   └── settings/
│       └── page.js      → /dashboard/settings
└── (auth)/              → () = group, URL mein nahi aata
    ├── login/
    │   └── page.js      → /login
    └── register/
        └── page.js      → /register
```

---

## 📄 Page File Banana

```jsx
// app/about/page.js — About page
export default function AboutPage() {
  return (
    <main>
      <h1>About Us</h1>
      <p>Yahan about content...</p>
    </main>
  );
}
```

---

## 🔗 Dynamic Routes — [slug]

```jsx
// app/blog/[slug]/page.js
export default function BlogPost({ params }) {
  // params.slug se URL ka value milega
  return <h1>Post: {params.slug}</h1>;
}

// localhost:3000/blog/my-first-post
// params.slug = "my-first-post"
```

---

## 🗂️ Layout — Shared Wrapper

```jsx
// app/layout.js — Har page pe yeh wrap hoga
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>Navbar yahan</nav>
        {children}  {/* Yahan page render hoga */}
        <footer>Footer yahan</footer>
      </body>
    </html>
  );
}
```

---

## 🔬 Experiment

Banao: 4 pages — Home, About, Blog (list), Blog/[slug] (detail). Layout mein navbar add karo jo sab pages pe dikhe.

---

## ❓ Interview Questions

**Q: Next.js mein React Router kyun nahi chahiye?**
> File system hi routing karta hai. `app/about/page.js` banane se `/about` route automatically ban jaata hai.

**Q: Dynamic routes `[slug]` kyun use karte hain?**
> Jab route ka ek part variable ho — blog posts, user profiles, product pages. `[id]`, `[slug]`, `[username]` — koi bhi naam de sakte ho.

---

> **Next →** `03-pages-vs-app-router` 👉
