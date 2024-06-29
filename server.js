const express = require('express');
const path = require('path'); // Modul path untuk menangani path file

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk menyajikan file statis dari direktori 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Route untuk halaman login
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route untuk halaman registrasi
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'register', 'register.html'));
});

// Server listening
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
