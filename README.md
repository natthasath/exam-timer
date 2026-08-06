# 🎉 Exam Timer

Exam Timer is a countdown and stopwatch app built for exam rooms. It runs fully offline, supports fullscreen display, audio alerts, and is installable on Windows via winget.

![release](https://img.shields.io/github/v/release/natthasath/exam-timer)
![platform](https://img.shields.io/badge/platform-windows-lightgrey)
![license](https://img.shields.io/github/license/natthasath/exam-timer)

### ✨ Features

- 🕐 **Countdown mode** — set a custom exam duration
- ⏱️ **Stopwatch mode** — counts time upward
- ⚡ **Built-in presets** — from 15 minutes to 3 hours
- 🔔 **Audio alerts** — warns when time is running low and when time is up
- 🖥️ **Fullscreen display**
- 📴 **Fully offline** — no internet connection required
- 📌 **Always on top** — keeps the window pinned above others

---

### 🚀 Installation

```shell
winget install Natthasath.ExamTimer
```

### ⚙️ Development

```shell
npm install
npm start
npm run build:win
```

Or double-click `build.bat`.

Build output goes to `dist/`:

- `Exam Timer Setup 1.0.0.exe` — installer
- `ExamTimer-Portable-1.0.0.exe` — portable

### 🐳 Publishing to winget

1. Build the app with `npm run build:win`.
2. Create a new GitHub Release (e.g. `v1.0.0`) and upload `Exam Timer Setup 1.0.0.exe`.
3. Generate the SHA256 hash:
   ```powershell
   certutil -hashfile "dist\Exam Timer Setup 1.0.0.exe" SHA256
   ```
4. Update the hash in `installer/winget-manifests/Natthasath.ExamTimer/1.0.0/Natthasath.ExamTimer.installer.yaml`.
5. Fork [microsoft/winget-pkgs](https://github.com/microsoft/winget-pkgs), copy the manifest folder to `manifests/n/Natthasath/ExamTimer/1.0.0/`, and submit a Pull Request.

> [!IMPORTANT]
> The SHA256 hash in the manifest must exactly match the uploaded installer. A mismatch fails winget's manifest validation and blocks the Pull Request.

---

### 🏆 Usage

| Key | Action |
|---|---|
| `Space` | Start / Pause / Resume |
| `Esc` | Reset |
| `F` or `F11` | Toggle fullscreen |
| `Ctrl +` | Zoom in |
| `Ctrl -` | Zoom out |
| `Ctrl 0` | Reset zoom |

---

### 📜 License

This project is licensed under the [MIT License](LICENSE).

### ✉️ Contact

**Natthasath Saksupanara** — Computer Technical Officer, NIDA  
natthasath.sak@gmail.com
