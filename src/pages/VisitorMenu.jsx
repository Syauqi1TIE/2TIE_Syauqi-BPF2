import React from "react";
import { Link } from "react-router-dom";
import DataProduct from "../dataproduct.json";

export default function VisitorMenu() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. HEADER SECTION (BREADCRUMB) - Mirip Gambar 1 */}
      <section className="py-20 bg-orange-50/50 text-center relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-5xl font-bold text-slate-900 mb-6 font-serif">Product Grid</h1>
          <div className="inline-flex items-center gap-2 bg-white px-6 py-2.5 rounded-lg shadow-sm border border-gray-100">
            <Link to="/visitor" className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors">
              <i className="fas fa-home text-red-500 text-sm"></i>
              <span className="font-medium text-sm">Home</span>
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-600 font-medium text-sm">Shop</span>
            <span className="text-gray-300">/</span>
            <span className="text-red-500 font-bold text-sm">Product Grid</span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-12 py-16">
        
        {/* 2. TOP TOOLBAR (Showing 1 to 18 of 20 total) */}
        <div className="flex justify-between items-center bg-white p-5 rounded-2xl border border-gray-100 shadow-sm mb-10">
          <p className="text-gray-500 text-sm font-medium">Showing 1 to 18 of 20 total</p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 text-gray-400">
              <i className="fas fa-th-large text-gray-800 cursor-pointer"></i>
              <i className="fas fa-list cursor-pointer hover:text-gray-800"></i>
            </div>
            <select className="bg-gray-50 border border-gray-200 text-gray-600 text-sm rounded-lg px-4 py-2 outline-none focus:ring-1 focus:ring-red-500">
              <option>Sort By</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* 3. SIDEBAR (Categories & Price) */}
          <aside className="lg:w-1/4 space-y-8">
            {/* Categories Box */}
            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 mb-6 pb-2 border-b-2 border-red-50 w-fit">Categories</h3>
              <ul className="space-y-5">
                {["All", "Software", "Accessories", "Dynamic", "Technology"].map((cat) => (
                  <li key={cat} className="flex justify-between items-center group cursor-pointer">
                    <span className={`text-sm font-medium ${cat === "All" ? "text-red-500" : "text-gray-500"} group-hover:text-red-500 transition-colors`}>
                      {cat === "All" && <span className="mr-2">●</span>} {cat}
                    </span>
                    <i className="fas fa-chevron-right text-[10px] text-gray-300 group-hover:text-red-500"></i>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Filter Box */}
            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 mb-6 pb-2 border-b-2 border-red-50 w-fit">Price</h3>
              <div className="space-y-4">
                {["$10 - $100", "$100 - $200"].map((range) => (
                  <label key={range} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded accent-red-500" />
                    <span className="text-gray-500 text-sm group-hover:text-slate-800">{range}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* 4. MAIN PRODUCT GRID */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {DataProduct.map((product) => (
                <div key={product.id} className="group flex flex-col items-center text-center">
                  {/* Image Container */}
                  <div className="relative w-full aspect-square bg-[#F3F9FB] rounded-[2rem] overflow-hidden mb-5 group-hover:shadow-xl transition-all duration-500">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-700" 
                    />
                  </div>

                  {/* Info */}
                  <h3 className="font-bold text-slate-800 text-lg mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-gray-400 line-through text-sm">$85.00</span>
                    <span className="text-slate-800 font-bold text-sm">Rp {product.price}</span>
                  </div>

                  {/* Add To Cart Button */}
                  <button className="bg-[#D93E59] hover:bg-slate-900 text-white w-fit px-8 py-3 rounded-lg flex items-center gap-3 transition-all shadow-md active:scale-95">
                    <i className="fas fa-shopping-bag text-sm"></i>
                    <span className="text-sm font-bold">Add To Cart</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}