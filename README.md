# Cara Upload Projek React Js ke VPS

## A. Install aplikasi yang diperlukan

Note : pastikan tau IP address dari VMnya
- Asumsinya adalah sebagai web programmer yang fokus ke bahasa PHP dan Javascript
- Jadi kita butuh apache, mysql, php, node, npm dll
- Lalu menggunakan OS Ubuntu yang friendly untuk pemula

**1. Step install Apache**
- Buka terminal atau cmd di dan ketik `ssh root@IP_ADDRESS_VPS`
- Sesuikan root dengan username dan IP_ADRESS dengan IP yang ada di VM. Dan enter
- Setelah itu akan dimintai password. Ketik saja
- Lalu pertama update dulu system ubuntunya dengan `sudo apt update && sudo apt upgrade –y`
- Install Apache dengan : `sudo apt install apache2 -y`
- Aktifkan apache dengan : `sudo systemctl enable apache2 && sudo systemctl start apache2`
- Lalu coba test apache dengan buka browser dan ketik https://IP_ADDRESS_VPS. Jika muncul halaman default apache, maka berhasil

**2. Step install MySql dan PHP**
- Install Mysql dengan : `sudo apt install mysql-server -y`
- Amankan instasi Mysql dengan : `sudo mysql_secure_installation`
- Tes login ke Mysql dengan : `sudo mysql -u root -p`
- Jika berhasil masuk, maka berhasil install mysql
- Lalu install PHPnya dengan : `sudo apt install php libapache2-mod-php php-mysql -y`
- Restart apache agar PHP aktif : `sudo systemctl restart apache2`
- Lakukan testing dengan buat file dengan : `echo "<?php phpinfo(); ?>" > /var/www/html/info.php`
- Ini akan membuat file info.php didalam folder var/www/html
- Lalu akses : http://IP_ADDRESS_VPS/info.php . harusnya muncul info php, versi dll
- Lalu konfigurasi firewall seperti dibawah ini (opsional)
```bash
sudo ufw allow OpenSSH`
sudo ufw allow 'Apache Full'
sudo ufw enable
```

**3. Install aplikasi untuk mempermudah proses deploy**
a. Aplikasi Putty (sama seperti terminal/cmd tapi lebih mudah), bisa diunduh di : [klik di sini](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)
- Jika sudah terinstall, maka buka putty. dan input bagian Host dengan IP_ADDRESS_VPS dan port yaitu 22
- Lalu klik open, maka akan ada dialog login as. Ketik sesuai usernamenya, dan passwordnya juga
- Jika berhasil masuk, maka berhasil. Kamu bisa manage semua dependency disini (install, update, upgrade, uninstall dll)

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

