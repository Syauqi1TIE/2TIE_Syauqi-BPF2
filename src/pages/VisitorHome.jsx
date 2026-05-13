import React from "react";
import { Link } from "react-router-dom";

export default function VisitorHome() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-orange-100 rounded-full blur-[120px] opacity-40 -z-10" />

      <section className="container mx-auto px-12 pt-16 pb-24 flex flex-col md:flex-row items-center min-h-[80vh]">
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
            Nikmati kelezatan kuliner terbaik dengan sistem pemesanan modern dan pengiriman super cepat.
          </p>
          <Link to="/visitor/menu" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-md font-black text-lg transition-all shadow-xl shadow-blue-200 hover:-translate-y-1">
            Pesan Sekarang
          </Link>
        </div>

        <div className="md:w-1/2 relative flex justify-center mt-10 md:mt-0">
          <img 
            src="https://img.freepik.com/free-photo/delicious-burger-with-fresh-ingredients_23-2150857908.jpg" 
            alt="Hero Burger" 
            className="w-full max-w-md rounded-[3rem] shadow-2xl rotate-2" 
          />
        </div>
      </section>
    </div>
  );
}