import React from "react";
import { Link } from "react-router-dom";

export default function VisitorAbout() {
  return (
    <div className="bg-white min-h-screen font-sans">
      
      {/* 1. HEADER SECTION (BREADCRUMB) - Mirip Gambar 1 */}
      <section className="py-24 bg-orange-50/50 text-center relative overflow-hidden">
        {/* Dekorasi Partikel Halus */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full opacity-40"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-orange-400 rounded-full opacity-40"></div>
        
        <div className="relative z-10">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">About Us</h1>
          
          {/* Breadcrumb Box */}
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-xl shadow-sm border border-gray-100">
            <Link to="/visitor" className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors">
              <i className="fas fa-home text-orange-500"></i>
              <span className="font-medium text-sm">Home</span>
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-600 font-medium text-sm">Pages</span>
            <span className="text-gray-300">/</span>
            <span className="text-orange-500 font-bold text-sm">About Us</span>
          </div>
        </div>
      </section>

      {/* 2. SERVICES GRID - Mirip Gambar 1 Bagian Bawah */}
      <section className="container mx-auto px-12 py-24">
        <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Dekorasi Geometris kecil di latar belakang */}
            <div className="absolute -top-10 left-1/2 w-4 h-4 border-2 border-orange-300 rounded-full"></div>
            
            {/* Card 1: Creative Design */}
            <div className="p-10 text-center space-y-5 hover:shadow-2xl transition-all duration-500 rounded-[2rem] bg-white group">
                <div className="w-24 h-24 mx-auto mb-6">
                    <img src="https://cdn-icons-png.flaticon.com/512/3159/3159310.png" alt="Creative Design" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 group-hover:text-orange-500 transition-colors">Bahan Berkualitas</h3>
                <p className="text-gray-500 leading-relaxed">
                    Kami memastikan setiap bahan makanan yang masuk ke dapur kami melewati seleksi ketat untuk menjaga kesegaran.
                </p>
            </div>

            {/* Card 2: SEO Consultants (Highlighted seperti di gambar) */}
            <div className="p-10 text-center space-y-5 shadow-2xl rounded-[2.5rem] bg-white border-t-4 border-orange-500 relative transform md:-translate-y-4">
                <div className="w-24 h-24 mx-auto mb-6">
                    <img src="https://cdn-icons-png.flaticon.com/512/1055/1055644.png" alt="SEO" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Koki Profesional</h3>
                <p className="text-gray-500 leading-relaxed">
                    Hidangan Anda disiapkan oleh tim ahli kuliner yang berdedikasi tinggi terhadap rasa dan estetika penyajian.
                </p>
                {/* Dekorasi kecil di card tengah */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-orange-500">✕</div>
            </div>

            {/* Card 3: App Development */}
            <div className="p-10 text-center space-y-5 hover:shadow-2xl transition-all duration-500 rounded-[2rem] bg-white group">
                <div className="w-24 h-24 mx-auto mb-6">
                    <img src="https://cdn-icons-png.flaticon.com/512/2010/2010990.png" alt="Development" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 group-hover:text-orange-500 transition-colors">Pengiriman Cepat</h3>
                <p className="text-gray-500 leading-relaxed">
                    Sistem logistik kami dirancang agar makanan tetap hangat dan segar sampai di tangan Anda tepat waktu.
                </p>
            </div>
        </div>
      </section>

      {/* 3. BUSINESS GROWTH SECTION - Mirip Gambar 2 */}
      <section className="container mx-auto px-12 py-24">
        <div className="flex flex-col md:flex-row items-center gap-20">
          
          {/* Sisi Kiri: Ilustrasi 3D Style */}
          <div className="md:w-1/2 relative">
            <img 
              src="https://img.freepik.com/free-vector/delivery-service-with-mask-concept_23-2148505116.jpg?t=st=1715568580~exp=1715572180~hmac=6217462c16a69888941f1737e8c339589d81d4a04945d8b2d184451737f7a77d&w=826" 
              className="w-full h-auto drop-shadow-2xl" 
              alt="Food Delivery Growth" 
            />
            {/* Dekorasi floating icons */}
            <div className="absolute top-0 right-0 animate-bounce bg-white p-4 rounded-2xl shadow-lg text-orange-500">
                <i className="fas fa-heart text-2xl"></i>
            </div>
          </div>

          {/* Sisi Kanan: Konten Teks & List */}
          <div className="md:w-1/2 space-y-8">
            <div className="space-y-4">
                <span className="text-orange-600 font-bold tracking-widest text-sm uppercase">About Us</span>
                <h2 className="text-5xl font-black text-slate-900 leading-[1.1]">
                    Pertumbuhan Bisnis <br /> 
                    <span className="text-orange-500">Di Luar Imajinasi.</span>
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed">
                    Kami mendesain konsep baru dalam pelayanan kuliner digital untuk memberikan pengalaman makan yang tak terlupakan bagi setiap pelanggan.
                </p>
            </div>

            {/* Checkbox List */}
            <div className="grid gap-4">
              {[
                "Pilihan menu dari berbagai belahan dunia",
                "Harga kompetitif dengan promo harian",
                "Keamanan pembayaran yang terjamin",
                "Layanan pelanggan siap sedia 24/7"
              ].map((text, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-orange-500 flex items-center justify-center">
                    <i className="fas fa-check text-[10px] text-orange-600"></i>
                  </div>
                  <span className="text-gray-700 font-medium">{text}</span>
                </div>
              ))}
            </div>

            {/* Button */}
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-lg shadow-orange-200 active:scale-95">
              More About Us
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}