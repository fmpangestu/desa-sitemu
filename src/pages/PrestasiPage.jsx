const PrestasiPage = () => {
    // Data prestasi yang diorganisasikan berdasarkan tahun
    const prestasiData = [
        {
            year: 2024,
            achievements: [
                {
                    title: 'Juara 1',
                    description: 'Sepakbola Karang Taruna',
                },
            ],
        },
        {
            year: 2022,
            achievements: [
                {
                    title: 'Juara 1',
                    description: 'Kader Kesehatan Lomba Jambore Tingkat Puskesmas',
                },
                {
                    title: 'Juara 1',
                    description: 'Duta Genre',
                },
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
            <h1 className="text-3xl font-bold text-center mb-8">Daftar Prestasi</h1>
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
                                <tr key={`${index}-${idx}`}>
                                    <td className="border-b px-4 py-2">{data.year}</td>
                                    <td className="border-b px-4 py-2">🏆{achievement.title}</td>
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
