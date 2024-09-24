import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import { BsTelephoneFill } from "react-icons/bs";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isLayananOpen, setIsLayananOpen] = useState(false);
    const [isKelembagaanOpen, setIsKelembagaanOpen] = useState(false);
    const [profileTimeout, setProfileTimeout] = useState(null);
    const [layananTimeout, setLayananTimeout] = useState(null);
    const [kelembagaanTimeout, setKelembagaanTimeout] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    // Theme state
    // const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    // Apply theme class to body
    const toggleTheme = () => {
        setDarkMode(!darkMode);
        document.documentElement.setAttribute(
            'data-theme',
            darkMode ? 'light' : 'dark'
        );
    };

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setDarkMode(storedTheme === 'dark');
            document.documentElement.setAttribute('data-theme', storedTheme);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);



    // Handle scroll for navbar background
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Handle profile dropdown hover
    const handleProfileMouseEnter = () => {
        if (profileTimeout) clearTimeout(profileTimeout);
        setIsProfileOpen(true);
    };

    const handleProfileMouseLeave = () => {
        setProfileTimeout(setTimeout(() => {
            setIsProfileOpen(false);
        }, 100));
    };

    // Handle layanan dropdown hover
    const handleLayananMouseEnter = () => {
        if (layananTimeout) clearTimeout(layananTimeout);
        setIsLayananOpen(true);
    };

    const handleLayananMouseLeave = () => {
        setLayananTimeout(setTimeout(() => {
            setIsLayananOpen(false);
        }, 100));
    };
    const handleKelembagaanMouseEnter = () => {
        if (kelembagaanTimeout) clearTimeout(kelembagaanTimeout);
        setIsKelembagaanOpen(true);
    };

    const handleKelembagaanMouseLeave = () => {
        setKelembagaanTimeout(setTimeout(() => {
            setIsKelembagaanOpen(false);
        }, 100));
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };


    return (
        <div className={`navbar px-5 lg:px-0 fixed top-0 w-full z-50 bg-transparent transition duration-300 ${isScrolled ? 'backdrop-blur-lg shadow-md' : ''} lg:px-32`}
        style={{ backgroundColor: 'transparent' }}>
            <div className="navbar-start bg-transparent">
                <div className="dropdown bg-transparent">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={toggleDropdown}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 bg-transparent"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    {isDropdownOpen && (
                        <ul className="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-96 sm:w-[50rem] p-2 shadow-xl">
                            <li>
                                <NavLink to="/" className={({ isActive }) => isActive ? '!bg-transparent border-b-2 decoration-sky-500 py-4' : 'py-4'} onClick={closeDropdown}>
                                    Beranda
                                </NavLink>
                            </li>
                            <li className='relative' onMouseEnter={handleProfileMouseEnter} onMouseLeave={handleProfileMouseLeave}>
                                <details>
                                    <summary className='py-4 !bg-transparent'>Profil</summary>
                                    <ul className="bg-base-200 z-[1] mt-3">
                                        <li>
                                            <NavLink to="/profil-kelurahan" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : '!bg-transparent py-4 hover:border-b-2 hover:border-sky-500 hover:bg-transparent transition duration-300'} onClick={closeDropdown}>
                                                Profil Kelurahan Desa
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/struktur-organisasi" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : '!bg-transparent py-4 hover:border-b-2 hover:border-sky-500 hover:bg-transparent transition duration-300'} onClick={closeDropdown}>
                                                Struktur Organisasi
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/prestasi" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : '!bg-transparent py-4 hover:border-b-2 hover:border-sky-500 hover:bg-transparent transition duration-300'} onClick={closeDropdown}>
                                                Prestasi
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/tupoksi" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : '!bg-transparent py-4 hover:border-b-2 hover:border-sky-500 hover:bg-transparent transition duration-300'} onClick={closeDropdown}>
                                                Tupoksi
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/visi-misi" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : '!bg-transparent py-4 hover:border-b-2 hover:border-sky-500 hover:bg-transparent transition duration-300'} onClick={closeDropdown}>
                                                Visi & Misi
                                            </NavLink>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li className='relative' onMouseEnter={handleLayananMouseEnter} onMouseLeave={handleLayananMouseLeave}>
                                <details>
                                    <summary className='!bg-transparent py-4'>Layanan</summary>
                                    <ul className="bg-base-200 z-[1] mt-3">
                                        <li>
                                            <NavLink to="/layanan-administrasi" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : '!bg-transparent py-4 hover:border-b-2 hover:border-sky-500 hover:bg-transparent transition duration-300'} onClick={closeDropdown}>
                                                Pelayanan Administrasi
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/hallo-bupati" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : '!bg-transparent py-4 hover:border-b-2 hover:border-sky-500 hover:bg-transparent transition duration-300'} onClick={closeDropdown}>
                                                Hallo Bupati
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/layanan-pendidikan" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : '!bg-transparent py-4 hover:border-b-2 hover:border-sky-500 hover:bg-transparent transition duration-300'} onClick={closeDropdown}>
                                                Layanan Pendidikan
                                            </NavLink>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li className='relative' onMouseEnter={handleLayananMouseEnter} onMouseLeave={handleLayananMouseLeave}>
                                <details>
                                    <summary className='!bg-transparent py-4'>Kelembagaan</summary>
                                    <ul className="bg-base-200 z-[1] mt-3">
                                        <li>
                                            <NavLink to="/badan-permusyawaratan-desa" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : '!bg-transparent py-4 hover:border-b-2 hover:border-sky-500 hover:bg-transparent transition duration-300'} onClick={closeDropdown}>
                                                Badan Permusyawaratan Desa (BPD)
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/lembaga-pemberdayaan-masyarakat" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : '!bg-transparent py-4 hover:border-b-2 hover:border-sky-500 hover:bg-transparent transition duration-300'} onClick={closeDropdown}>
                                                Lembaga Pemberdayaan Masyarakat (LPM)
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/pembinaan-kesejahteraan-keluarga" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : '!bg-transparent py-4 hover:border-b-2 hover:border-sky-500 hover:bg-transparent transition duration-300'} onClick={closeDropdown}>
                                                Pembinaan Kesejahteraan Keluarga (PKK)
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/karang-taruna" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : '!bg-transparent py-4 hover:border-b-2 hover:border-sky-500 hover:bg-transparent transition duration-300'} onClick={closeDropdown}>
                                                Karang Taruna
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/linmas-desa" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : '!bg-transparent py-4 hover:border-b-2 hover:border-sky-500 hover:bg-transparent transition duration-300'} onClick={closeDropdown}>
                                                Linmas Desa
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/kelompok-informasi-masyarakat" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : '!bg-transparent py-4 hover:border-b-2 hover:border-sky-500 hover:bg-transparent transition duration-300'} onClick={closeDropdown}>
                                                Kelompok Informasi Masyarakat (KIM)
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/kelompok-sadar-wisata" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : '!bg-transparent py-4 hover:border-b-2 hover:border-sky-500 hover:bg-transparent transition duration-300'} onClick={closeDropdown}>
                                                Kelompok Sadar Wisata (Pokdarwis)
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/badan-usaha-milik-desa" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : '!bg-transparent py-4 hover:border-b-2 hover:border-sky-500 hover:bg-transparent transition duration-300'} onClick={closeDropdown}>
                                                Badan Usaha Milik Desa (BUMDes)
                                            </NavLink>
                                        </li>

                                    </ul>
                                </details>
                            </li>
                            <li>
                                <NavLink to="/galeri" className={({ isActive }) => isActive ? 'border-b-2 decoration-sky-500 !bg-transparent py-4' : '!bg-transparent py-4'} onClick={closeDropdown}>
                                    Galeri
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/berita" className={({ isActive }) => isActive ? 'border-b-2 decoration-sky-500 !bg-transparent py-4' : '!bg-transparent py-4'} onClick={closeDropdown}>
                                    Berita
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/kontak" className={({ isActive }) => isActive ? 'border-b-2 decoration-sky-500 !bg-transparent py-4' : '!bg-transparent py-4'} onClick={closeDropdown}>
                                    Kontak
                                </NavLink>
                            </li>
                        </ul>
                    )}
                </div>

                <a href="/" className="bg-transparent border-transparent btn text-xl hover:bg-transparent hover:border-transparent shadow-none dark:text-slate-200">
                    Desa<span className="text-sky-500 ml-[-8px] bg-transparent">Sitemu</span>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex bg-transparent">
                <ul className="menu menu-horizontal px-1 gap-1 bg-transparent">
                    <li className='!bg-transparent'>
                        <NavLink to="/" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 active:!bg-transparent !bg-transparent' : '!bg-transparent hover:border-b-2 hover:border-sky-500 hover:bg-transparent'}>
                            Beranda
                        </NavLink>
                    </li>
                    <li className='relative bg-transparent hover:bg-none' onMouseEnter={handleProfileMouseEnter} onMouseLeave={handleProfileMouseLeave}>
                        <div className='!bg-transparent hover:bg-transparent hover:border-b-2 border-sky-500 flex items-center cursor-pointer'>
                            Profil
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`h-4 w-4 ml-1 bg-transparent transition-transform duration-200 ${isProfileOpen ? 'rotate-180' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                        {isProfileOpen && (
                            <ul className="bg-base-200 z-[1] top-10 left-[-40px] shadow-3xl w-64 absolute rounded-xl ">
                                <li>
                                    <NavLink to="/profil-kelurahan" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : '!bg-transparent hover:border-b-2 hover:border-sky-500 hover:bg-transparent transition duration-300'}>
                                        Profil Kelurahan Sitemu
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/struktur-organisasi" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : '!bg-transparent hover:border-b-2 hover:border-sky-500 hover:bg-transparent transition duration-300'}>
                                        Struktur Organisasi
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/prestasi" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : '!bg-transparent hover:border-b-2 hover:border-sky-500 hover:bg-transparent transition duration-300'}>
                                        Prestasi
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/tupoksi" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : '!bg-transparent hover:border-b-2 hover:border-sky-500 hover:bg-transparent transition duration-300'}>
                                        Tupoksi
                                    </NavLink>
                                </li>
                                <li className='rounded-lg'>
                                    <NavLink to="/visi-misi" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : '!bg-transparent hover:border-b-2 hover:border-sky-500 hover:bg-transparent transition duration-300'}>
                                        Visi & Misi
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className='relative bg-transparent' onMouseEnter={handleLayananMouseEnter} onMouseLeave={handleLayananMouseLeave}>
                        <div className='flex items-center cursor-pointer hover:bg-transparent !bg-transparent hover:border-b-2 border-sky-500'>
                            Layanan
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`h-4 w-4 ml-1 bg-transparent transition-transform duration-200 ${isLayananOpen ? 'rotate-180' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                        {isLayananOpen && (
                            <ul className="bg-base-200 z-[1] top-10 left-[-40px] shadow-3xl w-64 absolute rounded-xl">
                                <li>
                                    <NavLink to="/layanan-administrasi" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : '!bg-transparent hover:border-b-2 hover:border-sky-500 hover:bg-transparent transition duration-300'}>
                                        Pelayanan Administrasi
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/hallo-bupati" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : '!bg-transparent hover:border-b-2 hover:border-sky-500 hover:bg-transparent transition duration-300'}>
                                        Hallo Bupati
                                    </NavLink>
                                </li>
                                {/* <li className='rounded-xl'>
                                    <NavLink to="/layanan-pendidikan" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : '!bg-transparent hover:border-b-2 hover:border-sky-500 hover:bg-transparent transition duration-300'}>
                                        Layanan Pendidikan
                                    </NavLink>
                                </li> */}
                            </ul>
                        )}
                    </li>
                    <li className='relative bg-transparent' onMouseEnter={handleKelembagaanMouseEnter} onMouseLeave={handleKelembagaanMouseLeave}>
                        <div className='flex items-center cursor-pointer !bg-transparent hover:bg-transparent hover:border-b-2 border-sky-500'>
                            Kelembagaan
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`h-4 w-4 ml-1 bg-transparent transition-transform duration-200 ${isKelembagaanOpen ? 'rotate-180' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                        {isKelembagaanOpen && (
                            <ul className="bg-base-200 z-[1] top-10 left-[-40px] shadow-3xl w-64 absolute rounded-xl">
                                <li>
                                    <NavLink to="/badan-permusyawaratan-desa" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : '!bg-transparent hover:border-b-2 hover:border-sky-500 hover:bg-transparent transition duration-300'}>
                                        Badan Permusyawaratan Desa (BPD)
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/lembaga-pemberdayaan-masyarakat" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : '!bg-transparent hover:border-b-2 hover:border-sky-500 hover:bg-transparent transition duration-300'}>
                                        Lembaga Pemberdayaan Masyarakat (LPM)
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/pembinaan-kesejahteraan-keluarga" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : '!bg-transparent hover:border-b-2 hover:border-sky-500 hover:bg-transparent transition duration-300'}>
                                        Pembinaan Kesejahteraan Keluarga (PKK)
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/karang-taruna" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : '!bg-transparent hover:border-b-2 hover:border-sky-500 hover:bg-transparent transition duration-300'}>
                                        Karang Taruna
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/posyandu" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : '!bg-transparent hover:border-b-2 hover:border-sky-500 hover:bg-transparent transition duration-300'}>
                                        Posyandu
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/kelompok-informasi-masyarakat" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : '!bg-transparent hover:border-b-2 hover:border-sky-500 hover:bg-transparent transition duration-300'}>
                                        Kelompok Informasi Masyarakat (KIM)
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/kelompok-swadaya-wisata" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : '!bg-transparent hover:border-b-2 hover:border-sky-500 hover:bg-transparent transition duration-300'}>
                                        Kelompok Sadar Wisata (Pokdarwis)
                                    </NavLink>
                                </li>
                                <li className='rounded-xl'>
                                    <NavLink to="/badan-usaha-milik-desa" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : '!bg-transparent hover:border-b-2 hover:border-sky-500 hover:bg-transparent transition duration-300'}>
                                        Badan Usaha Milik Desa (BUMDes)
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className='bg-transparent'>
                        <NavLink to="/galeri" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : '!bg-transparent hover:border-b-2 hover:border-sky-500 hover:bg-transparent'}>
                            Galeri
                        </NavLink>
                    </li>
                    <li className='bg-transparent'>
                        <NavLink to="/berita" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : '!bg-transparent hover:border-b-2 hover:border-sky-500 hover:bg-transparent'}>
                            Berita
                        </NavLink>
                    </li>
                    <li className='bg-transparent'>
                        <NavLink to="/kontak" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : '!bg-transparent hover:border-b-2 hover:border-sky-500 hover:bg-transparent'}>
                            Kontak
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-end flex items-center !bg-transparent">
                {/* Dark mode toggle */}
                <label className="swap swap-rotate bg-transparent">
                    <input type="checkbox" className="!bg-transparent !important" checked={darkMode} onChange={toggleTheme} style={{ backgroundColor: 'transparent' }}/>
                    {/* Sun icon */}
                    <svg
                        className="swap-off h-8 w-8 fill-yellow-500 !bg-transparent !important"
                        style={{ backgroundColor: 'transparent' }}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>
                    {/* Moon icon (Dark Mode) */}
                    <svg
                        className="swap-on h-8 w-8 fill-sky-500 !bg-transparent !important"
                        style={{ backgroundColor: 'transparent' }}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                </label>
            </div>
        </div>
    );
}
