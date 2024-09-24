const PrestasiPage = () => {
    // Data prestasi yang diorganisasikan berdasarkan tahun
    const prestasiData = [
        {
            year: 1981,
            achievements: [
                {
                    title: 'Juara 1',
                    description: "GERAK JALAN PUTRI HUT KOPRI KE 10",
                },
            ],
        },
        {
            year: 1992,
            achievements: [
                {
                    title: 'Juara 1',
                    description: "LOMBA KELOMPOK TANI TERNAK ITIK",
                },
            ],
        },
        {
            year: 1995,
            achievements: [
                {
                    title: 'Juara 3',
                    description: "LOMBA ADMINISTRASI DESA TINGKAT KABUPATEN PEMALANG",
                },
            ],
        },
        {
            year: 1996,
            achievements: [
                {
                    title: 'Juara 2',
                    description: "PERLOMBAAN DESA TINGKAT KABUPATEN PEMALANG",
                },
            ],
        },
        {
            year: 2006,
            achievements: [
                {
                    title: 'Juara 3',
                    description: "Tournament Sepak Bola 'SITEMU CUP' dalam rangka HUT RI KE-61",
                },
            ],
        },
        {
            year: 2020,
            achievements: [
                {
                    title: 'Juara 3',
                    description: 'KEJURUAN BOLA VOLI PUTRI DALAM RANGKA HARI JADI KE 445 KAB.PEMALANG',
                }
            ],
        },
        {
            year: 2018,
            achievements: [
                {
                    title: 'Juara 2',
                    description: 'Lomba Kelurahan Tingkat Kecamatan',
                },
            ],
        },
    ];

    return (
        <div className="bg-base-200 px-4 sm:px-32 py-16">
            <h1 className="text-3xl font-bold text-center mb-8" data-aos="fade-down">Daftar Prestasi</h1>
            <div className="overflow-x-auto">
                <table className="table-auto w-full text-left border-collapse">
                    <thead>
                        <tr>
                            <th className="border-b px-4 py-2">Tahun</th>
                            <th className="border-b px-4 py-2">Prestasi</th>
                            <th className="border-b px-4 py-2">Deskripsi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {prestasiData.map((data, index) => (
                            data.achievements.map((achievement, idx) => (
                                <tr key={`${index}-${idx}`} data-aos="fade-up">
                                    <td className="border-b px-4 py-2">{data.year}</td>
                                    <td className="border-b px-4 py-2 text-[13px]">🏆{achievement.title}</td>
                                    <td className="border-b px-4 py-2">{achievement.description}</td>
                                </tr>
                            ))
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PrestasiPage;
