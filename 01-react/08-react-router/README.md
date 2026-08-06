# 🗺️ React Router — Multiple Pages Banana

---

## 📦 Quick Summary

```
React Router kya?   → React mein multiple pages/routes handle karna
Install?            → npm install react-router-dom
Core components?    → BrowserRouter, Routes, Route, Link, useNavigate
```

---

## ⚙️ Setup

```bash
npm install react-router-dom
```

```jsx
// main.jsx ya App.jsx mein
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      {/* Navbar — har page pe dikhega */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Yahan page render hoga */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> {/* 404 */}
      </Routes>
    </BrowserRouter>
  );
}
```

---

## 🔗 Dynamic Routes — URL Params

```jsx
// Route define karo
<Route path="/user/:id" element={<UserProfile />} />

// Component mein param lo
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { id } = useParams(); // URL se id aayega
  return <h1>User ID: {id}</h1>;
}

// Use karo
<Link to="/user/42">User 42</Link>
```

---

## 🔒 Protected Routes

```jsx
function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("token");
  
  if (!isLoggedIn) {
    return <Navigate to="/login" />; // Login pe redirect
  }
  
  return children; // Logged in hai toh page dikhao
}

// Use karo
<Route path="/dashboard" element={
  <ProtectedRoute>
    <Dashboard />
  </ProtectedRoute>
} />
```

---

## 🔬 Experiment — Khud Try Karo

Banao: 3 pages wali app — Home, Products (list), Product Detail (`/product/:id`)
Products list mein click karne pe detail page pe jao.

---

## ❓ Interview Questions

**Q: `<Link>` aur `<a>` tag mein kya fark hai?**
> `<a>` tag full page reload karta hai. `<Link>` React Router ka hai — page reload nahi hoti, sirf component change hota hai. SPA behavior maintain hota hai.

**Q: `useNavigate` kab use karte hain?**
> Programmatically navigate karna ho — jaise form submit hone ke baad redirect karna: `navigate('/dashboard')`

---

> **Next →** `09-api-calls` 👉
