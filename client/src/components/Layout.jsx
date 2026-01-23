import { Outlet, Link } from 'react-router-dom'

function Layout() {
    return (
        // ANA KAPLAYICI: Ekranı tamamen kapla (h-screen) ve yan yana diz (flex)
        <div className="flex h-screen bg-gray-100">

            {/* --- SOL MENÜ (SIDEBAR) --- */}
            {/* Genişlik sabit (w-64), koyu renk, yazı beyaz */}
            <div className="w-64 bg-gray-900 text-white flex flex-col">

                {/* Logo Alanı */}
                <div className="h-16 flex items-center justify-center border-b border-gray-800 font-bold text-xl tracking-wider">
                    CLINIC SYSTEM
                </div>

                {/* Linkler */}
                <nav className="flex-1 px-2 py-4 space-y-2">

                    <Link to="/dashboard" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded transition">
                        <span className="mr-3">🏠</span>
                        Dashboard
                    </Link>

                    <Link to="/dashboard/appointments" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded transition">
                        <span className="mr-3">📅</span>
                        Appointments
                    </Link>

                    <Link to="/dashboard/patients" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded transition">
                        <span className="mr-3">👥</span>
                        Patients
                    </Link>

                </nav>

                {/* Alt Kısım (Çıkış) */}
                <div className="p-4 border-t border-gray-800">
                    <Link to="/login" className="flex items-center px-4 py-2 text-red-400 hover:bg-gray-800 rounded transition">
                        <span className="mr-3">🚪</span>
                        Logout
                    </Link>
                </div>

            </div>

            {/* --- SAĞ TARAF (İÇERİK ALANI) --- */}
            {/* flex-1: Geri kalan tüm boşluğu kapla */}
            <div className="flex-1 flex flex-col overflow-hidden">

                {/* Üst Bar (Header) */}
                <header className="h-16 bg-white shadow-sm flex items-center justify-between px-6">
                    <div className="text-gray-500 text-sm">
                        Welcome, <span className="font-bold text-gray-800">Dr. Efe Hancioglu</span>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition">
                        + New Appointment
                    </button>
                </header>

                {/* DEĞİŞEN İÇERİK (OUTLET) */}
                {/* Burası sayfaya göre değişecek olan kısım */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
                    <Outlet />
                </main>

            </div>

        </div>
    )
}

export default Layout