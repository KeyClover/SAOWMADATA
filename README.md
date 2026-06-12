# RBSMC — Student Database & Simulation Race

เว็บแอปสำหรับมือถือ สร้างด้วย React + Vite · Deploy อัตโนมัติขึ้น GitHub Pages

## วิธีอัพเดทแอป
- แก้ข้อมูล/ฟีเจอร์: แทนที่ไฟล์ `src/App.jsx` ด้วยไฟล์ใหม่ แล้ว commit — ระบบจะ build และอัพเดทเว็บให้เองใน 1-2 นาที
- ดูสถานะ build ได้ที่แท็บ **Actions**

## โครงสร้าง
- `src/App.jsx` — โค้ดแอปทั้งหมด (รวมฐานข้อมูลและรูปตัวอย่าง)
- `public/` — ไอคอนแอป + manifest (สำหรับ Add to Home Screen)
- `.github/workflows/deploy.yml` — สคริปต์ build + deploy อัตโนมัติ
