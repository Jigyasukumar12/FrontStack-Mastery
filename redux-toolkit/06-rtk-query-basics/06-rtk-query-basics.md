# 🚀 RTK Query — Data Fetching Bina Thunks Ke

---

## 📦 Quick Summary

```
RTK Query kya hai?    → Built-in data fetching + caching solution (RTK ke andar hi)
createAsyncThunk vs?  → RTK Query mein loading/error/caching sab automatic milta hai
Kya likhna padta?     → Bas ek "API slice" — endpoints define karo
Hooks kaha se aate?   → createApi khud hi useXQuery hooks generate kar deta hai
```

---

## 🤔 Kyun Use Karein? (vs Manual Thunks)

```
Manual createAsyncThunk se:          RTK Query se:
❌ Khud loading state likhna          ✅ isLoading, isError automatic
❌ Khud caching likhna                ✅ Automatic caching + refetch
❌ Khud refetch on focus              ✅ Built-in (configurable)
❌ Har API ke liye 15-20 lines        ✅ 3-4 lines per endpoint
```

---

## 🏗️ API Slice Banana

```js
// features/api/apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => '/posts',              // GET /posts
    }),
    getPostById: builder.query({
      query: (id) => `/posts/${id}`,       // GET /posts/:id
    }),
  }),
});

// Hooks automatically generate hote hain naam pattern se:
// getPosts    → useGetPostsQuery
// getPostById → useGetPostByIdQuery
export const { useGetPostsQuery, useGetPostByIdQuery } = apiSlice;
```

---

## ⚙️ Store Mein Register Karna

```js
// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apiSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,   // "api": apiReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),   // caching/refetch ke liye zaroori
});
```

---

## 🎯 Component Mein Use — Sirf Ek Hook!

```jsx
import { useGetPostsQuery } from '../features/api/apiSlice';

function Posts() {
  const { data: posts, isLoading, isError, error } = useGetPostsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {posts.map((post) => <li key={post.id}>{post.title}</li>)}
    </ul>
  );
}
```

Compare karo — yehi kaam manual thunk se karne mein ~25 lines lagti (pending/fulfilled/rejected + useEffect + useSelector).

---

## 🔬 Experiment — Khud Try Karo

`getPostById` endpoint use karke ek `PostDetail` component banao jo URL param se `id` le aur `useGetPostByIdQuery(id)` se data dikhaye — loading/error state ke saath.

---

## ❓ Interview Questions

**Q: RTK Query aur `createAsyncThunk` mein primary difference kya hai?**
> `createAsyncThunk` sirf async action lifecycle handle karta hai — loading/caching logic khud likhna padta hai. RTK Query ek complete data-fetching solution hai jisme caching, automatic refetching, aur loading/error states sab built-in milte hain, bina extra code ke.

**Q: `reducerPath` kya hota hai?**
> Store mein us key ka naam jaha RTK Query apna internal cache state store karta hai (jaise normal slice ka naam hota hai) — convention se usually `'api'` rakhte hain.

---

> **Next →** `07-rtk-query-mutations-caching` 👉
