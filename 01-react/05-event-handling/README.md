# 🖱️ Events — User Interactions Handle Karna

---

## 📦 Quick Summary

```
Events kya hain?    → User ke actions — click, type, submit etc.
HTML se fark?       → onClick (camelCase), function pass karte hain
Common events?      → onClick, onChange, onSubmit, onKeyDown
```

---

## 🧠 React Events vs HTML Events

```jsx
// HTML mein (string pass karte hain)
<button onclick="handleClick()">Click</button>

// React mein (function reference pass karte hain)
<button onClick={handleClick}>Click</button>
```

---

## 🖱️ Common Events

```jsx
function EventExamples() {
  const handleClick = () => console.log("Clicked!");

  // e = event object — bahut kaam ki cheez hai
  const handleChange = (e) => console.log(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault(); // Page reload rokta hai — zaruri hai!
    console.log("Form submitted");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") console.log("Enter dabaya!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} onKeyDown={handleKeyDown} />
      <button onClick={handleClick} type="button">Click</button>
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

## 📧 Event Object (e) — Kya Kya Milta Hai

```jsx
const handleChange = (e) => {
  e.target.value    // Input ki current value
  e.target.name     // Input ka name attribute
  e.target.checked  // Checkbox true/false
};
```

---

## 🔬 Experiment — Khud Try Karo

Banao: Ek login form — email + password input, submit pe values console mein dikhao

```jsx
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Yahan console mein print karo
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
}
```

**Observe karo:** `e.preventDefault()` hata do — kya hota hai?

---

## ❓ Interview Questions

**Q: `onClick={handleClick}` vs `onClick={() => handleClick()}` — kya fark?**
> Dono kaam karte hain. Argument pass karna ho toh arrow function use karo: `onClick={() => handleClick(id)}`

**Q: `e.preventDefault()` kyun use karte hain?**
> Form submit pe browser page reload karta hai by default. Yeh rokne ke liye.

---

> **Next →** `06-conditional-rendering` 👉
