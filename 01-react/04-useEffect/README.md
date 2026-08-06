# ⚡ useEffect — Side Effects Handle Karna

---

## 📦 Quick Summary

```
useEffect kya hai?   → Component render hone ke baad kuch karna
Side effect kya?     → API call, timer, DOM change, event listener
Syntax?              → useEffect(() => { ... }, [dependencies])
Dependency array?    → Kab effect run karna hai yeh batata hai
```

---

## 🧠 useEffect Kab Run Hota Hai

```jsx
// 1. Har render ke baad (dependency array nahi)
useEffect(() => {
  console.log("Har baar render hone pe chalega");
});

// 2. Sirf ek baar — mount hone pe (empty array)
useEffect(() => {
  console.log("Sirf ek baar — component load hone pe");
}, []);

// 3. Jab specific value change ho
useEffect(() => {
  console.log("count change hua:", count);
}, [count]);
```

---

## 💡 Real Example — API Call

```jsx
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Component load hone pe API call karo
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      });
  }, [userId]); // userId change ho toh dobara fetch karo

  if (loading) return <p>Loading...</p>;
  return <h2>{user?.name}</h2>;
}
```

---

## 🧹 Cleanup Function

```jsx
useEffect(() => {
  // Timer set kiya
  const timer = setInterval(() => {
    console.log("tick");
  }, 1000);

  // Cleanup — component hatne se pehle timer clear karo
  return () => clearInterval(timer);
}, []);
```

---

## ⚠️ Common Mistakes

```jsx
// ❌ Galat — infinite loop!
useEffect(() => {
  setCount(count + 1); // state change → re-render → effect → state change...
});

// ✅ Sahi — dependency array do
useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]);
```

---

## 🔬 Experiment — Khud Try Karo

Banao: Ek component jo `https://jsonplaceholder.typicode.com/posts` se posts fetch kare aur dikhaye. Loading state aur total count bhi dikhao.

```jsx
function PostsList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Yahan fetch logic likho
  }, []);

  if (loading) return <p>Loading posts...</p>;

  return (
    <div>
      <h2>Total Posts: {posts.length}</h2>
      {posts.slice(0, 5).map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
        </div>
      ))}
    </div>
  );
}
```

---

## ❓ Interview Questions

**Q: useEffect aur component lifecycle mein kya relation hai?**
> `useEffect(() => {}, [])` = componentDidMount, `useEffect(() => {}, [val])` = componentDidUpdate, cleanup function = componentWillUnmount

**Q: Dependency array mein kya dalna chahiye?**
> Wo saari values jo effect ke andar use ho rahi hain — state, props, variables.

---

> **Next →** `08-react-router` 👉
