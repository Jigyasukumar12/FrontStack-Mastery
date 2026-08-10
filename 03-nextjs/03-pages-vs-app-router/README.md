# 📖 Pages Router vs App Router

---

## 📦 Quick Summary

```
Pages Router?   → Purana tarika (Next.js 12 aur pehle)
App Router?     → Naya tarika (Next.js 13+) — recommended
Dono kyun?      → Purane projects Pages Router pe hain — dono jaanna zaroori
```

---

## 🔄 Dono Ka Comparison

```
Pages Router (Purana):        App Router (Naya):
pages/                        app/
├── index.js    → /           ├── page.js        → /
├── about.js    → /about      ├── about/
└── blog/                     │   └── page.js    → /about
    └── [id].js → /blog/1     └── blog/
                                   └── [id]/
                                       └── page.js
```

---

## 🧠 Key Differences

```jsx
// Pages Router — getServerSideProps
export async function getServerSideProps() {
  const data = await fetch("...");
  return { props: { data } };
}

export default function Page({ data }) {
  return <div>{data}</div>;
}

// App Router — async component (modern, cleaner)
export default async function Page() {
  const data = await fetch("...");
  return <div>{data}</div>;
}
```

---

## 💡 App Router Ke Fayde

```
✅ Server Components by default — faster
✅ Async/await directly in components
✅ Better code organization
✅ Nested layouts
✅ Future of Next.js
```

---

## ❓ Interview Question

**Q: App Router aur Pages Router mein main difference kya hai?**
> App Router mein components by default Server Components hain — server pe render hote hain. Pages Router mein getServerSideProps separately likhna padta tha. App Router mein directly async component bana sakte hain.

---

> **Next →** `04-server-vs-client-components` 👉
