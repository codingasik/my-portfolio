# Cara Upload Projek React Js ke VPS

Note : pastikan tau IP address dari VPSnya
- Asumsinya adalah sebagai web programmer yang fokus ke bahasa PHP dan Javascript
- Jadi kita butuh apache, mysql, php, node, npm dll
- Lalu menggunakan OS Ubuntu yang friendly untuk pemula

## 1. Install aplikasi untuk mempermudah proses deploy

a. Aplikasi Putty (sama seperti terminal/cmd tapi lebih mudah), bisa diunduh di : [klik di sini](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

b. Aplikasi FileZilla (ini untuk management file yaitu upload project web dll lebih mudah), bisa diunduh di : [klik di sini](https://filezilla-project.org/)
- Jika sudah terinstall, maka buka FileZillanya dan input bagian Host : IP_ADDRESS_VPS, username : username_vps, password : password_vps dan port : 22
- Lalu karena menggunakan apache, maka base foldernya berapa di `var/www/html/` untuk upload projek web dll

c. Aplikasi Node js untuk install dll projek base js seperti React js dll, bisa diunduh di : [klik di sini](https://nodejs.org/en/download)
- Setelah terinstall pastikan untuk cek di terminal/ cmd dengan : `node --version`, harusnya muncul versi node js
- Jika sudah cek npmnya juga dengan `npm --version`, dan harusnya juga muncul versi npmnya untuk management package, library projek dll

d. Aplikasi Git untuk clone dll projek github, bisa diunduh di : [klik di sini](https://git-scm.com/downloads)
- Setelah terinstall pastikan cek di terminal atau cmd juga dengan `git --version` yang harusnya muncul versi gitnya

e. Aplikasi VS Code yaitu text editor untuk manage projek react jsnya, bisa diunduh di : [klik di sini](https://code.visualstudio.com/download)
- Ngga harus text editor ini tapi VS Code yang paling direkomendasikan
- Pilih saja sesuai OS PC atau Laptopmu saat mendownloadnya

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

## 4. Install MySQL (Database Server)

- Buka VPSnya terlebih dahulu, ketik
```bash
sudo apt install mysql-server -y
```
- Setelah install, jalankan konfigurasi keamanan:
```bash
sudo mysql_secure_installation
```
- Pertanyaan yang akan muncul:
-> "Set up VALIDATE PASSWORD component?" → (Opsional), kalau mau password MySQL lebih kuat, pilih Y.
-> "Change the root password?" → (Yes, masukkan password untuk root MySQL)
-> "Remove anonymous users?" → Y (hapus user anonim)
-> "Disallow root login remotely?" → Y (biar lebih aman)
-> "Remove test database?" → Y
-> "Reload privilege tables now?" → Y

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

## 5. Install PHP

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

**4. Upload projek React js ke vps**
- Clone projek react js yang sudah saya siapkan dengan cara buka terminal atau cmd, dan pastikan path sudah sesuai yang diinginkan misal di desktop, document dll. Dan ketik `git clone https://github.com/codingasik/my-portfolio.git`
- Tunggu prosesnya selesai. Jika sudah maka akan ada projek dengan nama **my-portfolio**
- Lalu ketik di terminalnya lagi `cd my-portfolio` dan install semua package, library dll react jsnya dengan ketik `npm install`
- Tunggu proses downloadnya selesai. Selanjutnya agar lebih mudah buka projek dengan VS Code dengan ketik `code .`, maka otomatis VS Code akan terbuka
- Buka terminal lagi di VS Codenya dan ketik `npm run dev`, dan klik tombol `ctrl+klik kiri` port yang ditampilkan di terminal misalnya 'http://localhost:5173/'. Maka projek react akan tampil di browser
- Selanjutnya hentikan prosesnya dengan klik tombol `ctrl+c` di terminal
- Build projek react js dengan `npm run build`, maka akan ada folder baru yaitu **dist**
- Isi folder dist adalah file yang akan diupload nantinya di VPS. Jadi compress ke zip semua isi folder dist
- Setelah itu upload file dist.zip ke vps dengan FIleZilla ke dalam direktori `var/www/html/` (tapi pastikan isinya dihapus semua dulu agar clean) atau jika ingin rapi bisa buat folder misal **my-project** didalam var/www/html/ dengan klik kanan FileZilla dan New Folder
- Lalu upload dist.zip ke folder my-project dan ekstrak
- Jangan lupa tambahkan file baru yaitu **.htaccess** yang isinya
```bash
RewriteEngine On
RewriteBase /
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ index.html [L]
```
- Setelah itu coba akses http://IP_ADDRESS_VPS di browser. Harusnya muncul tampilan projek React jsnya
- Sampai sini **Selamat!!!** kamu berhasil upload projek React Js pertamamu ke VPS

===============
Jika ada kendala kamu bisa hubungi saya di :
- Whatsapp : [klik di sini](https://wa.me/6285713254744)
- Instagram : [klik di sini](https://instagram.com/codingasik)
- Tiktok : [klik di sini](https://tiktok.com/@codingasik)
- Youtube : [klik di sini](https://youtube.com/codingasik)
- Website : [klik di sini](https://codingasikacademy.com)

**Asikin Ajah Ngodingmu - By Bagas Coding Asik**  

