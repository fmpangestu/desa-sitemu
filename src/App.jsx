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

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation(); // Monitor perubahan URL

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
        <Routes>
          <Route path="/" element={<ContentPage />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/visi-misi" element={<VisidanMisi />} />
          <Route path="/profil-kelurahan" element={<ProfilDesaPage />} />
          <Route path="/struktur-organisasi" element={<StrukturOrganisasi />} />
          <Route path="/prestasi" element={<PrestasiPage />} />
          <Route path="/tupoksi" element={<TupoksiPage />} />
          <Route path="/layanan-administrasi" element={<PelayananAdministrasiPage />} />
          <Route path="/hallo-bupati" element={<HalloBupatiPage />} />
          {/* Tambahkan route lainnya di sini */}
        </Routes>
      )}
    </>
  );
}

export default App;
