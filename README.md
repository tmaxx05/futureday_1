# Nắng Factory – React + Vite + Tailwind

Website tĩnh, chưa dùng backend. Hỗ trợ giao diện sáng/tối và song ngữ Việt/Anh.

## Chạy
```
npm install
npm run dev      # mở http://localhost:5173
npm run build    # ra thư mục dist/
```

## Cấu trúc
- `src/components/`: Header, Hero, About, Products, Estimator, Process, Distributors, Advantages, ConsultForm, ContactMe, Footer
- `src/locales/vi.json`, `en.json`: toàn bộ chữ hai ngôn ngữ (sửa nội dung ở đây)
- `src/data/distributors.json`: danh sách nhà phân phối (thêm một dòng là có thêm một thẻ)
- `src/data/production.json`: sản lượng điện mỗi kWp theo tháng của từng miền (số minh họa, cần thay bằng số thực tế)
- `src/lib/sunScene.ts`: mặt trời di chuyển và ánh sáng trên mái; `sceneSvg.ts` là khung hình mái nhà
- `src/index.css`: màu sáng/tối (biến CSS `--bg`, `--ink`...) và hiệu ứng nền, dải chạy

## Form gửi về Google Sheets
Tạo file `.env` (theo mẫu `.env.example`) và điền `VITE_SHEET_URL` bằng link `/exec` của Apps Script. Khi deploy Vercel, thêm biến này ở Settings → Environment Variables.

## Deploy Vercel
Import repo, Framework Preset chọn Vite (tự nhận), Build `npm run build`, Output `dist`.


