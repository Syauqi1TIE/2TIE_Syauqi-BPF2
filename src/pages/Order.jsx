import PageHeader from "../components/PageHeader";
import orderData from "../dataorder.json";
export default function Orders(){
    return(
       <div className="min-h-screen bg-gray-50 text-gray-900 pb-20">
      <PageHeader />

      <main className="max-w-6xl mx-auto px-4 mt-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Daftar Pesanan</h1>
            <p className="text-sm text-gray-500">Kelola dan pantau semua transaksi masuk Anda.</p>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-gray-600 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
            Total Pesanan: <span className="text-blue-600">{orderData.length}</span>
          </div>
        </div>

        {/* Table Desktop View */}
        <div className="hidden md:block overflow-hidden bg-white border border-gray-200 rounded-xl shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-500 font-semibold tracking-wider">
                <th className="px-6 py-4">Order ID</th>
                <th className="px-6 py-4">Nama Pelanggan</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Tanggal</th>
                <th className="px-6 py-4 text-right">Total Harga</th>
                <th className="px-6 py-4 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {orderData.map((order) => (
                <tr key={order.OrderID} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-blue-600 text-sm">
                    {order.OrderID}
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-700">
                    {order.CustomerName}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                      order.Status === 'Completed' ? 'bg-green-50 border-green-200 text-green-700' : 
                      order.Status === 'Pending' ? 'bg-yellow-50 border-yellow-200 text-yellow-700' : 
                      'bg-red-50 border-red-200 text-red-700'
                    }`}>
                      {order.Status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {order.OrderDate}
                  </td>
                  <td className="px-6 py-4 text-sm text-right font-bold text-gray-800">
                    Rp {order.TotalPrice.toLocaleString('id-ID')}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-gray-400 hover:text-blue-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View (Card List) */}
        <div className="grid gap-4 md:hidden">
          {orderData.map((order) => (
            <div key={order.OrderID} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-medium text-blue-600 uppercase tracking-tighter">{order.OrderID}</span>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase border ${
                   order.Status === 'Completed' ? 'bg-green-50 border-green-200 text-green-700' : 
                   order.Status === 'Pending' ? 'bg-yellow-50 border-yellow-200 text-yellow-700' : 
                   'bg-red-50 border-red-200 text-red-700'
                }`}>
                  {order.Status}
                </span>
              </div>
              <h3 className="font-bold text-gray-800">{order.CustomerName}</h3>
              <div className="flex justify-between items-end mt-4">
                <span className="text-xs text-gray-400">{order.OrderDate}</span>
                <span className="font-bold text-gray-900 text-sm">Rp {order.TotalPrice.toLocaleString('id-ID')}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}