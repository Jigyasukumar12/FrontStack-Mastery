# 🎯 Interview Prep — Next.js Ke Saare Important Questions

---

## 📦 Quick Summary

```
Yahan kya hai?   → Next.js ke top interview questions + answers
Kab padhna?      → Interview se 1-2 din pehle revision ke liye
Rule?            → Answers apne words mein bolna — ratta mat maro
```

---

## 🔥 Top Questions

---

**Q1: Next.js kya hai aur React se kya alag hai?**

> Next.js ek React framework hai jo React ke upar built hai. React sirf UI library hai — routing, SSR, SSG sab khud setup karna padta hai. Next.js yeh sab built-in deta hai. File-based routing, Server Components, API routes, Image optimization — yeh sab Next.js ke extras hain.

---

**Q2: SSR, SSG, CSR explain karo**

> CSR (Client-Side Rendering): Browser mein JS se HTML banta hai. React ka default. SEO ke liye bura.
> SSR (Server-Side Rendering): Har request pe server HTML banata hai. SEO acha, real-time data.
> SSG (Static Site Generation): Build time pe HTML banta hai. Sabse fast — CDN se serve hota hai. Blog, docs ke liye.

---

**Q3: Server Component aur Client Component mein kya fark hai?**

> Server Components server pe render hote hain — browser ko JS nahi jaati, faster load. useState/useEffect nahi use kar sakte. Client Components browser mein render hote hain — `'use client'` directive chahiye. Interactive features ke liye Client Components use karte hain.

---

**Q4: `'use client'` directive kab lagate hain?**

> Jab component mein: useState, useEffect, onClick, onChange, browser APIs (localStorage, window) use karne hon. Default server component hota hai — sirf zarurat padne pe `'use client'` lagate hain.

---

**Q5: Next.js mein data fetch karne ke tarike**

> Server Component mein: Direct async/await — `const data = await fetch(url)`. 
> Client Component mein: useEffect ya React Query.
> Caching: `next: { revalidate: 60 }` — 60 seconds mein fresh data.
> No cache: `cache: 'no-store'` — har request pe fresh.

---

**Q6: File-based routing kaise kaam karta hai?**

> `app/` folder mein `page.js` file banao = route ban jaata hai. `app/about/page.js` = `/about`. Dynamic: `app/blog/[slug]/page.js` = `/blog/anything`. Layout: `layout.js` uss folder ke saare pages wrap karta hai.

---

**Q7: API Routes kya hain?**

> Next.js mein `app/api/` folder mein `route.js` banao — backend endpoint ban jaata hai. Express ki zarurat nahi simple backends ke liye. GET, POST, PUT, DELETE sab handle kar sakte ho.

---

**Q8: next/image kyun use karte hain?**

> Automatic: lazy loading, WebP conversion, size optimization, responsive images. CLS (Cumulative Layout Shift) prevent karta hai. Normal `<img>` se much better performance.

---

**Q9: `<Link>` vs `<a>` tag**

> `<Link>` client-side navigation — full page reload nahi, faster. Internal links ke liye. `<a>` full reload karta hai — sirf external links ke liye use karo.

---

**Q10: Next.js mein environment variables**

> `.env.local` file mein rakho. Server mein: `process.env.MY_VAR`. Browser mein bhejna ho toh: `NEXT_PUBLIC_` prefix lagao. Secret keys kabhi `NEXT_PUBLIC_` se mat likho — browser mein expose ho jayenge.

---

## 🎯 Ek Liner Answers (Quick Revision)

```
Hydration?         → Server HTML ke baad browser JS add karta hai — interactive banta hai
Middleware?        → Request aane se pehle code run karna (auth check, redirect)
ISR?               → Incremental Static Regeneration — static page ko background mein update karna
loading.js?        → Suspense boundary — data aane tak loading UI dikhao
error.js?          → Error boundary — kuch gadbad hone par error UI dikhao
not-found.js?      → 404 page
```

---

## 🏗️ Final Project Idea

Banao: Simple blog with Next.js
- `/` — Home page (featured posts)
- `/blog` — All posts (server fetch)
- `/blog/[slug]` — Post detail
- `/api/posts` — API route
- Dark mode toggle (Client Component)
- Image optimization use karo

Yeh project interview mein dikhane layak hai.

---

> 🎉 Next.js complete! Ab ek project bana aur deploy kar Vercel pe. 🚀
