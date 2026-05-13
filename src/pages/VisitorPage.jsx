import React from "react";
import DataProduct from "../dataproduct.json";

export default function VisitorPage() {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* 1. HOME SECTION (ID: home) */}
      <section id="home" className="container mx-auto px-12 pt-16 pb-24 flex flex-col md:flex-row items-center min-h-screen">
        <div className="md:w-1/2 space-y-8">
          <div className="inline-block px-4 py-1 bg-orange-50 rounded-full border border-orange-100">
             <span className="text-orange-600 font-bold text-xs uppercase tracking-widest">Welcome To Foodies</span>
          </div>
          <h1 className="text-7xl font-black text-slate-900 leading-[1.1]">
            Explore Modern <br />
            <span className="text-orange-500 underline decoration-orange-200 decoration-8 underline-offset-4">Digital Food</span> <br />
            Experience
          </h1>
          <p className="text-gray-500 text-lg max-w-md">
            Kami membantu memuaskan rasa lapar Anda dengan kualitas rasa modern yang diproses higienis.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-md font-black text-lg transition-all shadow-xl shadow-blue-200 hover:-translate-y-1">
            Get Started Now
          </button>
        </div>

        <div className="md:w-1/2 relative flex justify-center mt-10 md:mt-0">
          <img 
            src="https://img.freepik.com/free-photo/delicious-burger-with-fresh-ingredients_23-2150857908.jpg" 
            alt="Hero Burger" 
            className="w-full max-w-md rounded-[3rem] shadow-2xl rotate-2 animate-pulse" 
          />
        </div>
      </section>

      {/* 2. TENTANG SECTION (ID: tentang) */}
      <section id="tentang" className="py-24 bg-slate-50">
        <div className="container mx-auto px-12 grid md:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
                <h4 className="text-4xl font-black text-orange-500">10k+</h4>
                <p className="text-gray-400 text-sm font-bold">Pesanan Selesai</p>
             </div>
             <div className="bg-orange-500 p-8 rounded-3xl shadow-lg text-center text-white mt-8">
                <h4 className="text-4xl font-black">24h</h4>
                <p className="text-orange-100 text-sm font-bold">Layanan Cepat</p>
             </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-black text-slate-900">Kenapa Harus Foodies?</h2>
            <p className="text-gray-500 leading-relaxed">
              Foodies bukan sekadar aplikasi pesan antar. Kami bekerja sama dengan koki bintang lima 
              untuk memastikan setiap hidangan yang sampai ke meja Anda adalah sebuah karya seni rasa.
            </p>
            <ul className="space-y-3 font-bold text-slate-700">
               <li className="flex items-center gap-2">✅ Bahan Baku 100% Organik</li>
               <li className="flex items-center gap-2">✅ Pengiriman dibawah! 20 Menit</li>
               <li className="flex items-center gap-2">✅ Tanpa Biaya Admin</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. MENU SECTION (ID: menu) */}
      <section id="menu" className="py-24">
        <div className="container mx-auto px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900">Menu Andalan Kami</h2>
            <p className="text-gray-400 mt-2">Pilih rasa yang paling cocok dengan mood kamu hari ini</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {DataProduct.slice(0, 8).map((product) => (
              <div key={product.id} className="bg-white p-5 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all group border border-gray-100">
                <div className="overflow-hidden rounded-[2rem] mb-5 aspect-square">
                  <img src={product.image} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                </div>
                <h3 className="font-bold text-xl mb-1">{product.name}</h3>
                <p className="text-orange-500 font-black text-lg">Rp {product.price}</p>
                <button className="mt-4 w-full bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-orange-500 transition-colors">
                   Tambah +
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROMO SECTION (ID: promo) */}
      <section id="promo" className="py-24 bg-[#050729] rounded-[4rem] mx-6 mb-24 text-white overflow-hidden relative">
        <div className="container mx-auto px-12 flex flex-col md:flex-row items-center gap-12">
           <div className="md:w-1/2 space-y-6">
              <h2 className="text-5xl font-black italic">DISKON AKHIR PEKAN!</h2>
              <p className="text-orange-200 text-xl font-bold">Gunakan kode: <span className="bg-white text-slate-900 px-4 py-1 rounded-lg ml-2">LAPARLAGI</span></p>
              <p className="opacity-70">Dapatkan potongan hingga 50% untuk semua menu pasta dan burger setiap hari Sabtu & Minggu.</p>
           </div>
           <div className="md:w-1/2">
              <div className="bg-orange-500 p-10 rounded-[3rem] rotate-3 text-center">
                 <p className="text-sm font-bold uppercase">Potongan Hingga</p>
                 <p className="text-7xl font-black">Rp 50k</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}