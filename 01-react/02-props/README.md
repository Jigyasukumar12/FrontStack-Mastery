# 📨 Props — Data Pass Karna

---

## 📦 Quick Summary

```
Props kya hain?     → Parent se child ko data bhejne ka tarika
Kaise bhejte hain?  → <Component name="Rahul" age={21} />
Kaise lete hain?    → function Component({ name, age }) { ... }
Kya props change
ho sakti hain?      → NAHI — props read-only hoti hain
```

---

## 🤔 Props Kyun Chahiye?

Bina props ke har component ki apni hardcoded values hogi:

```jsx
// ❌ Yeh baar baar likhna padega
function Card() {
  return <div>Keshav— 19 saal</div>;
}

// ✅ Props se ek hi component, alag alag data
function Card({ name, age }) {
  return <div>{name} — {age} saal</div>;
}

<Card name="Keshav" age={21} />
<Card name="Priya" age={20} />
```

---

## 📤 Props Bhejne Ka Tarika

```jsx
<Button label="Submit" />           // String — quotes mein
<Button count={5} />                // Number — curly braces mein
<Button disabled />                 // Boolean — sirf naam = true
<Card user={{ name: "Rahul" }} />   // Object
<List items={["React", "Next"]} />  // Array
<Button onClick={() => alert()} />  // Function
```

---

## 📥 Props Receive Karna

```jsx
// Recommended — destructuring
function Card({ name, age, city }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>
        {age} saal, {city}
      </p>
    </div>
  );
}
```

---

## 🛡️ Default Props

```jsx
function Button({ label = "Click Me", color = "blue" }) {
  // agar label prop nahi aaya toh "Click Me" use hoga
  return <button style={{ color }}>{label}</button>;
}

<Button />                 // "Click Me" dikhega
<Button label="Submit" />  // "Submit" dikhega
```

---

## 🔬 Experiment — Khud Try Karo

Banao: Ek `StudentCard` component jo yeh props le — `name`, `branch`, `year`, `cgpa`, `isPlaced`

```jsx
function StudentCard({ name, branch, year, cgpa, isPlaced }) {
  return (
    <div>
      {/* Yahan display karo */}
      {/* isPlaced ke liye "Placed ✅" ya "Looking 🔍" dikhao */}
    </div>
  );
}

function App() {
  return (
    <div>
      <StudentCard
        name="Rahul"
        branch="CSE"
        year={3}
        cgpa={8.5}
        isPlaced={false}
      />
      {/* Do aur students add karo */}
    </div>
  );
}
```

**Observe karo:**

- Number props mein `{}` kyun lagate hain?
- `isPlaced` bina value ke likhoge toh kya hoga?

---

## ❓ Interview Questions

**Q: Props aur State mein kya fark hai?**

> Props bahar se aate hain (parent se), State component ka apna data hoti hai. Props read-only hain, State change ho sakti hai.

**Q: Kya child component props change kar sakta hai?**

> Nahi. Agar data change karna ho toh parent mein state rakhte hain aur function prop ke through update karte hain.

---

> **Next →** `03-state-useState` 👉
