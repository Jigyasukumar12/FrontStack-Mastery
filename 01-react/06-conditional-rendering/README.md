# 🔀 Conditional Rendering — Kab Kya Dikhana

---

## 📦 Quick Summary

```
Kya hai?        → Condition ke basis pe alag UI dikhana
Kaise karte?    → if/else, ternary (?:), logical AND (&&)
Kab use karo?   → Login/Logout, Loading state, Error message
```

---

## 🧠 Teen Tarike

### 1. Ternary Operator `? :` — Do options ke liye

```jsx
function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back! 👋</h1> : <h1>Please login</h1>}
    </div>
  );
}
```

### 2. Logical AND `&&` — Ek hi option ke liye

```jsx
function Notification({ hasMessage }) {
  return (
    <div>
      {hasMessage && <p>Tumhara ek naya message hai! 📩</p>}
      {/* hasMessage false ho toh kuch nahi dikhega */}
    </div>
  );
}
```

### 3. if/else — Complex logic ke liye

```jsx
function StatusBadge({ status }) {
  if (status === "loading") return <p>Loading... ⏳</p>;
  if (status === "error")   return <p>Kuch gadbad hui ❌</p>;
  if (status === "empty")   return <p>Koi data nahi 📭</p>;
  
  return <p>Data aa gaya ✅</p>;
}
```

---

## 💡 Real Example — Loading State

```jsx
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Data fetch karna (useEffect mein — next topic)

  if (loading) return <div>Loading...</div>;
  if (error)   return <div>Error: {error}</div>;
  if (!user)   return <div>User nahi mila</div>;

  return <div>{user.name}</div>;
}
```

---

## ⚠️ Common Mistake

```jsx
// ❌ Galat — 0 screen par print ho jayega!
{items.length && <List items={items} />}

// ✅ Sahi — boolean condition use karo
{items.length > 0 && <List items={items} />}
```

---

## 🔬 Experiment — Khud Try Karo

Banao: Toggle button — click kare toh "Hello!" dikhaye, dobara click kare toh chhup jaye.
Phir ek aur — 3 buttons: "Loading", "Error", "Success" — click karne pe alag alag state dikhaye.

---

## ❓ Interview Questions

**Q: `&&` operator se rendering mein `0` kyun print hota hai?**
> `0 && <Component>` mein JS `0` ko falsy maanta hai par render karta hai kyunki yeh number hai. Boolean use karo: `count > 0 && <Component>`

**Q: null aur undefined render hote hain React mein?**
> Nahi — `null`, `undefined`, `false` React mein kuch render nahi karte.

---

> **Next →** `07-lists-keys` 👉
