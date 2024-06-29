const mysql = require('mysql');

// Buat koneksi ke database
const connection = mysql.createConnection({
  host: 'localhost', // Ganti dengan host database Anda
  user: 'root',      // Ganti dengan username database Anda
  password: '',  // Ganti dengan password database Anda
  database: 'nama_database' // Ganti dengan nama database yang digunakan
});

// Koneksi ke database
connection.connect((err) => {
  if (err) {
    console.error('Error koneksi ke database: ' + err.stack);
    return;
  }
  console.log('Terhubung ke database dengan ID ' + connection.threadId);
});

module.exports = connection;
