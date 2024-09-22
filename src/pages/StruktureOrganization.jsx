
const StrukturOrganisasi = () => {
    return (
        <div className="flex flex-col items-center px-2 sm:px-4 pt-28">
            <h1 className="font-bold mb-10 rounded-lg dark:text-black">Struktur Organisasi Kelurahan Sitemu</h1>
            {/* Kepala Desa */}
            <div className="flex flex-col items-center mb-10">
                <div className="w-24 h-24 rounded-full bg-gray-400 mb-2"></div> {/* Foto Profil */}
                <h2 className="font-bold">Kepala Desa</h2>
                <p className="text-sm">Nama Kepala Desa</p>
            </div>

            {/* Garis Vertikal */}
            <div className="border-l-2 border-gray-500 h-20"></div>

            {/* Struktur Bawah: 3 Kolom */}
            <div className="flex justify-between w-full max-w-4xl my-10 ">
                {/* Kiri */}
                <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-gray-400 mb-2"></div> {/* Foto Profil */}
                    <h3 className="font-bold">Jabatan 1</h3>
                    <p className="text-sm">Nama Orang 1</p>
                </div>
                {/* Tengah */}
                <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-gray-400 mb-2"></div> {/* Foto Profil */}
                    <h3 className="font-bold">Jabatan 2</h3>
                    <p className="text-sm">Nama Orang 2</p>
                </div>

                {/* Kanan */}
                <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-gray-400 mb-2"></div> {/* Foto Profil */}
                    <h3 className="font-bold">Jabatan 3</h3>
                    <p className="text-sm">Nama Orang 3</p>
                </div>
            </div>
            {/*center */}
            <div className="border-l-2 border-gray-500 h-20"></div>
            <div className="flex justify-between w-full max-w-4xl my-10 ">
                {/* Kiri */}
                <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-gray-400 mb-2"></div> {/* Foto Profil */}
                    <h3 className="font-bold">Jabatan 1</h3>
                    <p className="text-sm">Nama Orang 1</p>
                </div>
                {/* Tengah */}
                <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-gray-400 mb-2"></div> {/* Foto Profil */}
                    <h3 className="font-bold">Jabatan 2</h3>
                    <p className="text-sm">Nama Orang 2</p>
                </div>

                {/* Kanan */}
                <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-gray-400 mb-2"></div> {/* Foto Profil */}
                    <h3 className="font-bold">Jabatan 3</h3>
                    <p className="text-sm">Nama Orang 3</p>
                </div>
            </div>
            {/*bottom */}
            <div className="border-l-2 border-gray-500 h-20"></div>
            <div className="flex justify-between w-full max-w-4xl my-10">
                {/* Kiri */}
                <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-gray-400 mb-2"></div> {/* Foto Profil */}
                    <h3 className="font-bold">Jabatan 1</h3>
                    <p className="text-sm">Nama Orang 1</p>
                </div>
                {/* Tengah */}
                <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-gray-400 mb-2"></div> {/* Foto Profil */}
                    <h3 className="font-bold">Jabatan 2</h3>
                    <p className="text-sm">Nama Orang 2</p>
                </div>

                {/* Kanan */}
                <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-gray-400 mb-2"></div> {/* Foto Profil */}
                    <h3 className="font-bold">Jabatan 3</h3>
                    <p className="text-sm">Nama Orang 3</p>
                </div>
            </div>
            {/*bottom */}
            <div className="border-l-2 border-gray-500 h-20"></div>
            <div className="flex justify-between w-full max-w-4xl my-10">
                {/* Kiri */}
                <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-gray-400 mb-2"></div> {/* Foto Profil */}
                    <h3 className="font-bold">Jabatan 1</h3>
                    <p className="text-sm">Nama Orang 1</p>
                </div>
            <div className="border-b-2 mb-20 sm:mb-24 border-gray-500 w-44 sm:w-96"></div>
                {/* Kanan */}
                <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-gray-400 mb-2"></div> {/* Foto Profil */}
                    <h3 className="font-bold">Jabatan 3</h3>
                    <p className="text-sm">Nama Orang 3</p>
                </div>
            </div>
        </div>
    );
};

export default StrukturOrganisasi;
