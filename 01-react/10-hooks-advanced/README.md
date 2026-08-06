# 🪝 Custom Hooks & Context API

---

## 📦 Quick Summary

```
Custom Hook kya?    → Apna hook banana — reusable logic
Context API kya?    → Global state — props drilling se bachao
useContext?         → Context ki value kisi bhi component mein lo
```

---

## 🧠 Custom Hook — Logic Reuse Karna

```jsx
// Baar baar yeh likhna padta tha
function ComponentA() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => { fetch(url).then(...) }, []);
}

// ✅ Custom hook banao — ek baar likho, baar baar use karo
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => { setData(data); setLoading(false); })
      .catch(err => { setError(err); setLoading(false); });
  }, [url]);

  return { data, loading, error };
}

// Ab kisi bhi component mein use karo
function Posts() {
  const { data, loading } = useFetch("https://jsonplaceholder.typicode.com/posts");
  if (loading) return <p>Loading...</p>;
  return <div>{data?.length} posts</div>;
}
```

---

## 🌍 Context API — Global State

```jsx
// Step 1: Context banao
const AuthContext = React.createContext();

// Step 2: Provider se wrap karo
function App() {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Header />
      <MainContent />
    </AuthContext.Provider>
  );
}

// Step 3: Kisi bhi child mein use karo — props drilling nahi!
function Header() {
  const { user } = useContext(AuthContext);
  return <nav>{user ? `Hello, ${user.name}` : "Login"}</nav>;
}
```

---

## 🔬 Experiment

Banao: Theme toggle — ek Context banao jisme `isDark` state ho. Button click karne pe dark/light switch ho. Header, Main, Footer — teeno mein background color change ho.

---

## ❓ Interview Questions

**Q: Custom hook ka naam `use` se kyun shuru hota hai?**
> React ka rule hai — hooks `use` se shuru hon taaki React unhe identify kar sake aur rules enforce kar sake.

**Q: Context API vs Redux — kab kya use karein?**
> Small-medium app mein Context kaafi hai. Bahut complex state logic aur performance optimization ke liye Redux ya Zustand.

---

> **Next →** `09-api-calls` 👉
