# Cara Upload Projek React Js ke VPS NEO Lite Pro dari Biznet Gio Cloud

Detail paket VPS NEO Lite Pro mulai dari spesifikasi, keunggulan, dan harga, bisa [klik di sini](https://www.biznetgio.com/product/neo-lite-pro)

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
- Setelah install bisa cek versinya dengan :
```bash
sudo mysql --version
```
- Lalu bisa akses mysql dengan :
```bash
sudo mysql -u root -p
```
- Bisa menambahkan password agar aman (Ganti password_baru_anda dengan password yang kamu inginkan.):
```bash
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password_baru_anda';
FLUSH PRIVILEGES;
EXIT;
```
- Sekarang coba login ulang dengan:
```bash
sudo mysql -u root -p
```
- Lalu masukkan password yang tadi dibuat.
- Jika berhasil masuk, berarti sukses! 🎉

**Tambahan**

- Cek Mysql berjalan :
```bash
sudo systemctl status mysql
```
- Memulai Mysql :
```bash
sudo systemctl start mysql
```
- Restart Mysql :
```bash
sudo systemctl restart mysql
```
- Hentikan Mysql :
```bash
sudo systemctl stop mysql
```


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
sudo chown -R usernamemu:www-data /var/www/html
sudo chmod -R 775 /var/www/html
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



## 10. Test Benchmark VPS (Opsional)

**a. Test dengan YABS (Yet Another Bench Script)**
- Ketik di putty code berikut :
```bash
curl -sL yabs.sh | bash
```
- Ini untuk tes CPU, RAM, Disk, dan Network Speed. Hasilnya mirip spek resmi VPS.

**b. Menggunakan wrk untuk testing misal 200 user dengan 4x perulangan**
- Pertama install dahulu :
```bash
sudo apt install wrk -y
```
- Command untuk benchmark 200 user dalam 4x loop, masing-masing 30 detik:
```bash
wrk -t4 -c200 -d30s http://your-vps-ip/
```
- Ganti your-vps-ip dengan IP_ADDRESS_VPS
- Penjelasan:
  - t4 → Gunakan 4 thread untuk simulasi.
  - c200 → 200 koneksi aktif sekaligus.
  - d30s → Tes berjalan selama 30 detik.
- Hasilnya: Akan menampilkan latency, requests per second, dan bandwidth usage.



***


Jika ada kendala kamu bisa hubungi saya di :
- Whatsapp : [klik di sini](https://wa.me/6285713254744)
- Instagram : [klik di sini](https://instagram.com/codingasik)
- Tiktok : [klik di sini](https://tiktok.com/@codingasik)
- Youtube : [klik di sini](https://youtube.com/codingasik)
- Website : [klik di sini](https://codingasikacademy.com)

**Asikin Ajah Ngodingmu - By Bagas Coding Asik**  

