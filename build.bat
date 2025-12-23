@echo off
echo ========================================
echo   Exam Timer - Build Script
echo ========================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed!
    echo Please download and install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo [1/4] Checking Node.js version...
node --version

REM Change to the script's directory
cd /d "%~dp0"

echo.
echo [2/4] Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo [ERROR] Failed to install dependencies!
    pause
    exit /b 1
)

echo.
echo [3/4] Building application...
call npm run build:win
if %errorlevel% neq 0 (
    echo [ERROR] Build failed!
    pause
    exit /b 1
)

echo.
echo [4/4] Build completed successfully!
echo.
echo Output files are in the 'dist' folder:
dir /b dist\*.exe 2>nul
echo.
echo ========================================
echo   Build Complete!
echo ========================================
pause
