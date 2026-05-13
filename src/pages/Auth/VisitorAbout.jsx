import React from "react";

export default function VisitorAbout() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-12 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-5xl font-black text-slate-900 leading-tight">
            Kami Menyediakan <br /> <span className="text-orange-500">Layanan Terbaik</span> Sejak 2024
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Foodies adalah platform revolusioner yang menghubungkan pecinta kuliner dengan hidangan lezat secara higienis, cepat, dan terjangkau.
          </p>
          <div className="space-y-4 font-bold text-slate-700">
             <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl">
                <span className="bg-orange-500 text-white p-2 rounded-lg">✓</span> 
                Bahan Baku 100% Organik & Segar
             </div>
             <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl">
                <span className="bg-orange-500 text-white p-2 rounded-lg">✓</span> 
                Koki Profesional Berpengalaman
             </div>
             <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl">
                <span className="bg-orange-500 text-white p-2 rounded-lg">✓</span> 
                Pengiriman Cepat Kurang dari 20 Menit
             </div>
          </div>
        </div>
        
        <div className="relative">
           <div className="bg-orange-500 w-full h-[400px] rounded-[3rem] absolute rotate-6 -z-10 opacity-10"></div>
           <img 
             src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=600&auto=format&fit=crop" 
             className="rounded-[3rem] shadow-xl w-full h-[400px] object-cover" 
             alt="Cooking"
           />
        </div>
      </div>
    </section>
  );
}