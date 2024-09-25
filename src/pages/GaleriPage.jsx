import { useState } from 'react';

const GaleriPage = () => {
    const [fotoKegiatan] = useState([
        { id: 1, judul: 'Kelas Ibu Balita', foto: '/src/assets/galeri/1.jpeg', kategori: ['Posyandu', 'KKNT-UAA'] },
        { id: 2, judul: 'Pemberian Makanan Tambahan dengan Ibu PKK', foto: '/src/assets/galeri/2.jpeg', kategori: ['PKK'] },
        { id: 3, judul: 'Pagelaran Wayang Golek', foto: '/src/assets/galeri/3.jpeg', kategori: ['PKK', 'KKNT-UAA'] },
        { id: 4, judul: 'Sosialisasi Pengembangan Digital UMKM DUSUN GUCI', foto: '/src/assets/galeri/4.jpeg', kategori: ['PKK', 'KKNT-UAA'] },
        { id: 5, judul: 'Bimbingan belajar anak SD', foto: '/src/assets/galeri/5.jpeg', kategori: ['KKNT-UAA'] },
        { id: 6, judul: 'Pemberian Makanan Tambahan dengan Ibu PKK', foto: '/src/assets/galeri/6.jpeg', kategori: ['KKNT-UAA', 'PKK'] },
        { id: 7, judul: 'Sosialisasi Pengembangan Digital UMKM DUSUN KARANG WULUH', foto: '/src/assets/galeri/7.jpeg', kategori: ['KKNT-UAA', 'PKK'] },
        { id: 8, judul: 'Hadiah Tercepat Pelunasan PBB P2 KECAMATAN TAMAN', foto: '/src/assets/berita/prestasi/WhatsApp Image 2024-09-24 at 6.29.35 PM.jpeg', kategori: ['Prestasi'] },
        { id: 9, judul: 'Tercepat Pertama KONTRIBUSI PBB DESA/KELURAHAN', foto: '/src/assets/berita/prestasi/WhatsApp Image 2024-09-24 at 6.30.18 PM.jpeg', kategori: ['Prestasi'] },
        { id: 10, judul: 'Stop Bullying', foto: '/src/assets/galeri/8.jpeg', kategori: ['Posyandu'] },
        { id: 11, judul: 'Sosialisasi Pengembangan Digital UMKM DUSUN SITEMU', foto: '/src/assets/galeri/9.jpeg', kategori: ['KKNT-UAA'] },
        { id: 12, judul: 'Kelas Ibu Balita', foto: '/src/assets/galeri/10.jpeg', kategori: ['Posyandu', 'PKK'] },
        { id: 13, judul: 'SENAM STUNTING', foto: '/src/assets/galeri/11.jpeg', kategori: ['KKNT-UAA', 'PKK'] },
        { id: 14, judul: 'PHBS Di Sekolah Dasar 02', foto: '/src/assets/galeri/12.jpeg', kategori: ['KKNT-UAA'] },
        { id: 15, judul: 'PHBS Di Sekolah Dasar 01', foto: '/src/assets/galeri/13.jpeg', kategori: ['KKNT-UAA'] },
        { id: 16, judul: 'POSYANDU DI DUSUN KARANG WULUH', foto: '/src/assets/galeri/14.jpeg', kategori: ['KKNT-UAA', 'PKK'] },
        { id: 17, judul: 'LOMBA 17 AGUSTUS DI DESA SITEMU', foto: '/src/assets/galeri/15.jpeg', kategori: ['KKNT-UAA', 'PKK'] },
        { id: 18, judul: 'JUARA 1 LOMBA 17 AGUSTUS BOLA IBU IBU ', foto: '/src/assets/galeri/16.jpeg', kategori: ['KKNT-UAA'] },
        { id: 19, judul: 'PENGECATAN GAPURA DI 4 DUSUN DESA SITEMU', foto: '/src/assets/galeri/17.jpeg', kategori: ['KKNT-UAA', 'PKK'] },
        { id: 20, judul: 'FOTO BERSAMA PERANGKAT DAN KADER PKK', foto: '/src/assets/galeri/18.jpeg', kategori: ['PKK', 'KKNT-UAA'] },
        { id: 21, judul: 'Hadiah Tercepatan Pertama Pelunasan PBB KECAMATAN', foto: '/src/assets/berita/prestasi/WhatsApp Image 2024-09-24 at 6.30.47 PM.jpeg', kategori: ['Prestasi'] },
    ]);
    

    const [kategori, setKategori] = useState('Posyandu');
    const [selectedImage, setSelectedImage] = useState(null);

    const fotoKegiatanFiltered = fotoKegiatan.filter(foto => foto.kategori.includes(kategori));

    const handleImageClick = (foto) => {
        setSelectedImage(foto);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

 return (
        <div className="container mx-auto px-4 lg:px-32 py-24">
            <h1 className="text-3xl font-bold mb-4" data-aos="fade-up">Galeri</h1>
            <div className="flex justify-center mb-4 gap-10 rounded-lg overflow-hidden">
                {['Posyandu', 'PKK', 'Prestasi','KKNT-UAA'].map(kat => (
                    <button
                        key={kat}
                        onClick={() => setKategori(kat)}
                        className={`hover:border-b-2 border-sky-500 !bg-transparent rounded-lg ${kategori === kat ? 'border-b-2 border-sky-500 font-bold' : ''}`}
                        data-aos="fade-right"
                    >
                        {kat}
                    </button>
                ))}
            </div>
            <div className="sm:grid grid-cols-4 sm:gap-6">
                {fotoKegiatanFiltered.map(foto => (
                    <div key={foto.id} className='justify-center items-center' data-aos="fade-up">
                        <h2 className='sm:hidden text-lg font-semibold italic mt-10 '>• {foto.judul}</h2>
                        <img 
                            src={foto.foto} 
                            alt={foto.judul} 
                            className='rounded-lg w-full h-[350px] object-cover sm:hover:scale-110 duration-300 cursor-pointer' 
                            onClick={() => handleImageClick(foto)} 
                        />
                        <h2 className='hidden sm:block text-lg font-semibold italic mb-10'>{foto.judul}</h2>
                    </div>
                ))}
            </div>

            {/* Modal for displaying the selected image */}
            {selectedImage && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-[99999]" data-aos="fade-in">
                    <div className="relative rounded-lg w-[800px] h-[400px] bg-transparent">
                        <img src={selectedImage.foto} alt={selectedImage.judul} className='bg-transparent rounded-2xl object-contain w-full h-full' />
                        <button 
                            className="absolute top-0 right-2 p-2 text-white"
                            onClick={handleCloseModal}
                        >
                            ✖
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GaleriPage;