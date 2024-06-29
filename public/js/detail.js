document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const wisataParam = urlParams.get('wisata');

    if (wisataParam) {
        // Ambil elemen #wisata-content
        const wisataContent = document.getElementById('wisata-content');

        // Buat objek untuk menyimpan deskripsi wisata
        const deskripsiWisata = {
            'jatim-park-1': {
                nama: 'Jatim Park 1',
                rating: 4.5,
                ulasan: '1378 ulasan',
                alamat: 'Jl. Dewi Sartika Atas, Sisir, Kec. Batu, Kota Batu, Jawa Timur 65314',
                htm: 'Rp. 115.000 - Rp. 140.000',
                jam: '08.30 - 16.30',
                deskripsi: 'Taman hiburan dengan wahana, tempat makan, & pameran/pertunjukan budaya tradisional Indonesia.',
                gambar: './images/jatim-park-1.jpg',
                maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1976.0521109866165!2d112.52363028828826!3d-7.884163641176519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7880d52e0379d9%3A0x9c94d817cc2686bb!2sJatim%20Park%20I%2C%20Jl.%20Dewi%20Sartika%20Atas%2C%20Sisir%2C%20Kec.%20Batu%2C%20Kota%20Batu%2C%20Jawa%20Timur%2065314!5e0!3m2!1sen!2sid!4v1718647591830!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            'jatim-park-2': {
                nama: 'Jatim Park 2',
                rating: 4.7,
                ulasan: '670 ulasan',
                alamat: 'Jl. Raya Oro-Oro Ombo No.9, Temas, Kec. Batu, Kota Batu, Jawa Timur 65315',
                htm: 'Rp. 125.000 - Rp. 150.000',
                jam: '08.30 - 16.30',
                deskripsi: 'Taman hiburan dengan kegiatan pendidikan seputar ilmu pengetahuan alam & biologi, termasuk kebun binatang.',
                gambar: './images/Jatimpark2.jpg',
                maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.0674185727044!2d112.5269692738071!3d-7.888015678462267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7880d6ffffffff%3A0xf36560f87fd4fd77!2sJawa%20Timur%20Park%202!5e0!3m2!1sen!2sid!4v1718647627231!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            'jatim-park-3': {
                nama: 'Jatim Park 3',
                rating: 4.5,
                ulasan: '856 ulasan',
                alamat: 'Jl. Ir. Soekarno No.144, Beji, Kec. Junrejo, Kota Batu, Jawa Timur 65236',
                htm: 'Rp. 30.000 - Rp. 125.000',
                jam: '08.30 - 16.30',
                deskripsi: 'Taman hiburan populer dengan atraksi dinosaurus, museum lilin, kedai camilan & pameran teknologi.',
                gambar: './images/jatim-park-3.jpg',
                maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.9802814798186!2d112.54848926850931!3d-7.89712846114226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78811848f3a957%3A0x1b0013b35e7ee3cd!2sJawa%20Timur%20Park%203!5e0!3m2!1sen!2sid!4v1718647654505!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            'batu-night-spectacular': {
                    nama: 'Batu Night Spectacular',
                    rating: 4.5,
                    ulasan: '888 ulasan',
                    alamat: 'Jl. Hayam Wuruk No.1, Oro-Oro Ombo, Kec. Batu, Kota Batu, Jawa Timur 65316',
                    htm: 'Rp. 45.000 - Rp. 125.000',
                    jam: '08.30 - 16.30',
                    deskripsi: 'Taman hiburan yang beroperasi malam hari dengan wahana, pertunjukan langsung, permainan karnaval, & pasar.',
                    gambar: './images/Batunightspectacular.jpg',
                    maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.9860909908984!2d112.53217142380718!3d-7.89652122856332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7881303f2c72db%3A0x953ed7171a77ec21!2sBatu%20Night%20Spectacular%20(BNS)!5e0!3m2!1sen!2sid!4v1718733308870!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
                },
                'taman-rekreasi-selecta': {
                    nama: 'Taman Rekreasi Selecta',
                    rating: 4.5,
                    ulasan: '1078 ulasan',
                    alamat: 'Jl. Raya Selecta No.1, Tulungrejo, Kec. Bumiaji, Kota Batu, Jawa Timur 65336',
                    htm: 'Rp. 50.000',
                    jam: '07.00 - 17.00',
                    deskripsi: 'Taman hiburan ini memiliki seluncur air, perahu dayung, sepeda gantung, kebun, bioskop, dan lainnya.',
                    gambar: './images/Taman-Rekreasi-Selecta.jpg',
                    maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.7307578894483!2d112.52275877380593!3d-7.818297777638125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e787e762e0d9487%3A0xb8804cabf1c12b40!2sSelecta%20Recreation%20Park!5e0!3m2!1sen!2sid!4v1718647862703!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
                },
                'museum-angkut': {
                    nama: 'Museum Angkut',
                    rating: 4.7,
                    ulasan: '1072 ulasan',
                    alamat: 'Jl. Terusan Sultan Agung No.2, Ngaglik, Kec. Batu, Kota Batu, Jawa Timur 65314',
                    htm: 'Rp. 100.000',
                    jam: '08.30 - 16.30',
                    deskripsi: 'Museum unik yang menampilkan adegan & karakter film Hollywood, serta mobil, tank, & moped.',
                    gambar: './images/museum-angkut.jpg',
                    maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.155402778617!2d112.51739977380696!3d-7.878803678352895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78872dd3cd2c13%3A0x3295038cd23c1d38!2sMuseum%20Angkut!5e0!3m2!1sen!2sid!4v1718647727595!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
                },
                'cangar': {
                    nama: 'Cangar',
                    rating: 4.4,
                    ulasan: '777 ulasan',
                    alamat: 'Tulungrejo, Sumber Brantas, Kec. Bumiaji, Kota Batu, Jawa Timur 65336',
                    htm: 'Rp. 10.000',
                    jam: '08.00 - 15.00',
                    deskripsi: 'Kompleks mata air panas yang memiliki hutan dengan tempat kemah, pemandian air panas & gua peninggalan Jepang.',
                    gambar: './images/Cangar.jpeg',
                    maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.4723134786327!2d112.53119277380452!3d-7.739620476717619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e787c3aaaaaaaab%3A0xbe4aabe6601d0db9!2sCangar%20Hot%20Spring!5e0!3m2!1sen!2sid!4v1718733180023!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
                },
                'eco-green-park': {
                    nama: 'Eco Green Park',
                    rating: 4.6,
                    ulasan: '598 ulasan',
                    alamat: 'Jl. Raya Oro-Oro Ombo No.9A, Sisir, Kec. Batu, Kota Batu, Jawa Timur 65314',
                    htm: 'Rp. 65.000 - Rp. 80.000',
                    jam: '08.30 - 16.30',
                    deskripsi: 'Kegiatan berfoto sangat populer di "rumah terbalik" yang terkenal ini, dengan toko makanan & toko suvenir.',
                    gambar: './images/Ecogreenpark.jpg',
                    maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.069767545623!2d112.52403527380697!3d-7.887769878459334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7881617ff5e4f7%3A0x63c0ef9654873861!2sEco%20Green%20Park!5e0!3m2!1sen!2sid!4v1718732136591!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
                },
                'alun-alun-kota-batu': {
                    nama: 'Alun-Alun Kota Batu',
                    rating: 4.7,
                    ulasan: '1099 ulasan',
                    alamat: 'Alun - Alun Kota Wisata Batu, Jl. Diponegoro, Sisir, Kec. Batu, Kota Batu, Jawa Timur 65314',
                    htm: '-',
                    jam: '-',
                    deskripsi: 'Alun-alun ramai didominasi oleh Bianglala terkenal, serta patung penuh warna dan kedai mi.',
                    gambar: './images/Alunalunkotabatu.jpg',
                    maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.2282723579497!2d112.52434937380679!3d-7.871166078262349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e789da3a46807f1%3A0xea1a51125dafb9b8!2sAlun-Alun%20Kota%20Wisata%20Batu!5e0!3m2!1sen!2sid!4v1718732862467!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
                },
                'taman-langit-gunung-banyak': {
                    nama: 'Taman Langit Gunung Banyak',
                    rating: 4.5,
                    ulasan: '100 ulasan',
                    alamat: 'Jl. Gn. Banyak, Gunungsari, Kec. Bumiaji, Kota Batu, Jawa Timur 65312',
                    htm: 'Rp. 25.000',
                    jam: '07.00 - 00.00',
                    deskripsi: 'Spot populer untuk selfie di tengah berbagai patung unik dengan hamparan pemandangan indah.',
                    gambar: './images/Tamanlangitgunungbanyak.jpg',
                    maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.386972468711!2d112.49547507380647!3d-7.854506878065151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7887676b453f41%3A0xb3bb427b64aa4b7b!2sTaman%20Langit%20Gunung%20Banyak!5e0!3m2!1sen!2sid!4v1718731803547!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
                },
                'batu-love-garden': {
                    nama: 'Batu Love Garden',
                    rating: 4.5,
                    ulasan: '100 ulasan',
                    alamat: 'Jl. Raya Pandanrejo No.91, Pandanrejo, Kec. Bumiaji, Kota Batu, Jawa Timur 65332',
                    htm: 'Rp. 80.000 - Rp. 100.000',
                    jam: '08.30 - 16.30',
                    deskripsi: 'Taman hiburan fotogenik dengan pameran bunga, taman topiari, rumah kupu-kupu & wahana menunggang unta.',
                    gambar: './images/Batulovegarden.JPG',
                    maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.2973207936775!2d112.5402669738067!3d-7.863922178176574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e788176c89c5edd%3A0xc912577baebd778d!2sBatu%20Love%20Garden%20-%20BALOGA!5e0!3m2!1sen!2sid!4v1718732426456!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
                    
                },
                'predator-fun-park': {
                    nama: 'Predator Fun Park',
                    rating: 4.4,
                    ulasan: '399 ulasan',
                    alamat: 'Jl. Raya Tlekung No.315, Tlekung, Kec. Junrejo, Kota Batu, Jawa Timur 65327',
                    htm: 'Rp. 55.000 - Rp. 70.000',
                    jam: '08.30 - 16.30',
                    deskripsi: 'Taman hiburan bertema reptil dengan pameran & pertunjukan edukatif, wahana & kolam renang dengan seluncur air.',
                    gambar: './images/Predatorfunpark.jpg',
                    maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.826916868082!2d112.54601417380754!3d-7.913141978761208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7881429e90d651%3A0x9a1524cafe5eac51!2sPredator%20Fun%20Park!5e0!3m2!1sen!2sid!4v1718732661016!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
                    
                },
                'omah-kayu': {
                    nama: 'Omah Kayu',
                    rating: 4.5,
                    ulasan: '100 ulasan',
                    alamat: 'Kota Batu',
                    htm: 'Rp. 10.000',
                    jam: '09.00 - 17.00',
                    deskripsi: 'Penginapan rumah pohon pedesaan yang menawarkan pemandangan pegunungan indah di area hutan yang tenang.'
                },
                'malang-night-paradise': {
                nama: 'Malang Night Paradise',
                rating: 4.5,
                ulasan: '467 ulasan',
                alamat: 'Jl. Graha Kencana Raya Jl. Raya Karanglo No.66, Karanglo, Balearjosari, Kec. Blimbing, Kota Malang, Jawa Timur 65126',
                htm: 'Rp. 55.000 - Rp. 90.000',
                jam: '17.45 - 22.00',
                deskripsi: 'Taman hiburan malam dengan berbagai wahana, lampion, dan pemandangan cahaya yang spektakuler.',
                gambar: './images/Malang_Night_Paradise.jpg',
                maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.7275076914934!2d112.65543737380776!3d-7.923504578884799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd629866466afe7%3A0x41e4435bb9bc1c00!2sMalang%20Night%20Paradise!5e0!3m2!1sen!2sid!4v1718647686333!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
                'air-terjun-coban-rondo': {
                nama: 'Air Terjun Coban Rondo',
                rating: 4.5,
                ulasan: '100 ulasan',
                alamat: 'Sebaluh, Jl. Coban Rondo, Pandesari, Kec. Pujon, Kabupaten Malang, Jawa Timur 65391',
                htm: 'Rp. 20.000 - Rp. 30.000',
                jam: '08.00 - 16.00',
                deskripsi: 'Air terjun indah yang terletak di tengah hutan, dengan fasilitas camping dan wahana permainan.',
                gambar: './images/Air-Terjun-Coban-Rondo.jpg',
                maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.0996671106777!2d112.4742487738071!3d-7.884640478422174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7887009890ac2f%3A0x9f46ac987d3e2274!2sCoban%20Rondo%20Waterfall%20Pujon!5e0!3m2!1sen!2sid!4v1718647392628!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            'batu-flower-garden': {
                nama: 'Batu Flower Garden',
                rating: 4.5,
                ulasan: '100 ulasan',
                alamat: 'Unnamed Road, Oro-Oro Ombo, Kec. Batu, Kota Batu, Jawa Timur 65316',
                htm: 'Rp. 25.000',
                jam: '08.00 - 17.00',
                deskripsi: 'Taman bunga yang menampilkan berbagai jenis bunga dengan latar belakang pegunungan yang indah.',
                gambar: './images/batu-flower-garden.jpg',
                maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.8399059253084!2d112.5162167738074!3d-7.911786978745035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7887c7064f9d29%3A0x8ffd331e7e82a198!2sBatu%20Flower%20Garden%20(wisata)!5e0!3m2!1sen!2sid!4v1718647471665!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
                'coban-rais': {
                    nama: 'Coban Rais',
                    rating: 4.5,
                    ulasan: '100 ulasan',
                    alamat: 'Kota Batu',
                    htm: 'Rp. 10.000',
                    jam: '07.00 - 15.00',
                    deskripsi: 'Air terjun berbatu di jurang dengan pepohonan, diakses via pendakian singkat ke jalan setapak di hutan.'
                },
                'paralayang': {
                    nama: 'Paralayang',
                    rating: 4.5,
                    ulasan: '100 ulasan',
                    alamat: 'Kota Batu',
                    htm: 'Rp. 25.000',
                    jam: 'Buka 24 jam',
                    deskripsi: 'Titik pengamatan di puncak bukit dengan panorama pegunungan & kota, tempat landasan peluncuran paralayang.'
                },
                'milenial-glow-garden': {
                    nama: 'Milenial Glow Garden',
                    rating: 4.5,
                    ulasan: '100 ulasan',
                    alamat: 'Kota Batu',
                    htm: 'Rp. 90.000 - Rp. 110.000',
                    jam: '08.30 - 16.30',
                    deskripsi: '-'
                },
                'dino-mall': {
                    nama: 'Dino Mall',
                    rating: 4.8,
                    ulasan: '200 ulasan',
                    alamat: 'Jl. Ir. Soekarno No.144, Beji, Kec. Junrejo, Kota Batu, Jawa Timur 65236',
                    htm: 'Rp. 50.000 - Rp. 75.000',
                    jam: '10.00 - 20.00',
                    deskripsi: 'Pusat perbelanjaan bertema dinosaurus dengan berbagai toko, restoran, dan wahana permainan.',
                    gambar: './images/dino-mall.jpeg',
                    maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.980319583296!2d112.5509186738072!3d-7.897124478570483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e788117372d8a3f%3A0x4b0b29bbdf58794f!2sDino%20Mall%20Jawa%20Timur%20Park%203!5e0!3m2!1sen!2sid!4v1718647523148!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
                },
                'florawisata-san-terra': {
                    nama: 'Florawisata San Terra',
                    rating: 4.3,
                    ulasan: '150 ulasan',
                    alamat: 'Jalan, Jurangrejo, Pandesari, Kec. Pujon, Kabupaten Malang, Jawa Timur 65391',
                    htm: 'Rp. 30.000',
                    jam: '08.00 - 17.00',
                    deskripsi: 'Florawisata San Terra adalah taman wisata yang terkenal dengan koleksi bunga berwarna-warni dan spot foto yang instagramable. Pengunjung dapat menikmati berjalan-jalan santai sambil menikmati keindahan bunga dan berfoto di berbagai sudut taman.',
                    gambar: './images/Florawisata-San-Terra.jpg',
                    maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.3877202331823!2d112.4854919!3d-7.854428300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78876ffdc1c6f5%3A0x700544497a18f08f!2sFlorawisata%20Santerra%20De%20Laponte!5e0!3m2!1sen!2sid!4v1718647225459!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
                },
                'hill-house': {
                nama: 'Hill House',
                rating: 4.5,
                ulasan: '195 ulasan',
                alamat: 'Jl. Mawar No.13, Songgokerto, Kec. Batu, Kota Batu, Jawa Timur 65312',
                htm: 'Rp. 100.000 - Rp. 150.000',
                jam: '07.00 - 22.00',
                deskripsi: 'Restoran dan cafe dengan pemandangan pegunungan yang indah, menawarkan berbagai menu makanan dan minuman.',
                gambar: './images/hill-house.jpg',
                maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.2550798680777!2d112.50279967380675!3d-7.8683544782290555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78879f2323ec1b%3A0x331d78a9fa553fc5!2sHill%20House!5e0!3m2!1sen!2sid!4v1718647558315!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
                'pantai-bajulmati': {
                nama: 'Pantai Bajulmati',
                rating: 4.4,
                ulasan: '782 ulasan',
                alamat: 'Umbulrejo, Gajahrejo, Gedangan, Malang Regency, East Java',
                htm: 'Rp. 10.000',
                jam: '08.00 - 17.00',
                deskripsi: 'Pantai yang indah dengan pemandangan alam yang menakjubkan, serta ombak besar yang cocok untuk berselancar.',
                gambar: './images/Pantai-Bajulmati.jpeg',
                maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15786.561832061892!2d112.63136692888388!3d-8.436922890001146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd601c73c7f79d9%3A0x8c0c5a27414c17b7!2sPantai%20Bajulmati!5e0!3m2!1sen!2sid!4v1718647772782!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
            'pantai-parang-dowo': {
                nama: 'Pantai Parang Dowo',
                rating: 4.5,
                ulasan: '1039 ulasan',
                alamat: 'Hutan, Gajahrejo, Gedangan, Malang Regency, East Java 65178',
                htm: 'Rp. 5.000',
                jam: '08.00 - 17.00',
                deskripsi: 'Pantai dengan batu karang yang unik dan pemandangan matahari terbenam yang menakjubkan.',
                gambar: './images/Pantai-Parang-Dowo.jpg',
                maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15786.911565955137!2d112.61506022888129!3d-8.428360889663306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd601e131409ec5%3A0xaebb60b94e96ddb6!2sPantai%20Parang%20Dowo!5e0!3m2!1sen!2sid!4v1718647821464!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
            },
        };

        // Ambil data deskripsi berdasarkan parameter wisata
        const selectedWisata = deskripsiWisata[wisataParam];

        if (selectedWisata) {
            // Buat elemen HTML untuk menampilkan deskripsi
            const content = `
            <div class="img-detail-container">
                <img class="img-detail" src="${selectedWisata.gambar}" alt="${selectedWisata.nama}">
                <div class="img-detail-text">
                    <h3>${selectedWisata.nama}</h3>
                    <p><strong>Rating:</strong> ${selectedWisata.rating} | ${selectedWisata.ulasan}</p>
                    <p><strong>HTM:</strong> ${selectedWisata.htm}</p>
                    <p><strong>Jam Operasional:</strong> ${selectedWisata.jam}</p>
                    <h5><strong>Deskripsi:</strong> ${selectedWisata.deskripsi}</h5>
                </div>
            </div>

            <div class="map">
                    <h4>LOKASI</h4>
            </div>

            <div class="map-container">
                <div class="map-content">
                    <div class="map-alamat">
                        <p><strong>Alamat</strong></p>
                        ${selectedWisata.alamat}
                    </div>
                    <div class="map-lokasi">
                        ${selectedWisata.maps}
                    </div>
                </div>
            </div>

            `;

            // Masukkan konten ke dalam #wisata-content
            wisataContent.innerHTML = content;
        } else {
            // Tampilkan pesan jika wisata tidak ditemukan
            wisataContent.innerHTML = '<p>Informasi untuk wisata ini tidak tersedia.</p>';
        }
    } else {
        // Tampilkan pesan jika parameter wisata tidak ditemukan
        console.error('Parameter wisata tidak ditemukan dalam URL.');
    }
});
