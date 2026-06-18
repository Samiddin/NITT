# Narpay innovatsion tibbiyot texnikumi — korporativ veb-sayt

React + Vite + Tailwind CSS asosida qurilgan, 3 tilli (O'zbek / Русский / English), barcha ekranlarga moslashuvchan korporativ sayt.

## Ishga tushirish (Windows 10 / VS Code)

1. **Node.js** o'rnating (LTS versiya): https://nodejs.org
2. Loyiha papkasini VS Code'da oching.
3. Terminalni oching (`Ctrl + ~`) va quyidagilarni yozing:

```bash
npm install
npm run dev
```

4. Brauzer avtomatik ochiladi: http://localhost:5173

## Production uchun yig'ish

```bash
npm run build
npm run preview
```

Tayyor fayllar `dist/` papkasida bo'ladi — uni istalgan hostingga (Netlify, Vercel, oddiy server) joylash mumkin.

## Tuzilma

- `src/NarpayMedicalCollege.jsx` — asosiy sayt komponenti (barcha bo'limlar va tarjimalar shu yerda)
- `src/main.jsx` — kirish nuqtasi
- `src/index.css` — Tailwind ulanishi

## Tahrirlash

Matnlar, telefon raqami, manzil va bo'limlar `NarpayMedicalCollege.jsx` faylining yuqorisidagi `T` obyektida joylashgan (uz / ru / en). Shu yerdan o'zgartirasiz.
