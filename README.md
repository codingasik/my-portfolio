# Cara Upload Projek React Js ke VPS

Note : pastikan tau IP address dari VPSnya
- Asumsinya adalah sebagai web programmer yang fokus ke bahasa PHP dan Javascript
- Jadi kita butuh apache, mysql, php, node, npm dll
- Lalu menggunakan OS Ubuntu yang friendly untuk pemula

## 1. Install aplikasi untuk mempermudah proses deploy

a. Aplikasi Putty (sama seperti terminal/cmd tapi lebih mudah), bisa diunduh di : [klik di sini](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)
b. Aplikasi FileZilla (ini untuk management file yaitu upload project web dll lebih mudah), bisa diunduh di : [klik di sini](https://filezilla-project.org/)
c. Aplikasi Node js untuk install dll projek base js seperti React js dll, bisa diunduh di : [klik di sini](https://nodejs.org/en/download)
d. Aplikasi Git untuk clone dll projek github, bisa diunduh di : [klik di sini](https://git-scm.com/downloads)
e. Aplikasi VS Code yaitu text editor untuk manage projek react jsnya, bisa diunduh di : [klik di sini](https://code.visualstudio.com/download)

## 2. Akses VPS

**a. Via terminal di VPS webnya**
- Biasanya diweb ada fitur console atau terminal. Nah bisa langsung akses disitu
- Cuma memang kurang fleksibel

**b. Via terminal atau cmd di Laptop/PC langsung**
1. Cara pertama
- Buka terminal atau cmd di dan ketik `ssh root@IP_ADDRESS_VPS`
- Sesuikan root dengan username dan IP_ADRESS dengan IP yang ada di VM. Dan enter
- Setelah itu akan dimintai password. Ketik saja

2. Via file private key (file *.pem) di terminal atau cmd
- Buka terminal atau cmd dan arahkan ke directory file *.pem berada
- Lalu ketik `ssh -i namafile.pem username@IP_ADDRESS_VPS` dan enter
- Maka otomatis akan masuk ke VPS

**c. Via Putty**
1. Cara pertama
- Buka Putty dan input bagian Host dengan IP_ADDRESS_VPS dan port yaitu 22
- Lalu klik open, maka akan ada dialog **login as**. Ketik sesuai usernamenya, dan passwordnya juga
- Jika berhasil masuk, maka berhasil

2. Via Putty via SSH private key
Note : Jika menggunakan SSH private key dll (misal punya file format *.pem *.ppk)

**Step convert** (abaikan step ini jika sudah ada file *.ppk)
- Convert dulu file *.pem ke format *.ppk (jika hanya ada format *.pem)
- Saat install putty, harusnya tersinstall aplikasi PuttyGen juga. Buka aplikasinya
- Pada jendela klik tombol **load**, dan cari file *.pem
- Lalu setelah terload, klik tombol **Save private key**. Simpan dengan nama dan di folder yang mudah diingat dan dicari

**Step open**
- Lalu buka putty, input host : IP_ADDRESS_VPS, port : 22
- Di tab kiri pilih bagian `Connection>SSH>Auth>Credentials`
- Lalu Browse private key format *.ppk yang diconvert tadi, dan klik Open
- Lalu di **login as:** ketik usernamenya. Maka VPS berhasil dibuka via Putty

## 3. Install Apache (Web Server)

- Buka VPSnya terlebih dahulu, ketik
```bash
sudo apt update && sudo apt install apache2 -y
```
- Cek apakah Apache sudah jalan:
```bash
sudo systemctl status apache2
```
- Kalau aktif, harusnya muncul active (running).
- Jika belum, aktifkan dengan :
```bash
sudo systemctl enable apache2 && sudo systemctl start apache2
```
- Buka IP server di browser:
```bash
http://IP_SERVER
```
- Kalau muncul "Apache2 Ubuntu Default Page", berarti sukses! 🎉

## 4. Install MySQL Database Server (Opsional)

- Buka VPSnya terlebih dahulu, ketik
```bash
sudo apt install mysql-server -y
```
- Setelah install, jalankan konfigurasi keamanan:
```bash
sudo mysql_secure_installation
```
- Pertanyaan yang akan muncul:
  - "Set up VALIDATE PASSWORD component?" → (Opsional), kalau mau password MySQL lebih kuat, pilih Y.
  - "Change the root password?" → (Yes, masukkan password untuk root MySQL)
  - "Remove anonymous users?" → Y (hapus user anonim)
  - "Disallow root login remotely?" → Y (biar lebih aman)
  - "Remove test database?" → Y
  - "Reload privilege tables now?" → Y

- Cek apakah MySQL sudah jalan:
```bash
sudo systemctl status mysql
```
- Masuk ke MySQL:
```bash
sudo mysql -u root -p
```
- Lalu masukkan password yang tadi dibuat.
- Jika berhasil masuk, berarti sukses! 🎉

## 5. Install PHP (Opsional)

- Buka VPSnya terlebih dahulu, ketik
```bash
sudo apt install php libapache2-mod-php php-mysql -y
```
- Cek versi PHP:
```bash
php -v
```
- Kalau muncul versi PHP, berarti sukses! ✅

## 6. Restart Apache biar semua konfigurasi aktif

```bash
sudo systemctl restart apache2
```
- 🔥 Done! Sekarang Apache + MySQL + PHP sudah siap digunakan di VPS! 🚀

## 7. Install Node.js & npm (Opsional)

- Buka VPSnya terlebih dahulu, ketik
```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs
```
- Cek versi Node.js dan npm:
```bash
node -v
npm -v
```

## 8. Install Git (Opsional)

- Buka VPSnya terlebih dahulu, ketik
```bash
sudo apt install git -y
```
- Cek versi Git:
```bash
git --version
```
- Set konfigurasi Git (opsional, kalau mau commit pakai GitHub/GitLab)
```bash
git config --global user.name "Nama Kamu"
git config --global user.email "email@example.com"
```
- Cek hasil konfigurasi:
```bash
git config --list
```
- 🔥 Selesai! Sekarang Node.js, npm, dan Git sudah siap di VPS! 🚀

## 9. Upload projek React js ke vps

**a. Clone projek, install dan build Projek React Js**
- Masuk ke direktori kerja di komputer lokal, lalu jalankan:
```bash
git clone https://github.com/codingasik/my-portfolio.git
```
- Masuk ke folder project:
```bash
cd my-portfolio
```
- Install dependencies
```bash
npm install
```
- Build project React.js
```bash
npm run build
```
- 👉 Hasilnya ada di folder build/ atau dist/
- Jangan lupa tambahkan file baru yaitu **.htaccess** didalam folder build/ atau dist/ yang isinya
```bash
RewriteEngine On
RewriteBase /
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ index.html [L]
```

**b. Upload projek ke VPS via FileZilla**
- Buka FileZilla
- Login ke VPS dengan SFTP (port 22) pakai:
  - Host: sftp://IP_VPS_KAMU
  - Username: (contoh: root atau user lain)
  - Password: (atau pakai Private Key .pem jika pakai AWS/GCP)
- Upload semua isi dari folder build/ atau dist/ di projek react js ke VPS ke /var/www/html/ (cukup drag semua file dari tab kiri ke kanan)

**c. Set Permission & Restart Apache (opsional)**
- Pastikan permission benar:
```bash
sudo chown -R www-data:www-data /var/www/html/
sudo chmod -R 755 /var/www/html/
```
- Restart Apache:
```bash
sudo systemctl restart apache2
```
- 🔥 Selesai! Sekarang React.js sudah bisa diakses via:
```bash
http://IP_VPS
```
- Sampai sini **Selamat!!!** kamu berhasil upload projek React Js pertamamu ke VPS

***

Jika ada kendala kamu bisa hubungi saya di :
- Whatsapp : [klik di sini](https://wa.me/6285713254744)
- Instagram : [klik di sini](https://instagram.com/codingasik)
- Tiktok : [klik di sini](https://tiktok.com/@codingasik)
- Youtube : [klik di sini](https://youtube.com/codingasik)
- Website : [klik di sini](https://codingasikacademy.com)

**Asikin Ajah Ngodingmu - By Bagas Coding Asik**  

