import PageHeader from "../components/PageHeader";
import DataCustomer from "../datacustomer.json";
export default function Customers(){
    return(
      <div className="min-h-screen bg-gray-50 text-gray-900 pb-20">
      <PageHeader />

      <main className="max-w-6xl mx-auto px-4 mt-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 tracking-tight">Database Pelanggan</h1>
            <p className="text-sm text-gray-500">Kelola informasi kontak dan status loyalitas pelanggan Anda.</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-sm flex items-center gap-2">
            <span>+</span> Tambah Customer
          </button>
        </div>

        {/* Table Container */}
        <div className="overflow-hidden bg-white border border-gray-200 rounded-xl shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-[11px] uppercase text-gray-500 font-bold tracking-widest">
                  <th className="px-6 py-4">Customer ID</th>
                  <th className="px-6 py-4">Nama Lengkap</th>
                  <th className="px-6 py-4">Kontak</th>
                  <th className="px-6 py-4">Loyalty Rank</th>
                  <th className="px-6 py-4 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {customerData.map((customer) => (
                  <tr key={customer.CustomerID} className="hover:bg-blue-50/30 transition-colors group">
                    {/* ID */}
                    <td className="px-6 py-4 font-mono text-xs text-gray-400">
                      {customer.CustomerID}
                    </td>
                    
                    {/* Name */}
                    <td className="px-6 py-4">
                      <div className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {customer.CustomerName}
                      </div>
                    </td>

                    {/* Email & Phone */}
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-0.5">
                        <span className="text-sm text-gray-700">{customer.Email}</span>
                        <span className="text-xs text-gray-400">{customer.Phone}</span>
                      </div>
                    </td>

                    {/* Loyalty Status */}
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase border shadow-sm ${
                        customer.Loyalty === 'Gold' 
                          ? 'bg-amber-50 border-amber-200 text-amber-700' 
                          : customer.Loyalty === 'Silver' 
                          ? 'bg-slate-50 border-slate-200 text-slate-600' 
                          : 'bg-orange-50 border-orange-200 text-orange-700'
                      }`}>
                        {customer.Loyalty}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4 text-center">
                      <div className="flex justify-center gap-2">
                        <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </button>
                        <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Info */}
        <p className="mt-4 text-xs text-gray-400 text-center italic md:hidden">
          Geser tabel ke kanan untuk melihat informasi lengkap
        </p>
      </main>
    </div>
  );
}