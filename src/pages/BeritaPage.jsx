import { useNavigate } from "react-router-dom";
// import kegiatan1 from "../assets/berita/berita 1/MALAM PUNCAK PAGGELARAN WAYANG.jpg";
// import kegiatan2 from "../assets/berita/berita 2/12.jpeg";
// import kegiatan3 from "../assets/berita/berita 3/1.jpeg";
import { useEffect, useState } from "react";

const BeritaPage = () => {
  const navigate = useNavigate();
  const [berita, setBerita] = useState([]);
  const [loading, setLoading] = useState(true);

  // Data statis untuk fallback

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_PUBLIC_API_URL}/api/berita`
          //   "/api/berita"
        );
        const data = await response.json();

        if (data.data && Array.isArray(data.data)) {
          const formattedData = data.data.map((item) => ({
            id: item.id,
            image: item.image,
            title: item.titleBerita,
            date: item.tanggal,
            content: item.deskripsi,
          }));
          setBerita(formattedData);
        } else {
          setBerita("sorry data tidak tersedia");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setBerita("sorry data tidak tersedia");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleArticleClick = (id) => {
    navigate(`/berita/${id}`);
  };

  if (loading) {
    return (
      <div className="px-4 pt-24 text-center lg:px-40">Loading articles...</div>
    );
  }

  return (
    <div className="px-4 pt-24 lg:px-40">
      <p className="text-sm text-center">Menjelajah Kategori</p>
      <h2 className="text-xl font-bold text-center">Berita</h2>
      <p className="px-4 pt-10">Menampilkan {berita.length} Hasil</p>
      <div className="gap-5 md:flex " data-aos="fade-right">
        {/* PENTING: Gunakan berita bukan articles */}
        {berita.map((article) => (
          <div
            key={article.id}
            className="w-full p-4 my-10 transition duration-500 rounded-lg shadow hover:shadow-xl"
            data-aos="fade-right"
          >
            <img
              src={article.image}
              alt=""
              className="w-full h-[300px] object-cover rounded-lg"
            />
            <p className="font-semibold text-md">{article.title}</p>
            <p className="text-gray-500">{article.date}</p>
            <p>{article.content.substring(0, 100)}...</p>
            <button
              className="mt-2 text-blue-500"
              onClick={() => handleArticleClick(article.id)}
            >
              Lanjut Baca Selengkapnya
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeritaPage;
