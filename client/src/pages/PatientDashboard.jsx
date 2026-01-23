import React from 'react'
import { Link } from 'react-router-dom'

function PatientDashboard() {
    return (
        <div className="space-y-8">

            {/* --- HOŞGELDİN & AKSİYON --- */}
            <div className="flex flex-col md:flex-row justify-between items-center bg-blue-600 rounded-2xl p-8 text-white shadow-lg">
                <div>
                    <h1 className="text-3xl font-bold mb-2">Hello, Ali 👋</h1>
                    <p className="text-blue-100">You have 1 upcoming appointment.</p>
                </div>
                <div className="mt-4 md:mt-0">
                    <Link
                        to="/patient/book"
                        className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg shadow hover:bg-gray-100 transition transform hover:-translate-y-1"
                    >
                        + Book New Appointment
                    </Link>
                </div>
            </div>

            {/* --- RANDEVULARIM LİSTESİ --- */}
            <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">My Appointments</h2>

                {/* Liste Kartları */}
                <div className="grid gap-4">

                    {/* Örnek Randevu 1 */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col md:flex-row justify-between items-center hover:shadow-md transition">

                        {/* Sol: Tarih Kutusu */}
                        <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
                            <div className="bg-blue-50 text-blue-600 p-4 rounded-xl text-center min-w-[80px] mr-6">
                                <div className="text-sm font-bold uppercase">Jan</div>
                                <div className="text-3xl font-bold">25</div>
                            </div>

                            {/* Orta: Detaylar */}
                            <div>
                                <h3 className="text-lg font-bold text-gray-800">General Checkup</h3>
                                <p className="text-gray-500">Dr. Efe Hancioglu • Cardiology</p>
                                <div className="flex items-center text-sm text-gray-400 mt-1">
                                    <span className="mr-4">🕒 10:30 AM</span>
                                    <span>📍 Room 302</span>
                                </div>
                            </div>
                        </div>

                        {/* Sağ: Durum Etiketi */}
                        <div>
                            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold">
                                Confirmed
                            </span>
                        </div>

                    </div>

                    {/* Geçmiş Randevu (Örnek) */}
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 flex flex-col md:flex-row justify-between items-center opacity-75">
                        <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
                            <div className="bg-gray-200 text-gray-500 p-4 rounded-xl text-center min-w-[80px] mr-6">
                                <div className="text-sm font-bold uppercase">Dec</div>
                                <div className="text-3xl font-bold">12</div>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-700">Dental Cleaning</h3>
                                <p className="text-gray-500">Dr. Sarah Smith • Dentist</p>
                            </div>
                        </div>
                        <div>
                            <span className="bg-gray-200 text-gray-600 px-4 py-2 rounded-full text-sm font-bold">
                                Completed
                            </span>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default PatientDashboard