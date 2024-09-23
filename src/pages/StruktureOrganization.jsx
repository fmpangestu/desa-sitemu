const StrukturOrganisasi = () => {
    const data = [
        {
            img: '/src/assets/stucturedesa/kepala-desa.jpeg',
            role: 'KEPALA DESA',
            name: 'Musiyam'
        },
        {
            img: '/src/assets/stucturedesa/kadus-1.jpeg',
            role: 'KEPALA DUSUN 1',
            name: 'Slamet Riyanto'
        },
        {
            img: '/src/assets/stucturedesa/sekertaris-desa.jpeg',
            role: 'SEKRETARIS DESA',
            name: 'Gusin'
        },
        {
            img: '/src/assets/stucturedesa/kasi-pemerintahan.jpeg',
            role: 'KAUR PEMERINTAHAN',
            name: 'Sunarwandi'
        },
        {
            img: '/src/assets/stucturedesa/kadus-2.jpeg',
            role: 'KEPALA DUSUN 2',
            name: 'Mardikin'
        },
        {
            img: '/src/assets/stucturedesa/kasi-pelayanan.jpeg',
            role: 'KASI PELAYANAN',
            name: 'Abdullah'
        },
        {
            img: '/src/assets/stucturedesa/kaur-tata-usaha.jpeg',
            role: 'KAUR TATA USAHA',
            name: 'Ratoyo'
        },
        {
            img: '/src/assets/stucturedesa/kadus-3.jpeg',
            role: 'KEPALA DUSUN 3',
            name: 'Muhayatin'
        },
        {
            img: '/src/assets/stucturedesa/kaur-keuangan.jpeg',
            role: 'KAUR KEUANGAN',
            name: 'Dedy Setiawan'
        },
        {
            img: '/src/assets/stucturedesa/kaur-perencanaan.jpeg',
            role: 'KAUR PERENCANAAN',
            name: 'Dicky Andhika'
        },
        {
            img: '/src/assets/stucturedesa/kadus-4.jpeg',
            role: 'KEPALA DUSUN 4',
            name: 'Markuat'
        },
        {
            img: '/src/assets/stucturedesa/kasi-kesejahteraan.jpeg',
            role: 'KAUR KESEJAHTERAAN',
            name: 'Kridangga Satriawan'
        },
    ];

    return (
        <div className="flex flex-col items-center px-2 sm:px-4 pt-28 pb-10">
            <h1 className="font-bold mb-10 rounded-lg dark:text-black uppercase">Struktur Organisasi Kelurahan Sitemu</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
                {data.map((person, index) => (
                    <div key={index} className="card card-side bg-base-100 shadow-xl">
                        <figure>
                            <img
                                src={person.img}
                                alt={person.name}
                                className="h-48 w-[110px] object-cover"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{person.role}</h2>
                            <p className="text-sm uppercase italic">{person.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StrukturOrganisasi;
