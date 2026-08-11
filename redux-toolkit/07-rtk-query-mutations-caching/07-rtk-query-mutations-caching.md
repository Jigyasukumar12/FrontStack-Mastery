# 🔄 RTK Query — Mutations & Cache Invalidation

---

## 📦 Quick Summary

```
Mutation kya hai?      → POST/PUT/DELETE jaisi requests (data change karna)
Hook pattern?          → useXMutation → [triggerFn, { isLoading, data }]
Cache auto-update?     → tags (providesTags / invalidatesTags) se
Kyun zaroori?          → Bina isse, data update karne ke baad list purani hi dikhegi
```

---

## 🏗️ Mutation Endpoint Banana

```js
// features/api/apiSlice.js
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  tagTypes: ['Post'],                        // ⚡ cache tag define karo
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => '/posts',
      providesTags: ['Post'],                // yeh data "Post" tag provide karta hai
    }),
    addPost: builder.mutation({
      query: (newPost) => ({
        url: '/posts',
        method: 'POST',
        body: newPost,
      }),
      invalidatesTags: ['Post'],              // ⚡ isse getPosts auto-refetch hoga
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Post'],
    }),
  }),
});

export const { useGetPostsQuery, useAddPostMutation, useDeletePostMutation } = apiSlice;
```

---

## 🧠 Tags Kaam Kaise Karte Hain?

```
1. getPosts() call hota hai   → cache mein "Post" tag ke saath store hota hai
2. addPost() call hoti hai    → "Post" tag ko invalidate kar deta hai
3. RTK Query dekhta hai       → "Post" tag wale saare queries stale hain
4. getPosts() auto-refetch    → UI khud-b-khud latest data dikhata hai
```

> Manually `refetch()` call karne ki zaroorat nahi — tags system automatic hai.

---

## 🎯 Component Mein Mutation Use Karna

```jsx
import { useAddPostMutation, useGetPostsQuery } from '../features/api/apiSlice';

function PostForm() {
  const [title, setTitle] = useState('');
  const [addPost, { isLoading }] = useAddPostMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addPost({ title, body: '...' }).unwrap();  // unwrap() → real promise, error catch ke liye
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button disabled={isLoading}>{isLoading ? 'Adding...' : 'Add Post'}</button>
    </form>
  );
}
```

---

## 🎯 Specific Item Ko Invalidate Karna (id-based)

```js
getPosts: builder.query({
  query: () => '/posts',
  providesTags: (result) =>
    result
      ? [...result.map(({ id }) => ({ type: 'Post', id })), { type: 'Post', id: 'LIST' }]
      : [{ type: 'Post', id: 'LIST' }],
}),

updatePost: builder.mutation({
  query: ({ id, ...patch }) => ({ url: `/posts/${id}`, method: 'PATCH', body: patch }),
  invalidatesTags: (result, error, { id }) => [{ type: 'Post', id }],
}),
```

> Isse sirf woh specific post refetch hota hai jo update hua — poori list nahi.

---

## 🔬 Experiment — Khud Try Karo

`addPost` aur `deletePost` mutations banao, dono ko `invalidatesTags: ['Post']` do, aur verify karo ki add/delete karte hi list bina manual refresh ke update ho jaati hai.

---

## ❓ Interview Questions

**Q: `providesTags` aur `invalidatesTags` mein kya fark hai?**
> `providesTags` query pe lagta hai — "yeh data is tag ke naam se cache mein hai" batata hai. `invalidatesTags` mutation pe lagta hai — "is tag ka cache purana ho gaya, refetch karo" batata hai.

**Q: `.unwrap()` kyun use karte hain mutation ke saath?**
> RTK Query mutation ka result normally ek object hota hai jisme `error`/`data` dono ho sakte hain, throw nahi hota. `.unwrap()` use karne se agar request fail hui toh actual promise reject hoga — jisse normal `try/catch` use kar sakte ho.

---

> **Next →** `08-middleware-devtools` 👉
