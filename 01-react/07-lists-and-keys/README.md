# 📋 Lists & Keys — Array Ko Render Karna

---

## 📦 Quick Summary

```
Lists kaise render?  → Array.map() use karo
Key kya hai?         → Har list item ka unique identifier
Key kyun chahiye?    → React ko samajhna ho ki kaunsa item change hua
Kya use karein key?  → Unique ID — index mat use karo (mostly)
```

---

## 🧠 Array.map() Se List Render Karna

```jsx
function FruitList() {
  const fruits = ["Apple", "Mango", "Banana", "Orange"];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
        // ↑ key har item pe lagani hai
      ))}
    </ul>
  );
}
```

---

## 🔑 Key Kya Hai Aur Kyun Zaroori Hai

```jsx
// ❌ Key nahi — React warning dega
{users.map(user => <div>{user.name}</div>)}

// ✅ Unique ID as key (best practice)
{users.map(user => (
  <div key={user.id}>{user.name}</div>
))}

// ⚠️ Index as key — avoid karo agar list change hoti hai
{users.map((user, index) => (
  <div key={index}>{user.name}</div>
))}
```

---

## 💡 Real Example — Cards List

```jsx
function StudentList() {
  const students = [
    { id: 1, name: "Rahul", cgpa: 8.5 },
    { id: 2, name: "Priya", cgpa: 9.1 },
    { id: 3, name: "Amit", cgpa: 7.8 },
  ];

  return (
    <div>
      {students.map(student => (
        <div key={student.id}>
          <h3>{student.name}</h3>
          <p>CGPA: {student.cgpa}</p>
        </div>
      ))}
    </div>
  );
}
```

---

## 🔬 Experiment — Khud Try Karo

Banao: Ek shopping cart jisme items ki list ho. Har item ke saath "Remove" button ho jo us item ko list se hata de.

```jsx
function ShoppingCart() {
  const [items, setItems] = useState([
    { id: 1, name: "React Course", price: 499 },
    { id: 2, name: "Tailwind Book", price: 299 },
    { id: 3, name: "Next.js Guide", price: 399 },
  ]);

  const removeItem = (id) => {
    // Yahan logic likho — filter use karo
  };

  return (
    <div>
      {items.map(item => (
        <div key={item.id}>
          <span>{item.name} — ₹{item.price}</span>
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}
      <p>Total: ₹{/* total calculate karo */}</p>
    </div>
  );
}
```

---

## ❓ Interview Questions

**Q: Key prop kyun use karte hain React mein?**
> React ko efficiently update karna hota hai DOM. Key se woh identify karta hai kaunsa item add/remove/change hua. Bina key ke poori list re-render hoti hai.

**Q: Index as key kyun avoid karte hain?**
> Agar list reorder ho ya item beech mein delete ho toh index-based keys galat elements ko update kar sakte hain.

---

> **Next →** `04-useEffect` 👉
