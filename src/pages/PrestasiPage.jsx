
const PrestasiPage = () => {
    // Data prestasi, diorganisasikan berdasarkan tahun
    const prestasiData = [
        {
            year: 2024,
            achievements: ['Juara 1 Sepakbola Karang Taruna'],
        },
        {
            year: 2022,
            achievements: [
                'Juara 1 Kader Kesehatan Lomba Jambore Tingkat Puskesmas',
                'Juara 1 Duta Genre',
            ],
        },
        {
            year: 2018,
            achievements: ['Juara 2 Lomba Kelurahan Tingkat Kecamatan'],
        },
    ];

    return (
        <div className=" bg-base-200 px-4 sm:px-32 py-16">
            <h1 className="text-3xl font-bold text-center mb-8">Daftar Prestasi</h1>
            <div className="space-y-8">
                {prestasiData.map((data, index) => (
                    <div key={index} className="space-y-2">
                        <h2 className="text-2xl font-semibold">{data.year}</h2>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            {data.achievements.map((achievement, idx) => (
                                <li key={idx} className="text-lg">
                                    {achievement}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PrestasiPage;
