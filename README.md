# Soulkey Web 🌌

Frontend หลักของระบบ **Soulkey**  
สร้างด้วย [Next.js](https://nextjs.org/) + TypeScript + Tailwind CSS  
Deploy อยู่ที่ **Vercel** → [soulkey-web.vercel.app](https://soulkey-web.vercel.app)

---

## โครงสร้างโปรเจกต์
```
/
├─ app/                → ไฟล์เพจหลัก (Next.js App Router)
├─ components/         → React components ที่ใช้ซ้ำ
├─ styles/             → ไฟล์ CSS/Tailwind
├─ package.json        → dependencies & scripts
├─ next.config.js      → การตั้งค่า Next.js
├─ tsconfig.json       → TypeScript config
└─ ...
```

---

## Data Feed
หน้า **Today Free** จะดึงข้อมูลจาก repo `soulkey-daily-transit` (GitHub Pages)  

JSON URL:  
https://yujikung28.github.io/soulkey-daily-transit/daily_transit.json

ตัวอย่างการ fetch:
```tsx
const res = await fetch(
  "https://yujikung28.github.io/soulkey-daily-transit/daily_transit.json",
  { cache: "no-store" }
);
const data = await res.json();
```

---

## Deploy
- Host: [Vercel](https://vercel.com/)  
- Branch: `main` → auto deploy ทุกครั้งที่ push  
- Production URL: https://soulkey-web.vercel.app

---

## การพัฒนา (Development)
```bash
# ติดตั้ง dependency
npm install

# รันบน localhost
npm run dev

# build production
npm run build
```

---

## Note
- Repo นี้ = **ตัวเว็บหลัก** (UI/UX)  
- ไม่เก็บ data ดวง → ดึงจาก repo `soulkey-daily-transit` เท่านั้น  
- Domain หลัก (เช่น `soulkey.world`) สามารถชี้มาที่ Vercel ได้ในอนาคต
