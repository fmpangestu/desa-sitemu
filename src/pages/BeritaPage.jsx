import { useState } from 'react';

const BeritaPage = () => {
    const [selectedArticle, setSelectedArticle] = useState(null);

    const articles = [
        {
            id: 1,
            title: 'Mahasiswa Universitas Alma Ata mengikuti Pelatihan Pembuatan Hantaran Pengantin dan Buket',
            date: '9 Agustus 2024',
            content: 'Dalam rangka memberdayakan masyarakat dan generasi muda, Kelurahan Beji mengadakan pelatihan pembuatan hantaran pengantin dan buket bunga yang diikuti oleh mahasiswa Universitas Alma Ata. Pelatihan yang berlangsung selama dua hari ini bertujuan untuk mengajarkan keterampilan kreatif yang dapat dijadikan peluang usaha di masa depan.',
        },
        {
            id: 2,
            title: 'Kedatangan Mahasiswa KKN-T Universitas Alma Ata Yogyakarta di Kelurahan Beji Pemalang',
            date: '1 Agustus 2024',
            content: 'Pada hari kamis, 1 Agustus 2024, mahasiswa Universitas Alma Ata melaksanakan Kuliah Kerja Nyata (KKN) di kelurahan Beji. program KKN ini diawali dengan transit di Balai Kota Pemalang, di mana para mahasiswa Universitas Alma Ata diterima dengan hangat oleh pihak pemerintah kota Pemalang dan kelurahan Beji.',
        },
        {
            id: 3,
            title: 'Karang Taruna News Gembesh Beji: Igniting a New Spirit',
            date: '13 Juni 2024',
            content: 'Turnamen Sepak Bola antar Lingkungan se-kelurahan Beji, Kecamatan Taman, Pemalang mulai digelar. Kompetisi bergengsi tersebut digagas oleh Karangtaruna, untuk memperebutkan Piala antar Club Final antara Gom I melawan Gom VI.',
        },
    ];

    const handleArticleClick = (article) => {
        setSelectedArticle(article);
    };

    const handleCloseDetail = () => {
        setSelectedArticle(null);
    };

    return (
        <div className="px-4 lg:px-34 pt-24">
            <p className="text-sm text-center">Menjelajah Kategori</p>
            <h2 className="text-xl font-bold text-center">Berita</h2>
            <p className='pt-10 px-4'>Menampilkan {articles.length} Hasil</p>

            <div className="md:flex gap-5 py-10" data-aos="fade-right">
                {articles.map(article => (
                    <div key={article.id} className="p-4 rounded-lg shadow hover:shadow-xl duration-300">
                        <img src="/src/assets/halloBupati/LAYANAN-ASPIRASI-PUBLIK-PEMERINTAH-KABUPATEN-PEMALANG-HALO-BUPATI-NEWESTZ-723x1024.png" className='h-[350px] w-full rounded-lg' alt="" />
                        <h3 className="text-xl font-semibold">{article.title}</h3>
                        <p className="text-gray-500">{article.date}</p>
                        <p>{article.content.substring(0, 100)}...</p>
                        <button
                            className="text-blue-500 mt-2"
                            onClick={() => handleArticleClick(article)}
                        >
                            Lanjut Baca Selengkapnya
                        </button>
                    </div>
                ))}
            </div>

            {/* Detail Modal */}
            {selectedArticle && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
                    <div className="bg-white p-6 rounded-lg w-11/12 max-w-lg">
                        <h2 className="text-2xl font-bold">{selectedArticle.title}</h2>
                        <p className="text-gray-500">{selectedArticle.date}</p>
                        <p className="mt-4">{selectedArticle.content}</p>
                        <button className="mt-4 text-red-500" onClick={handleCloseDetail}>
                            Tutup
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BeritaPage;
