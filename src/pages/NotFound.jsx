export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center overflow-hidden font-sans">
      {/* Background Glow Effect */}
      <div className="absolute w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] -z-0"></div>

      <div className="relative z-10 text-center px-4">
        {/* Large Watermark 404 */}
        <h1 className="text-[12rem] md:text-[20rem] font-black text-white/[0.03] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
          404
        </h1>

        {/* Rank Icon Simulation */}
        <div className="relative mb-8">
          <div className="w-24 h-24 md:w-32 md:h-32 mx-auto bg-gradient-to-br from-yellow-600 via-yellow-400 to-yellow-700 p-1 rotate-45 shadow-[0_0_30px_rgba(234,179,8,0.3)]">
            <div className="w-full h-full bg-[#1e293b] flex items-center justify-center">
              <span className="-rotate-45 text-4xl md:text-5xl">🛡️</span>
            </div>
          </div>
          {/* Decorative Wings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-1 bg-yellow-500/20 blur-sm -z-10"></div>
        </div>

        {/* Status Text */}
        <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-yellow-600 tracking-[0.2em] uppercase italic mb-2">
          Defeat
        </h2>
        <div className="h-[2px] w-32 bg-yellow-600/50 mx-auto mb-6"></div>

        <p className="text-slate-400 text-sm md:text-base max-w-sm mx-auto mb-10 tracking-wide uppercase italic">
          "Initiate Retreat! Halaman tidak ditemukan atau telah tereliminasi."
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4 items-center">
          <button 
            onClick={() => window.location.href = '/'}
            className="group relative w-64 py-3 bg-gradient-to-b from-yellow-400 to-yellow-600 hover:from-yellow-300 hover:to-yellow-500 transition-all shadow-[0_0_15px_rgba(234,179,8,0.4)] active:scale-95"
          >
            <span className="text-slate-900 font-bold tracking-tighter uppercase">
              Kembali ke Lobby
            </span>
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white/50"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white/50"></div>
          </button>

          <button 
            onClick={() => window.history.back()}
            className="w-64 py-3 border border-slate-700 hover:border-blue-500 hover:text-blue-400 text-slate-500 font-bold transition-all uppercase text-sm tracking-widest"
          >
            Reconnect
          </button>
        </div>

        {/* Footer Decor */}
        <div className="mt-12 opacity-30 flex items-center justify-center gap-4">
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-yellow-500"></div>
          <div className="w-2 h-2 rotate-45 bg-yellow-500"></div>
          <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-yellow-500"></div>
        </div>
      </div>
    </div>
  );
}