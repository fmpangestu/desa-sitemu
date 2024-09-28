import kepalaDesaImg from '../assets/stucturedesa/kepala-desa.jpeg';
import kadus1Img from '../assets/stucturedesa/kadus-1.jpeg';
import sekertarisDesaImg from '../assets/stucturedesa/sekertaris-desa.jpeg';
import kasiPemerintahanImg from '../assets/stucturedesa/kasi-pemerintahan.jpeg';
import kadus2Img from '../assets/stucturedesa/kadus-2.jpeg';
import kasiPelayananImg from '../assets/stucturedesa/kasi-pelayanan.jpeg';
import kaurTataUsahaImg from '../assets/stucturedesa/kaur-tata-usaha.jpeg';
import kadus3Img from '../assets/stucturedesa/kadus-3.jpeg';
import kaurKeuanganImg from '../assets/stucturedesa/kaur-keuangan.jpeg';
import kaurPerencanaanImg from '../assets/stucturedesa/kaur-perencanaan.jpeg';
import kadus4Img from '../assets/stucturedesa/kadus-4.jpeg';
import kasiKesejahteraanImg from '../assets/stucturedesa/kasi-kesejahteraan.jpeg';
const StrukturOrganisasi = () => {
    const data = [
        {
            img: kepalaDesaImg,
            role: 'KEPALA DESA',
            name: 'Musiyam'
        },
        {
            img: kadus1Img,
            role: 'KEPALA DUSUN 1',
            name: 'Slamet Riyanto'
        },
        {
            img: sekertarisDesaImg,
            role: 'SEKRETARIS DESA',
            name: 'Gusin'
        },
        {
            img: kasiPemerintahanImg,
            role: 'KAUR PEMERINTAHAN',
            name: 'Sunarwandi'
        },
        {
            img: kadus2Img,
            role: 'KEPALA DUSUN 2',
            name: 'Mardikin'
        },
        {
            img: kasiPelayananImg,
            role: 'KASI PELAYANAN',
            name: 'Abdullah'
        },
        {
            img: kaurTataUsahaImg,
            role: 'KAUR TATA USAHA',
            name: 'Ratoyo'
        },
        {
            img: kadus3Img,
            role: 'KEPALA DUSUN 3',
            name: 'Muhayatin'
        },
        {
            img: kaurKeuanganImg,
            role: 'KAUR KEUANGAN',
            name: 'Dedy Setiawan'
        },
        {
            img: kaurPerencanaanImg,
            role: 'KAUR PERENCANAAN',
            name: 'Dicky Andhika'
        },
        {
            img: kadus4Img,
            role: 'KEPALA DUSUN 4',
            name: 'Markuat'
        },
        {
            img: kasiKesejahteraanImg,
            role: 'KAUR KESEJAHTERAAN',
            name: 'Kridangga Satriawan'
        },
    ];

    return (
        <div className="flex flex-col items-center px-2 pt-28 pb-10">
            <h1 className="font-bold mb-10 rounded-lg dark:text-black uppercase">Struktur Organisasi Kelurahan Sitemu</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
                {data.map((person, index) => (
                    <div 
                        key={index} 
                        className="card card-side bg-base-100 shadow-xl"
                        data-aos="fade-up"
                        data-aos-delay={index * 100} // Stagger animations
                    >
                        <figure>
                            <img
                                src={person.img}
                                alt={person.name}
                                className="h-48 w-[110px] object-cover hover:scale-125 transition duration-500 ease-in-out cursor-pointer"
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
