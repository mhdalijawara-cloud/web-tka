@echo off
title TKA Mobile CBT - Terowongan Aman VPS
echo ======================================================================
echo           TKA MOBILE CBT ENGINE - PAPER CREAM EDITION
echo                  Terowongan Aman (SSH Tunnel) VPS
echo ======================================================================
echo.
echo [1/2] Membuka koneksi aman ke server AWS EC2 (18.143.134.149:8000)...
echo [2/2] Web aplikasi dapat diakses di browser pada:
echo.
echo       👉  http://localhost:8000
echo.
echo * Catatan: Jangan tutup jendela ini selama sedang menggunakan web latihan.
echo * Tekan Ctrl+C atau tutup jendela ini jika sesi belajar telah selesai.
echo ======================================================================
echo.

start http://localhost:8000
ssh -i "C:\Muhammad Ali Jawara Wiratama\TTTT - Copy\hk50-key.pem" -o StrictHostKeyChecking=no -N -L 8000:localhost:8000 ubuntu@18.143.134.149
