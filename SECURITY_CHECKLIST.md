# Soulkey Project – Security Checklist

## 🔑 Secrets
- [ ] ไม่มี API keys หรือ token อยู่ใน repo
- [ ] `.env` ทั้งหมดถูก gitignore
- [ ] Keys ที่ใช้ถูกเก็บใน Vercel / Secret Manager เท่านั้น
- [ ] Keys สำคัญเปลี่ยนใหม่ทุก 6 เดือน

## 📦 Dependencies
- [ ] รัน `npm audit` หรือ `pnpm audit` ทุกเดือน
- [ ] อัปเดต dependency critical ภายใน 48 ชั่วโมง
- [ ] ไม่มี script แปลก ๆ เช่น postinstall ที่ไม่จำเป็น

## 🔒 GitHub Repo
- [ ] เปิด 2FA ทุก account
- [ ] เปิด branch protection (main)
- [ ] เปิด Dependabot alerts
- [ ] เปิด Secret Scanning

## ⚙️ Deployment
- [ ] ใช้ only env จาก Vercel / Host
- [ ] ไม่มี config sensitive ใน code
- [ ] Logs ไม่พิมพ์ secret

## 🧹 Housekeeping
- [ ] ก่อน commit run pre-commit (secret scan + lint)
- [ ] ตรวจไฟล์ใหม่ด้วย `trufflehog` หรือ `secretlint`
