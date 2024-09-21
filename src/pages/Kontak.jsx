export default function Kontak() {
    return (
        <div className="container min-h-screen bg-base-200">
            <div className="mx-auto pt-20 lg:pt-44 px-4 lg:px-36 flex flex-col lg:flex-row justify-between items-start">
                {/* Informasi Kontak */}
                <aside className="w-full lg:w-1/2 mb-6 lg:mb-0">
                    <h1 className="text-2xl font-bold mb-4">Kontak Kami</h1>
                    <p className="mb-2 font-semibold">Alamat Kantor Desa:</p>
                    <p className="mb-4 italic font-normal">Jl. Raya Sitemu, Sitemu, Kec. Taman, Kabupaten Pemalang, Jawa Tengah 52361</p>
                    <p className="mb-4 font-semibold">WhatsApp: <span className="italic font-normal"> +62 812 3456 7890</span></p>
                    <p className="mb-2 font-semibold">Email: <span className="italic font-normal"> kantor.desasitemu@domain.com</span></p>
                    <p className="mb-4 font-semibold">Jam Operasional:<span className="italic font-normal"> Senin-Jumat, 08.00 - 16.00</span></p>
                </aside>

                {/* Peta Google Maps */}
                <aside className="w-full lg:w-1/2">
                    <h3 className="text-2xl font-bold mb-2 lg:mb-0">Lokasi Kami</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d596.7585832810922!2d109.44586421771947!3d-6.917500715826772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fdb95a36263a7%3A0x788e5069bd02e47d!2sKantor%20Balai%20Desa%20Sitemu!5e0!3m2!1sid!2sid!4v1726805894226!5m2!1sid!2sid"
                        width="100%"
                        height="300"
                        style={{ borderRadius: "1rem", boxShadow: "0 0 1rem rgba(0, 0, 0, 0.1)" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="border-0">
                    </iframe>
                </aside>
            </div>

            {/* Konten di bawah halaman Kontak */}
            {/* <div className="mt-10 bg-base-200 pt-5">
                <h2 className="text-xl font-bold">Informasi Tambahan</h2>
            </div> */}
        </div>
    );
}


{/* <h2 className="text-xl font-semibold mb-4">Kirim Pesan</h2> */ }
{/* <form>
                    <div className="mb-4">
                        <label className="block mb-2">Nama</label>
                        <input type="text" className="input input-bordered w-full" />
                    </div>
                    <div className="mb-4">
                    <label className="block mb-2">Email</label>
                        <input type="email" className="input input-bordered w-full" />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Pesan</label>
                        <textarea className="textarea textarea-bordered w-full"></textarea>
                    </div>
                    <button className="btn btn-primary">Kirim</button>
                </form> */}