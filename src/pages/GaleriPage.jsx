import { useState, useEffect } from "react";

const GaleriPage = () => {
  const [fotoKegiatan, setFotoKegiatan] = useState([]);
  const [loading, setLoading] = useState(true);
  const [kategori, setKategori] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGaleri = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_PUBLIC_API_URL}/api/galeri`
          // "/api/galeri"
        );
        const result = await response.json();

        if (result.data && Array.isArray(result.data)) {
          // Format data untuk memenuhi kebutuhan komponen
          const formattedData = result.data.map((item) => ({
            id: item.id,
            judul: item.titleImage,
            foto: item.image,
            tanggal: item.tanggal,
            kategori: item.typeGaleri.type, // Kategori dari API berupa string tunggal
          }));

          // Set data galeri
          setFotoKegiatan(formattedData);

          // Ekstrak kategori unik dari data
          const uniqueCategories = [
            ...new Set(result.data.map((item) => item.typeGaleri.type)),
          ];
          setCategories(uniqueCategories);

          // Set kategori default ke kategori pertama jika ada
          if (uniqueCategories.length > 0) {
            setKategori(uniqueCategories[0]);
          }
        } else {
          setError("Format data tidak sesuai");
        }
      } catch (error) {
        console.error("Error fetching gallery data:", error);
        setError("Gagal memuat data galeri");
      } finally {
        setLoading(false);
      }
    };

    fetchGaleri();
  }, []);

  // Filter berdasarkan kategori yang dipilih
  // Perhatikan: API menggunakan string kategori tunggal, bukan array
  const fotoKegiatanFiltered = kategori
    ? fotoKegiatan.filter((foto) => foto.kategori === kategori)
    : fotoKegiatan;

  const handleImageClick = (foto) => {
    setSelectedImage(foto);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  if (loading) {
    return (
      <div className="container px-4 py-24 mx-auto lg:px-32">
        <h1 className="mb-4 text-3xl font-bold">Galeri</h1>
        <p className="text-center">Memuat galeri...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container px-4 py-24 mx-auto lg:px-32">
        <h1 className="mb-4 text-3xl font-bold">Galeri</h1>
        <p className="text-center text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="container px-4 py-24 mx-auto lg:px-32">
      <h1 className="mb-4 text-3xl font-bold" data-aos="fade-up">
        Galeri
      </h1>
      <div className="flex justify-center gap-10 mb-4 overflow-hidden rounded-lg">
        {/* Tampilkan kategori dari data API */}
        {categories.map((kat) => (
          <button
            key={kat}
            onClick={() => setKategori(kat)}
            className={`hover:border-b-2 border-sky-500 !bg-transparent rounded-lg ${
              kategori === kat ? "border-b-2 border-sky-500 font-bold" : ""
            }`}
            data-aos="fade-right"
          >
            {kat}
          </button>
        ))}
      </div>
      <div className="grid-cols-4 sm:grid sm:gap-6">
        {fotoKegiatanFiltered.map((foto) => (
          <div
            key={foto.id}
            className="items-center justify-center"
            data-aos="fade-up"
          >
            <h2 className="mt-10 text-lg italic font-semibold sm:hidden ">
              • {foto.judul}
            </h2>
            <img
              src={foto.foto}
              alt={foto.judul}
              className="rounded-lg w-full h-[350px] object-cover sm:hover:scale-110 duration-300 cursor-pointer"
              onClick={() => handleImageClick(foto)}
            />
            <h2 className="hidden mb-10 text-lg italic font-semibold sm:block">
              {foto.judul}
            </h2>
          </div>
        ))}
      </div>

      {/* Modal for displaying the selected image */}
      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-[99999]"
          data-aos="fade-in"
        >
          <div className="relative rounded-lg w-[800px] h-[400px] bg-transparent">
            <img
              src={selectedImage.foto}
              alt={selectedImage.judul}
              className="object-contain w-full h-full bg-transparent rounded-2xl"
            />
            <button
              className="absolute top-0 p-2 text-white right-2"
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
