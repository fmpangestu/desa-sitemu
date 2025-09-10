/* eslint-disable react-hooks/exhaustive-deps */
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
// import kegiatan1 from "../assets/berita/berita 1/MALAM PUNCAK PAGGELARAN WAYANG.jpg";
// import kegiatan2 from "../assets/berita/berita 2/12.jpeg";
// import kegiatan3 from "../assets/berita/berita 3/1.jpeg";

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  //   // Data statis sebagai fallback
  const staticArticles = [];

  useEffect(() => {
    const fetchArticleDetail = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_PUBLIC_API_URL}/api/berita`
          // "/api/berita"
        );
        const result = await response.json();

        if (result.data && Array.isArray(result.data)) {
          // Cari artikel yang sesuai dengan ID dari parameter URL
          const foundArticle = result.data.find(
            (item) => item.id === parseInt(id)
          );

          if (foundArticle) {
            // Format data artikel
            setArticle({
              id: foundArticle.id,
              image: foundArticle.image,
              title: foundArticle.titleBerita,
              date: foundArticle.tanggal,
              content: foundArticle.deskripsi,
            });
          } else {
            // Jika artikel tidak ditemukan dari API, coba cari dari data statis
            const staticArticle = staticArticles.find(
              (item) => item.id === parseInt(id)
            );
            if (staticArticle) {
              setArticle(staticArticle);
            }
          }
        } else {
          // Jika tidak ada data dari API, gunakan data statis
          const staticArticle = staticArticles.find(
            (item) => item.id === parseInt(id)
          );
          if (staticArticle) {
            setArticle(staticArticle);
          }
        }
      } catch (error) {
        console.error("Error fetching article details:", error);
        // Jika gagal mengambil dari API, gunakan data statis
        const staticArticle = staticArticles.find(
          (item) => item.id === parseInt(id)
        );
        if (staticArticle) {
          setArticle(staticArticle);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchArticleDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="px-4 pt-24 text-center lg:px-40">
        Loading article details...
      </div>
    );
  }

  if (!article) {
    return (
      <div className="px-4 pt-24 text-center lg:px-40">Article not found</div>
    );
  }

  return (
    <>
      <div className="flex flex-col w-full px-4 pt-24 lg:px-40">
        <h1 className="mb-8 text-3xl font-bold" data-aos="fade-down">
          {article.title}
        </h1>
        <p className="mb-4 text-gray-500" data-aos="fade-up">
          {article.date}
        </p>

        {/* Flex container for the image and content */}
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Left side: Image */}
          <aside className="w-full pt-2 lg:w-1/2" data-aos="fade-right">
            <img
              src={article.image}
              alt={article.title}
              className="object-cover w-full h-auto rounded-lg"
            />
          </aside>

          {/* Right side: Article details */}
          <aside className="w-full lg:w-1/2" data-aos="fade-left">
            <p className="leading-relaxed text-justify">{article.content}</p>
          </aside>
        </div>
        <button
          className="px-4 py-2 mt-5 font-bold text-white duration-500 rounded bg-sky-500 hover:scale-95"
          onClick={() => navigate("/berita")}
          data-aos="fade-up"
        >
          ← Kembali
        </button>
      </div>
    </>
  );
};

export default ArticleDetail;
