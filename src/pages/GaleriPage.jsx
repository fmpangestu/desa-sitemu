import { useState } from 'react';

const GaleriPage = () => {
    const [fotoKegiatan] = useState([
        { id: 1, judul: 'Foto Kegiatan 1', foto: 'https://picsum.photos/200/300', kategori: 'Posyandu' },
        { id: 2, judul: 'Foto Kegiatan 2', foto: 'https://picsum.photos/200/301', kategori: 'Posyandu' },
        { id: 3, judul: 'Foto Kegiatan 3', foto: 'https://picsum.photos/200/302', kategori: 'Posyandu' },
        { id: 4, judul: 'Foto Kegiatan 4', foto: 'https://picsum.photos/200/303', kategori: 'PKK' },
        { id: 5, judul: 'Foto Kegiatan 5', foto: 'https://picsum.photos/200/304', kategori: 'PKK' },
        { id: 6, judul: 'Foto Kegiatan 6', foto: 'https://picsum.photos/200/305', kategori: 'PKK' },
        { id: 7, judul: 'Foto Kegiatan 7', foto: 'https://picsum.photos/200/306', kategori: 'PKK' },
        { id: 8, judul: 'Hadiah Tercepat Pelunasan PBB P2 KECAMATAN TAMAN', foto: '/src/assets/berita/prestasi/WhatsApp Image 2024-09-24 at 6.29.35 PM.jpeg', kategori: 'Prestasi' },
        { id: 9, judul: 'Tercepat Pertama KONTRIBUSI PBB DESA/KELURAHAN', foto: '/src/assets/berita/prestasi/WhatsApp Image 2024-09-24 at 6.30.18 PM.jpeg', kategori: 'Prestasi' },
        { id: 10, judul: 'Foto Kegiatan 10', foto: 'https://picsum.photos/200/309', kategori: 'Posyandu' },
        { id: 11, judul: 'Foto Kegiatan 11', foto: 'https://picsum.photos/200/310', kategori: 'PKK' },
        { id: 12, judul: 'Foto Kegiatan 12', foto: 'https://picsum.photos/200/311', kategori: 'PKK' },
        { id: 13, judul: 'Hadiah Tercepatan Pertama Pelunasan PBB KECAMATAN', foto: '/src/assets/berita/prestasi/WhatsApp Image 2024-09-24 at 6.30.47 PM.jpeg', kategori: 'Prestasi' },
    ]);

    const [kategori, setKategori] = useState('Posyandu');
    const [selectedImage, setSelectedImage] = useState(null);

    const fotoKegiatanFiltered = fotoKegiatan.filter(foto => foto.kategori === kategori);

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
                {['Posyandu', 'PKK', 'Prestasi'].map(kat => (
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
            <div className="sm:flex sm:gap-6">
                {fotoKegiatanFiltered.map(foto => (
                    <div key={foto.id} className='justify-center items-center' data-aos="fade-up">
                        <h2 className='sm:hidden text-lg font-semibold italic mt-10 '>• {foto.judul}</h2>
                        <img 
                            src={foto.foto} 
                            alt={foto.judul} 
                            className='rounded-lg w-full cursor-pointer' 
                            onClick={() => handleImageClick(foto)} 
                        />
                        <h2 className='hidden sm:block text-lg font-semibold italic mb-10'>{foto.judul}</h2>
                    </div>
                ))}
            </div>

            {/* Modal for displaying the selected image */}
            {selectedImage && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75" data-aos="fade-in">
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