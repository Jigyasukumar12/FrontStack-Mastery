# 🛠️ Next.js Setup

---

## 📦 Quick Summary

```
Create project?   → npx create-next-app@latest my-app
Main folder?      → app/ (App Router) ya pages/ (Pages Router)
Run karo?         → npm run dev → localhost:3000
```

---

## ⚙️ Project Banana

```bash
npx create-next-app@latest my-nextjs-app
```

Yeh puchhe ga:
```
Would you like to use TypeScript? → No (abhi ke liye)
Would you like to use ESLint? → Yes
Would you like to use Tailwind CSS? → Yes (already seekha hai!)
Would you like to use src/ directory? → No
Would you like to use App Router? → Yes (recommended)
Would you like to customize import alias? → No
```

---

## 📁 Folder Structure

```
my-nextjs-app/
├── app/                  ← Yahan saare pages hain
│   ├── layout.js         ← Root layout — har page pe wrap hoga
│   ├── page.js           ← Home page (localhost:3000/)
│   └── globals.css       ← Global styles
├── public/               ← Images, fonts (static files)
├── next.config.js        ← Next.js config
└── package.json
```

---

## 🚀 Run Karo

```bash
cd my-nextjs-app
npm run dev
# localhost:3000 pe khulega
```

---

## 🔬 Experiment

Project bana, run karo, `app/page.js` mein apna naam add karo — browser mein dekho.

---

> **Next →** `02-file-based-routing` 👉
