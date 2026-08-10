# 🛣️ API Routes — Next.js Mein Backend

---

## 📦 Quick Summary

```
API Route kya?     → Next.js mein backend endpoint banana
Kahan banate?      → app/api/route-name/route.js
Kab use karo?      → Form submit, database call, external API proxy
Express ki zarurat? → Simple backend ke liye nahi
```

---

## 🏗️ API Route Banana

```jsx
// app/api/hello/route.js
export async function GET(request) {
  return Response.json({ message: "Hello from Next.js API!" });
}

export async function POST(request) {
  const body = await request.json();
  return Response.json({ received: body, success: true });
}

// Access karo: fetch('/api/hello')
```

---

## 💡 Real Example — Contact Form

```jsx
// app/api/contact/route.js
export async function POST(request) {
  const { name, email, message } = await request.json();

  // Validation
  if (!name || !email) {
    return Response.json(
      { error: "Name aur email required hai" },
      { status: 400 }
    );
  }

  // Yahan email bhej sakte ho ya DB mein save kar sakte ho
  console.log("New contact:", { name, email, message });

  return Response.json({ success: true, message: "Message mil gaya!" });
}

// Frontend se call karo
const res = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, message })
});
```

---

## 🔒 Dynamic API Route

```jsx
// app/api/users/[id]/route.js
export async function GET(request, { params }) {
  const { id } = params;
  
  // Database se user fetch karo
  // const user = await db.users.findById(id);
  
  return Response.json({ id, name: "Test User" });
}

// Access: fetch('/api/users/42')
```

---

## 🔬 Experiment

Banao: Simple todo API
- GET /api/todos → sab todos return karo (array)
- POST /api/todos → naya todo add karo
- DELETE /api/todos/[id] → specific todo hatao

(In-memory array use karo — DB nahi chahiye abhi)

---

## ❓ Interview Questions

**Q: Next.js API routes aur Express mein kya fark hai?**
> API Routes Next.js mein built-in hain — alag Express server nahi chahiye. Simple backends ke liye perfect. Complex backends ke liye dedicated Node/Express better hai.

**Q: API Route mein database connect kar sakte hain?**
> Haan — Mongoose, Prisma, ya koi bhi DB client use kar sakte ho. Connection pool manage karna padta hai.

---

> **Next →** `07-image-and-link` 👉
