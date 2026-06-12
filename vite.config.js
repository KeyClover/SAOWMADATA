import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "./" ทำให้ใช้ได้กับ GitHub Pages ทุกชื่อ repo โดยไม่ต้องตั้งค่าเพิ่ม
export default defineConfig({
  plugins: [react()],
  base: "/SAOWMADATA.github.io/",
});
