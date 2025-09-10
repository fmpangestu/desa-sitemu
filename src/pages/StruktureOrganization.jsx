/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const StrukturOrganisasi = () => {
  const [strukturData, setStrukturData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_PUBLIC_API_URL}/api/organisasi`
          // "/api/organisasi"
        );
        const result = await response.json();

        if (result.data && Array.isArray(result.data)) {
          // Format data sesuai kebutuhan komponen
          const formattedData = result.data.map((item) => ({
            id: item.id,
            img: item.image || "", // URL gambar dari API
            role: item.jabatan || "", // Jabatan/role
            name: item.nama, // Nama anggota
          }));
          setStrukturData(formattedData);
        } else {
          setError("Format data dari API tidak sesuai");
        }
      } catch (error) {
        console.error("Error fetching organization data:", error);
        setError("Gagal memuat data struktur organisasi");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Fungsi untuk menyusun data berdasarkan hierarki
  //   const organizeByHierarchy = (data) => {
  //     if (!data.length) return { leadership: [], staff: [] };

  //     // Daftar jabatan pimpinan (sesuaikan dengan kebutuhan)
  //     const leadershipRoles = ["kepala desa", "sekretaris desa"];

  //     const leadership = data.filter((person) =>
  //       leadershipRoles.some((role) => person.role.toLowerCase().includes(role))
  //     );

  //     const staff = data.filter(
  //       (person) =>
  //         !leadershipRoles.some((role) =>
  //           person.role.toLowerCase().includes(role)
  //         )
  //     );

  //     return { leadership, staff };
  //   };

  // Handling loading dan error tetap sama
  if (loading) {
    return (
      <div className="flex flex-col items-center px-2 pb-10 pt-28">
        <h1 className="mb-10 font-bold uppercase rounded-lg dark:text-black">
          Struktur Organisasi Kelurahan Sitemu
        </h1>
        <p className="text-center">Memuat data struktur organisasi...</p>
      </div>
    );
  }

  if (error || strukturData.length === 0) {
    return (
      <div className="flex flex-col items-center px-2 pb-10 pt-28">
        <h1 className="mb-10 font-bold uppercase rounded-lg dark:text-black">
          Struktur Organisasi Kelurahan Sitemu
        </h1>
        <p className="text-center text-red-500">
          {error || "Data struktur organisasi tidak tersedia"}
        </p>
      </div>
    );
  }

  //   const { leadership, staff } = organizeByHierarchy(strukturData);

  return (
    <div className="flex flex-col items-center px-2 pb-10 pt-28">
      <h1 className="mb-10 text-2xl font-bold uppercase rounded-lg">
        Struktur Organisasi Kelurahan Sitemu
      </h1>

      {/* Tampilan bagan organisasi */}
      <div className="w-full max-w-6xl">
        {/* Kepala Desa di posisi paling atas */}
        <div className="flex justify-center mb-8">
          {strukturData
            .filter((person) =>
              person.role.toLowerCase().includes("kepala desa")
            )
            .map((person, index) => (
              <OrgCard
                key={person.id || index}
                person={person}
                highlighted={true}
              />
            ))}
        </div>

        {/* Sekretaris Desa */}
        <div className="relative flex justify-center mb-8">
          <div className="absolute top-[-30px] left-1/2 w-px h-8 bg-gray-400"></div>
          {strukturData
            .filter((person) =>
              person.role.toLowerCase().includes("sekretaris")
            )
            .map((person, index) => (
              <OrgCard key={person.id || index} person={person} />
            ))}
        </div>

        {/* Garis penghubung vertikal */}
        <div className="flex justify-center">
          <div className="w-px h-8 bg-gray-400"></div>
        </div>

        {/* Posisi lainnya dalam grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {strukturData
            .filter(
              (person) =>
                !person.role.toLowerCase().includes("kepala desa") &&
                !person.role.toLowerCase().includes("sekretaris")
            )
            .map((person, index) => (
              <div key={person.id || index} className="flex justify-center">
                <OrgCard person={person} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

// Komponen card untuk organisasi
const OrgCard = ({ person, highlighted = false }) => {
  return (
    <div
      className={`w-64 bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:-translate-y-1 hover:shadow-xl ${
        highlighted ? "ring-2 ring-red-500" : ""
      }`}
      data-aos="fade-up"
    >
      <div
        className={`h-2 ${highlighted ? "bg-red-600" : "bg-blue-500"}`}
      ></div>
      <div className="flex justify-center p-1">
        <img
          src={person.img}
          alt={person.name}
          className="object-cover w-32 h-40 rounded"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/150x200?text=No+Image";
          }}
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-bold text-gray-800">{person.role}</h3>
        <p className="mt-2 italic text-gray-600 text-md">{person.name}</p>
      </div>
    </div>
  );
};

export default StrukturOrganisasi;
