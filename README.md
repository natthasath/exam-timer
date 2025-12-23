# 🎉 Exam Timer
Exam Timer - Countdown timer for exam rooms. Features countdown/stopwatch modes, preset times, audio alerts, fullscreen support, and 100% offline capability. Built with Electron. Install via winget: winget install Natthasath.ExamTimer

![version](https://img.shields.io/badge/version-1.0-blue)
![rating](https://img.shields.io/badge/rating-★★★★★-yellow)
![uptime](https://img.shields.io/badge/uptime-100%25-brightgreen)

## ✨ คุณสมบัติ

- 🕐 **โหมดนับถอยหลัง (Countdown)** - ตั้งเวลาสอบได้ตามต้องการ
- ⏱️ **โหมดจับเวลา (Stopwatch)** - จับเวลาเพิ่มขึ้นเรื่อยๆ
- ⚡ **Preset สำเร็จรูป** - 15 นาที ถึง 3 ชั่วโมง
- 🔔 **เสียงแจ้งเตือน** - เตือนเมื่อใกล้หมดเวลาและหมดเวลา
- 🖥️ **Fullscreen** - แสดงเต็มหน้าจอ
- 📴 **Offline** - ทำงานได้โดยไม่ต้องต่ออินเทอร์เน็ต
- 📌 **Always on Top** - ตรึงหน้าต่างไว้ด้านบนสุด

## ⌨️ คีย์ลัด

| คีย์ | การทำงาน |
|------|----------|
| `Space` | เริ่ม / หยุดชั่วคราว / เริ่มต่อ |
| `Esc` | รีเซ็ต |
| `F` หรือ `F11` | เต็มหน้าจอ |
| `Ctrl +` | ซูมเข้า |
| `Ctrl -` | ซูมออก |
| `Ctrl 0` | ขนาดปกติ |

## 📦 ติดตั้งผ่าน winget

```bash
winget install Natthasath.ExamTimer
```

---

## 🛠️ การ Build

### ขั้นตอนที่ 1: ติดตั้ง Dependencies

```bash
npm install
```

### ขั้นตอนที่ 2: ทดสอบ App

```bash
npm start
```

### ขั้นตอนที่ 3: Build Installer

```bash
npm run build:win
```

หรือดับเบิลคลิก `build.bat`

ไฟล์ที่ได้จะอยู่ในโฟลเดอร์ `dist/`:
- `Exam Timer Setup 1.0.0.exe` - ไฟล์ติดตั้ง
- `ExamTimer-Portable-1.0.0.exe` - ไฟล์ Portable

---

## 📦 การ Publish ไปยัง winget

### 1. Build และ Upload

1. Build app ด้วย `npm run build:win`
2. สร้าง GitHub Release ใหม่ (v1.0.0)
3. Upload `Exam Timer Setup 1.0.0.exe` ไปยัง Release

### 2. สร้าง SHA256 Hash

```powershell
certutil -hashfile "dist\Exam Timer Setup 1.0.0.exe" SHA256
```

### 3. แก้ไข Manifest

แก้ไขไฟล์ใน `installer/winget-manifests/Natthasath.ExamTimer/1.0.0/`:
- ใส่ SHA256 hash ใน `Natthasath.ExamTimer.installer.yaml`

### 4. Submit PR

1. Fork https://github.com/microsoft/winget-pkgs
2. คัดลอกโฟลเดอร์ manifest ไปยัง `manifests/n/Natthasath/ExamTimer/1.0.0/`
3. สร้าง Pull Request

---

## 📄 License

MIT License - ดู [LICENSE.txt](LICENSE.txt)
