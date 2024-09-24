import haloBupatiImage from '../assets/halloBupati/LAYANAN-ASPIRASI-PUBLIK-PEMERINTAH-KABUPATEN-PEMALANG-HALO-BUPATI-NEWESTZ-723x1024.png'; // Ganti dengan path gambar Anda

export default function HaloBupati() {
    return (
        <div className="bg-base-200 sm:px-32 pt-20 sm:pt-28">
            <div className="flex flex-col md:flex-row md:justify-between">
                {/* Konten Utama Kiri */}
                <div className="md:w-1/2 p-4" data-aos="fade-right">
                    <h1 className="text-2xl font-bold text-sky-500 mb-4">Halo Bupati</h1>
                    <p className="mb-4">
                        Selamat datang di halaman Halo Bupati Kabupaten Pemalang. Setiap warga berhak untuk menyuarakan aspirasi atau mengajukan pengaduan, dan pemerintah daerah bertekad dan berkomitmen untuk menyediakan jalur pengaduan yang mudah diakses dan efisien bagi masyarakat. Anda dapat mengirim pesan atau SMS ke nomor 1708 dengan format penulisan “halobupati (spasi) isikan aduan” untuk menyampaikan aspirasi atau pengaduan. Kami juga tersedia di Twitter dengan akun (X) Pemkabpemalang, sertakan tagar #halobupati.
                    </p>
                    <p>
                        Selain itu, Anda dapat mengunjungi website Pemerintah Kabupaten Pemalang – LAPOR! dengan menekan gambar Halo Bupati di bawah ini, atau mengunjungi halaman Layanan untuk mengajukan pengaduan atau aspirasi yang akan ditinjau secara seksama.
                    </p>
                </div>

                {/* Gambar Kanan */}
                <div className="md:w-1/2 p-4 flex justify-center items-center" data-aos="fade-left">
                    <img src={haloBupatiImage} alt="Halo Bupati" className="rounded shadow-lg w-full max-w-xs" />
                </div>
            </div>
        </div>
    );
}
