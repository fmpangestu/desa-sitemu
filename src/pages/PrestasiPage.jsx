import { useState, useEffect } from "react";

const PrestasiPage = () => {
  const [prestasiData, setPrestasiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrestasi = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_PUBLIC_API_URL}/api/prestasi`
          // "/api/prestasi"
        );
        const result = await response.json();

        if (result.data && Array.isArray(result.data)) {
          const formattedData = result.data
            .map((item) => ({
              id: item.id,
              year: new Date(item.tahun).getFullYear(),
              title: item.title,
              achievement: item.prestasi,
              description: item.deskripsi,
            }))
            .sort((a, b) => a.year - b.year); // Sortir dari tahun terlama

          setPrestasiData(formattedData);
        } else {
          setError("Format data tidak sesuai");
        }
      } catch (error) {
        console.error("Error fetching prestasi data:", error);
        setError("Gagal memuat data prestasi");
      } finally {
        setLoading(false);
      }
    };

    fetchPrestasi();
  }, []);

  // Fungsi untuk mendapatkan ikon sesuai peringkat
  const getTrophyIcon = (achievement) => {
    const rank = achievement.replace(/\D/g, "");

    switch (rank) {
      case "1":
        return "🏆";
      case "2":
        return "🥈";
      case "3":
        return "🥉";
      default:
        return "🏅";
    }
  };

  if (loading) {
    return (
      <div className="px-4 py-24 sm:px-32">
        <h1 className="mb-8 text-3xl font-bold text-center">Daftar Prestasi</h1>
        <p className="text-center">Memuat data prestasi...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="px-4 py-24 sm:px-32">
        <h1 className="mb-8 text-3xl font-bold text-center">Daftar Prestasi</h1>
        <p className="text-center text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="px-4 py-24 sm:px-32 dark:text-white">
      {/* Header dengan batas atas dan bawah */}
      <div className="py-2 mb-8 border-t-2 border-b-2 border-gray-800 dark:border-gray-300">
        <h1 className="text-3xl font-bold text-center" data-aos="fade-down">
          Daftar Prestasi
        </h1>
      </div>

      <div className="max-w-3xl mx-auto">
        {prestasiData.map((prestasi, index) => (
          <div
            key={prestasi.id}
            className="mb-6"
            data-aos="fade-up"
            data-aos-delay={index * 50}
          >
            <div className="overflow-hidden border rounded-md ">
              {/* Header dengan tahun dan prestasi */}
              <div className="flex items-center gap-4 p-3 ">
                <div className="px-4 py-1 font-semibold text-center text-blue-800 rounded-md ">
                  {prestasi.year}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl" aria-hidden="true">
                    {getTrophyIcon(prestasi.achievement)}
                  </span>
                  <span className="font-semibold">{prestasi.achievement}</span>
                </div>
              </div>

              {/* Deskripsi di bawah dengan background terang di mode terang dan gelap di mode gelap */}
              <div className="p-4 ">
                <p className="">{prestasi.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrestasiPage;
