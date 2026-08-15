# 🖼️ Image & Link — Next.js Special Components

---

## 📦 Quick Summary

```
next/image?   → Automatic optimization — lazy load, WebP, size
next/link?    → Client-side navigation — no full reload
<a> tag?      → External links ke liye, internal ke liye Link use karo
```

---

## 🔗 Link Component

```jsx
import Link from 'next/link';

// Internal navigation — next/link use karo
export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/blog">Blog</Link>
      
      {/* Dynamic route */}
      <Link href={`/blog/${post.slug}`}>Read Post</Link>
      
      {/* Active state ke liye usePathname() */}
    </nav>
  );
}

// External link — normal <a> tag
<a href="https://github.com" target="_blank" rel="noopener noreferrer">
  GitHub
</a>
```

---

## 🖼️ Image Component

```jsx
import Image from 'next/image';

export default function Profile() {
  return (
    <div>
      {/* Local image */}
      <Image
        src="/profile.jpg"      // public/ folder se
        alt="Profile photo"
        width={300}
        height={300}
      />

      {/* Remote image — next.config.js mein domain allow karna padega */}
      <Image
        src="https://example.com/photo.jpg"
        alt="Remote photo"
        width={400}
        height={300}
      />

      {/* Fill — parent ka full size le lo */}
      <div style={{ position: 'relative', height: '400px' }}>
        <Image
          src="/banner.jpg"
          alt="Banner"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
```

---

## ⚙️ Remote Images Config

```js
// next.config.js — external domains allow karo
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};
```

---

## ❓ Interview Questions

**Q: `<img>` aur Next.js `<Image>` mein kya fark hai?**
> Next.js Image: automatic lazy loading, WebP format conversion, size optimization, Cumulative Layout Shift prevent karta hai. Normal img: koi optimization nahi.

**Q: `<a>` aur `<Link>` mein kya fark hai Next.js mein?**
> `<Link>` client-side navigation karta hai — full page reload nahi hoti, faster transition. `<a>` full page reload karta hai. Internal links ke liye hamesha `<Link>` use karo.

---

> **Next →** `08-interview-prep` 👉
