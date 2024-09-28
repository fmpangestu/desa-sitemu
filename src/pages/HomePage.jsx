import { BsTelephoneFill } from 'react-icons/bs';
import workingImage from '../assets/homepage/undraw_working_re_ddwy.svg';

export default function Homepage() {
    const whatsappNumber = '+6283866398265'; // Replace with your actual WhatsApp number

    return (
        <div className="relative bg-base-200 pb-28 flex flex-col justify-between">
            <div className="container mx-auto p-4 flex xl:pl-32 flex-col lg:flex-row relative z-10">
                {/* Aside Kiri: Penyambutan */}
                <aside className="lg:w-1/2 p-4"
                    data-aos="fade-right"
                    data-aos-offset="10"
                    data-aos-duration="500">
                    <h1 className="text-4xl font-bold mb-4 dark:text-white">Selamat Datang di Desa <span className='text-sky-600'>Sitemu</span></h1>
                    <p className="mb-4 dark:text-slate-400">
                        Desa Sitemu suatu desa yang kaya akan budaya dan tradisi. Kami berkomitmen untuk
                        memberikan layanan terbaik bagi warga dan pengunjung. Temukan berbagai informasi
                        mengenai desa kami di sini.
                    </p>
                    <p className="mb-4 dark:text-slate-400">
                        Kami memiliki berbagai program dan layanan untuk mendukung masyarakat.
                    </p>
                    <a 
                        href={`https://wa.me/${whatsappNumber}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn hover:bg-transparent hover:border-none hover:scale-1 shadow-[1px_2px_0px_rgba(14,165,233,0.5)]"
                    >
                        <BsTelephoneFill className='bg-transparent' fill='#0ea5e9' />
                        Hubungi Kami
                    </a>
                </aside>

                {/* Aside Kanan: Ilustrasi */}
                <aside className="lg:w-1/2 xl:w-1/3 p-4"
                    data-aos="fade-left"
                    data-aos-offset="50"
                    data-aos-duration="500">
                    <img
                        src={workingImage}
                        alt="Ilustrasi Desa Sitemu"
                        className="w-full animate-float"
                        style={{ animation: 'float 3s ease-in-out infinite' }}
                    />
                </aside>
            </div>
        </div>
    );
}
