import React from 'react'

function Dashboard() {
    return (
        <div className="space-y-6">

            {/* --- BAŞLIK BÖLÜMÜ --- */}
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
                    <p className="text-gray-500">Welcome back, here is what's happening today.</p>
                </div>
                <div className="text-sm text-gray-500 bg-white px-3 py-1 rounded shadow-sm">
                    📅 Today: Jan 23, 2026
                </div>
            </div>

            {/* --- İSTATİSTİK KARTLARI (GRID) --- */}
            {/* Mobilde 1, Tablette 2, Bilgisayarda 4 kutu yan yana */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* Kart 1: Toplam Hasta */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center">
                    <div className="p-3 bg-blue-100 text-blue-600 rounded-lg text-2xl mr-4">
                        👥
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">Total Patients</p>
                        <h3 className="text-2xl font-bold text-gray-800">1,245</h3>
                    </div>
                </div>

                {/* Kart 2: Bugünkü Randevular */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center">
                    <div className="p-3 bg-purple-100 text-purple-600 rounded-lg text-2xl mr-4">
                        📅
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">Appointments Today</p>
                        <h3 className="text-2xl font-bold text-gray-800">8</h3>
                    </div>
                </div>

                {/* Kart 3: Bekleyen İşlemler */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center">
                    <div className="p-3 bg-orange-100 text-orange-600 rounded-lg text-2xl mr-4">
                        ⏳
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">Pending</p>
                        <h3 className="text-2xl font-bold text-gray-800">3</h3>
                    </div>
                </div>

                {/* Kart 4: Toplam Gelir (Opsiyonel) */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center">
                    <div className="p-3 bg-green-100 text-green-600 rounded-lg text-2xl mr-4">
                        💵
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">Total Revenue</p>
                        <h3 className="text-2xl font-bold text-gray-800">$12,400</h3>
                    </div>
                </div>

            </div>

            {/* --- ALT BÖLÜM: TABLO VE GRAFİK YERİ --- */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Sol Taraf: Son Randevular Tablosu (2 birim yer kaplar) */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Appointments</h3>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-gray-100 text-gray-500 text-sm">
                                    <th className="pb-3">Patient</th>
                                    <th className="pb-3">Doctor</th>
                                    <th className="pb-3">Date</th>
                                    <th className="pb-3">Status</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                <tr className="border-b border-gray-50 text-gray-700 hover:bg-gray-50 transition">
                                    <td className="py-3 font-medium">Ali Yılmaz</td>
                                    <td>Dr. Efe</td>
                                    <td>10:30 AM</td>
                                    <td><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Confirmed</span></td>
                                </tr>
                                <tr className="border-b border-gray-50 text-gray-700 hover:bg-gray-50 transition">
                                    <td className="py-3 font-medium">Ayşe Demir</td>
                                    <td>Dr. Smith</td>
                                    <td>11:00 AM</td>
                                    <td><span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">Pending</span></td>
                                </tr>
                                <tr className="text-gray-700 hover:bg-gray-50 transition">
                                    <td className="py-3 font-medium">Mehmet Kaya</td>
                                    <td>Dr. Efe</td>
                                    <td>02:15 PM</td>
                                    <td><span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs">Cancelled</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Sağ Taraf: Hızlı İşlemler (1 birim yer kaplar) */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                        <button className="w-full bg-blue-50 text-blue-600 py-2 rounded-lg text-sm font-semibold hover:bg-blue-100 transition">
                            + Add New Patient
                        </button>
                        <button className="w-full bg-purple-50 text-purple-600 py-2 rounded-lg text-sm font-semibold hover:bg-purple-100 transition">
                            📅 Create Appointment
                        </button>
                        <button className="w-full bg-gray-50 text-gray-600 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition">
                            🔍 Search Records
                        </button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Dashboard