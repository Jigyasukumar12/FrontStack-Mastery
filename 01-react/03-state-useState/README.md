# 🔄 State & useState

---

## 📦 Quick Summary

```
State kya hai?       → Component ka apna data jo change ho sakta hai
useState kya hai?    → React hook jo state banata hai
Syntax?              → const [value, setValue] = useState(initialValue)
State change hone    
par kya hota hai?    → Component re-render hota hai, UI update hoti hai
```

---

## 🤔 State Kyun Chahiye?

```jsx
// ❌ Normal variable — UI update nahi hogi
function Counter() {
  let count = 0;
  return (
    <button onClick={() => { count++; console.log(count); }}>
      {count}  {/* Yeh kabhi nahi badhega screen par */}
    </button>
  );
}

// ✅ State — React ko pata chalega, UI update hogi
function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      {count}  {/* Har click pe badhega */}
    </button>
  );
}
```

---

## 🧠 useState Kaise Kaam Karta Hai

```jsx
// useState ek array return karta hai — 2 cheezein
const [count, setCount] = useState(0);
//     ↑         ↑                  ↑
//  current   function to        initial
//   value     update it          value

// State update karna
setCount(5);          // seedha value set karo
setCount(count + 1);  // purani value use karke update karo
setCount(prev => prev + 1);  // recommended — function form
```

---

## 📝 Alag Alag Types Ki State

```jsx
function Examples() {
  const [name, setName] = useState("");           // String
  const [age, setAge] = useState(0);              // Number
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Boolean
  const [items, setItems] = useState([]);          // Array
  const [user, setUser] = useState({ name: "", email: "" }); // Object

  return <div>{name}</div>;
}
```

---

## ⚠️ Object/Array State — Sahi Tarika

```jsx
// Object state update — spread operator use karo
const [user, setUser] = useState({ name: "Rahul", age: 21 });

// ❌ Galat — directly mutate mat karo
user.name = "Priya";
setUser(user);

// ✅ Sahi — naya object banao
setUser({ ...user, name: "Priya" });

// Array mein item add karna
const [items, setItems] = useState(["React"]);

// ✅ Sahi — spread use karo
setItems([...items, "Tailwind"]);

// ✅ Array se item hatana
setItems(items.filter(item => item !== "React"));
```

---

## 🔬 Experiment — Khud Try Karo

**Banao:** Ek simple Todo app:
- Input field jisme todo type karo
- "Add" button — todo list mein add ho
- Har todo ke saath "Delete" button
- Total todos ka count dikhao

```jsx
function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    // Yahan logic likho
    // input empty ho toh add mat karo
  };

  const deleteTodo = (index) => {
    // Yahan logic likho
  };

  return (
    <div>
      <h2>Todos: {/* count dikhao */}</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Kuch likho..."
      />
      <button onClick={addTodo}>Add</button>

      {/* todos list dikhao */}
    </div>
  );
}
```

**Observe karo:**
- `setInput(e.target.value)` — `e.target.value` kya hai? Console mein dekho.
- State directly mutate karo (`todos.push(...)`) aur dekho kya hota hai.

---

## ❓ Interview Questions

**Q: useState ka initial value kabhi dobara use hota hai?**
> Nahi — sirf pehli render pe use hota hai. Baad mein setState se hi value change hoti hai.

**Q: State update synchronous hai ya asynchronous?**
> Asynchronous hai. `setState` ke turant baad state ki nayi value nahi milti. Isliye function form use karte hain: `setCount(prev => prev + 1)`

**Q: Kya ek component mein multiple states ho sakti hain?**
> Haan — jitne chahiye utne `useState` call kar sakte ho.

---

> **Next →** `04-events` 👉
