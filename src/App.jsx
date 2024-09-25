// App.jsx
import { Route, Routes, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import ContentPage from './pages/ContentPage';
import Kontak from './pages/Kontak';
import VisidanMisi from './pages/VisidanMisiPage';
import PrestasiPage from './pages/PrestasiPage';
import HalloBupatiPage from './pages/HalloBupatiPage';
import TupoksiPage from './pages/TupoksiPage';
import PelayananAdministrasiPage from './pages/PelayananAdministrasiPage';
import LoadingSpinner from './components/LoadingSpinner';
import StrukturOrganisasi from './pages/StruktureOrganization';
import ProfilDesaPage from './pages/ProfilDesaPage';
import BadanPermusyawaratanDesaPage from './pages/BadanPermusyawaratanDesaPage';
import LPMPage from './pages/LPMPage';
import LPKKPage from './pages/LPKKPage';
import KRNGPage from './pages/KRNGPage';
import POSYANDUPage from './pages/POSYANDUPage';
import KIMPage from './pages/KIMPage';
import POKDARWISPage from './pages/POKDARWISPage';
import BumdesPage from './pages/BUMDESPage';
import Footer from './components/Footer';
import Totop from './components/ToTop';
import GaleriPage from './pages/GaleriPage';
import BeritaPage from './pages/BeritaPage';
import BeritaDetailPage from './pages/BeritaDetailPage';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation(); // Monitor perubahan URL

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    setLoading(true); // Set loading state true saat URL berubah
    const timer = setTimeout(() => {
      setLoading(false); // Selesai loading setelah komponen halaman dimuat
    }, 500); // Durasi animasi loading

    return () => clearTimeout(timer); // Cleanup timeout saat URL berubah lagi
  }, [location]); // Setiap kali URL berubah, jalankan useEffect

  return (
    <>
      <Header /> {/* Header tetap muncul di setiap halaman */}
      {loading ? ( // Jika loading true, tampilkan spinner
        <LoadingSpinner />
      ) : ( // Jika loading selesai, tampilkan konten halaman
        <div className='overflow-x-hidden'>
          <Routes>
            <Route path="/" element={<ContentPage />} />
            <Route path="/kontak" element={<Kontak />} />
            <Route path="/galeri" element={<GaleriPage />} />
            <Route path="/visi-misi" element={<VisidanMisi />} />
            <Route path="/profil-kelurahan" element={<ProfilDesaPage />} />
            <Route path="/struktur-organisasi" element={<StrukturOrganisasi />} />
            <Route path="/prestasi" element={<PrestasiPage />} />
            <Route path="/tupoksi" element={<TupoksiPage />} />
            <Route path="/layanan-administrasi" element={<PelayananAdministrasiPage />} />
            <Route path="/hallo-bupati" element={<HalloBupatiPage />} />
            <Route path="/badan-permusyawaratan-desa" element={<BadanPermusyawaratanDesaPage />} />
            <Route path="/lembaga-pemberdayaan-masyarakat" element={<LPMPage />} />
            <Route path="/pembinaan-kesejahteraan-keluarga" element={<LPKKPage />} />
            <Route path="/karang-taruna" element={<KRNGPage />} />
            <Route path="/posyandu" element={<POSYANDUPage />} />
            <Route path="/kelompok-informasi-masyarakat" element={<KIMPage />} />
            <Route path="/kelompok-swadaya-wisata" element={<POKDARWISPage />} />
            <Route path="/badan-usaha-milik-desa" element={<BumdesPage />} />
            <Route path="/berita" element={<BeritaPage />} />
            <Route path="/berita/:id" element={<BeritaDetailPage />} />
          </Routes>
          <Footer />
        </div>
      )}
      <Totop /> {/* Tombol kembali ke atas */}
    </>
  );
}

export default App;
