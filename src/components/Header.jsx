import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { BsTelephoneFill } from "react-icons/bs";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isLayananOpen, setIsLayananOpen] = useState(false);
    const [profileTimeout, setProfileTimeout] = useState(null);
    const [layananTimeout, setLayananTimeout] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleProfileMouseEnter = () => {
        if (profileTimeout) clearTimeout(profileTimeout);
        setIsProfileOpen(true);
    };

    const handleProfileMouseLeave = () => {
        setProfileTimeout(setTimeout(() => {
            setIsProfileOpen(false);
        }, 100)); 
    };

    const handleLayananMouseEnter = () => {
        if (layananTimeout) clearTimeout(layananTimeout);
        setIsLayananOpen(true);
    };

    const handleLayananMouseLeave = () => {
        setLayananTimeout(setTimeout(() => {
            setIsLayananOpen(false);
        }, 100)); 
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    return (
        <div className={`navbar fixed top-0 w-full z-50 transition duration-300 ${isScrolled ? 'backdrop-blur-lg shadow-md' : ''} lg:px-32`}>
            <div className="navbar-start">
                <div className="dropdown">
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
                                <NavLink to="/" className={({ isActive }) => isActive ? 'border-b-2 decoration-sky-500 py-4' : 'py-4'} onClick={closeDropdown}>
                                    Beranda
                                </NavLink>
                            </li>
                            <li className='relative' onMouseEnter={handleProfileMouseEnter} onMouseLeave={handleProfileMouseLeave}>
                                <details>
                                    <summary className='py-4'>Profil</summary>
                                    <ul className="bg-base-200 z-[1] mt-3">
                                        <li>
                                            <NavLink to="/profil-kelurahan" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : 'py-4 hover:border-b-2 hover:border-sky-500 hover:bg-transparent transition duration-300'} onClick={closeDropdown}>
                                                Profil Kelurahan Desa
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/struktur-organisasi" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : 'py-4 hover:border-b-2 hover:border-sky-500 hover:bg-transparent transition duration-300'} onClick={closeDropdown}>
                                                Struktur Organisasi
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/prestasi" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : 'py-4 hover:border-b-2 hover:border-sky-500 hover:bg-transparent transition duration-300'} onClick={closeDropdown}>
                                                Prestasi
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/tupoksi" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : 'py-4 hover:border-b-2 hover-border-sky-500 hover:bg-transparent transition duration-300'} onClick={closeDropdown}>
                                                Tupoksi
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/visi-misi" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : 'py-4 hover:border-b-2 hover-border-sky-500 hover:bg-transparent transition duration-300'} onClick={closeDropdown}>
                                                Visi & Misi
                                            </NavLink>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li className='relative' onMouseEnter={handleLayananMouseEnter} onMouseLeave={handleLayananMouseLeave}>
                                <details>
                                    <summary className='py-4'>Layanan</summary>
                                    <ul className="bg-base-200 z-[1] mt-3">
                                        <li>
                                            <NavLink to="/layanan-administrasi" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : 'py-4 hover:border-b-2 hover-border-sky-500 hover:bg-transparent transition duration-300'} onClick={closeDropdown}>
                                                Pelayanan Administrasi
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/hallo-bupati" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : 'py-4 hover-border-b-2 hover-border-sky-500 hover:bg-transparent transition duration-300'} onClick={closeDropdown}>
                                                Hallo Bupati
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/layanan-pendidikan" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : 'py-4 hover-border-b-2 hover-border-sky-500 hover:bg-transparent transition duration-300'} onClick={closeDropdown}>
                                                Layanan Pendidikan
                                            </NavLink>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <NavLink to="/kontak" className={({ isActive }) => isActive ? 'border-b-2 decoration-sky-500 py-4' : 'py-4'} onClick={closeDropdown}>
                                    Kontak
                                </NavLink>
                            </li>
                        </ul>
                    )}
                </div>

                <a className="btn text-xl text-slate-200">
                    Desa<span className="text-sky-500 ml-[-8px] bg-transparent">Sitemu</span>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-1">
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : 'hover:border-b-2 hover:border-sky-500 hover:bg-transparent transition duration-300'}>
                            Beranda
                        </NavLink>
                    </li>
                    <li className='relative' onMouseEnter={handleProfileMouseEnter} onMouseLeave={handleProfileMouseLeave}>
                        <div className='flex items-center cursor-pointer'>
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
                                    <NavLink to="/profil-kelurahan" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : 'hover:border-b-2 hover:border-sky-500 hover:bg-transparent transition duration-300'}>
                                        Profil Kelurahan Sitemu
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/struktur-organisasi" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : 'hover:border-b-2 hover:border-sky-500 hover:bg-transparent transition duration-300'}>
                                        Struktur Organisasi
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/prestasi" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : 'hover:border-b-2 hover:border-sky-500 hover:bg-transparent transition duration-300'}>
                                        Prestasi
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/tupoksi" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : 'hover:border-b-2 hover:border-sky-500 hover:bg-transparent transition duration-300'}>
                                        Tupoksi
                                    </NavLink>
                                </li>
                                <li className='rounded-lg'>
                                    <NavLink to="/visi-misi" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : 'hover:border-b-2 hover:border-sky-500 hover:bg-transparent transition duration-300'}>
                                        Visi & Misi
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className='relative' onMouseEnter={handleLayananMouseEnter} onMouseLeave={handleLayananMouseLeave}>
                        <div className='flex items-center cursor-pointer'>
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
                                    <NavLink to="/layanan-administrasi" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : 'hover:border-b-2 hover:border-sky-500 hover:bg-transparent transition duration-300'}>
                                        Pelayanan Administrasi
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/hallo-bupati" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : 'hover:border-b-2 hover:border-sky-500 hover:bg-transparent transition duration-300'}>
                                        Hallo Bupati
                                    </NavLink>
                                </li>
                                <li className='rounded-xl'>
                                    <NavLink to="/layanan-pendidikan" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : 'hover:border-b-2 hover:border-sky-500 hover:bg-transparent transition duration-300'}>
                                        Layanan Pendidikan
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <NavLink to="/kontak" className={({ isActive }) => isActive ? 'border-b-2 border-sky-500 !bg-transparent' : 'hover:border-b-2 hover:border-sky-500 hover:bg-transparent transition duration-300'}>
                            Kontak
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">
                    <BsTelephoneFill fill='#0ea5e9' />
                    Hubungi Kami
                </a>
            </div>
        </div>
    );
}
