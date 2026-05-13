import { Outlet, Link } from "react-router-dom";
import DataTestimoni from "../datatestimoni.json"; 

export default function VisitorLayout() {
  const menus = [
    { id: '01', name: 'Home', path: '/visitor' },
    { id: '02', name: 'Menu', path: '/visitor/menu' },
    { id: '04', name: 'Tentang', path: '/visitor/tentang' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-12 py-7 sticky top-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-50">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg shadow-orange-200">
              F
            </div>
            <Link to="/visitor" className="text-2xl font-bold tracking-tighter text-slate-900">foodies</Link>
          </div>

          <div className="h-6 w-[1.5px] bg-gray-200 hidden sm:block"></div>

          <div className="flex items-center gap-4">
            <a href="https://share.google/N0xBZOXPpja9PvOiC" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-600 transition-all hover:scale-110 text-xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://wa.me/6287714892728" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-all hover:scale-110 text-xl">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>

        <ul className="hidden md:flex gap-10">
          {menus.map((menu) => (
            <li key={menu.id} className="relative group cursor-pointer">
              <Link to={menu.path}>
                <span className="text-[10px] text-orange-500 absolute -top-3 left-0 font-bold opacity-0 group-hover:opacity-100 transition-all">{menu.id}</span>
                <span className="text-gray-800 font-semibold group-hover:text-orange-500 transition-colors flex items-center gap-1">
                  {menu.name} <span className="text-[8px]">▼</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5">
          <Link to="/login" className="text-sm font-bold text-slate-700 hover:text-orange-500 transition-colors">Sign In</Link>
          <Link to="/register" className="bg-[#050729] text-white px-7 py-3 rounded-md text-sm font-bold hover:bg-orange-500 transition-all shadow-md active:scale-95">Sign Up</Link>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>

      {/* === SECTION TESTIMONI (FIXED VERSION) === */}
      <section className="py-24 bg-orange-50/30 border-t border-orange-100">
        <div className="container mx-auto px-12">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-black text-slate-900 mb-4">
               Apa Kata <span className="text-orange-500">Foodies Lovers?</span>
             </h2>
             <p className="text-gray-500 italic text-lg">"Kepuasan pelanggan adalah bumbu rahasia kami."</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {DataTestimoni && DataTestimoni.map((item) => (
              <div 
                key={item.id} 
                className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-orange-100 group flex flex-col items-center"
              >
                {/* Avatar Pengguna - Perbaikan struktur layering */}
                <div className="relative w-24 h-24 mb-6">
                   {/* Background Circle */}
                   <div className="absolute inset-0 bg-orange-100 rounded-full rotate-6 group-hover:rotate-12 transition-transform z-0"></div>
                   {/* IMG Tag - Sekarang ditaruh di z-10 */}
                   <img 
                     src={item.avatar} 
                     alt={item.name} 
                     className="relative z-10 w-full h-full rounded-full border-4 border-white object-contain bg-white shadow-sm"
                     loading="lazy"
                     onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${item.name}&background=f97316&color=fff` }}
                   />
                </div>

                <h4 className="font-bold text-center text-slate-800 text-lg mb-1">{item.name}</h4>
                <p className="text-[10px] text-orange-600 text-center font-black mb-4 uppercase tracking-[0.2em]">
                  {item.role}
                </p>

                <div className="relative flex-grow">
                   <span className="absolute -left-2 -top-2 text-orange-200 text-3xl font-serif">“</span>
                   <p className="text-gray-600 text-[13px] text-center italic leading-relaxed px-2">
                     {item.review}
                   </p>
                </div>

                <div className="flex justify-center gap-1 mt-6 text-orange-400 text-[10px]">
                   {[...Array(item.rating || 5)].map((_, i) => (
                     <i key={i} className="fas fa-star"></i>
                   ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-gray-400 text-xs border-t border-gray-100">
         <p>© 2026 Foodies Digital Experience</p>
      </footer>
    </div>
  );
}