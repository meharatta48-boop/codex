# Pro Commerce Frontend (React + Tailwind)

Professional ecommerce frontend scaffold with all requested pages/components and backend integration-ready API layer.

## Setup

```bash
npm install
npm run dev
```

Set backend URL:

```bash
cp .env.example .env
```

## Routes Included

- Public: `/`, `/products`, `/product/:id`, `/login`, `/register`, `/forgot-password`, `/reset-password/:token`
- User: `/profile`, `/cart`, `/checkout`, `/orders`, `/order/:id`
- Admin: `/admin`, `/admin/products`, `/admin/categories`, `/admin/orders`, `/admin/users`

## Backend Integration

API client is in `src/services/apiClient.js` and endpoint wrappers in `src/services/endpoints.js`.
