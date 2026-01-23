import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    // Hangi rolün seçili olduğunu tutan state (Varsayılan: doctor)
    const [role, setRole] = useState('doctor'); // 'doctor' or 'patient'
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // GEÇİCİ YÖNLENDİRME (Backend bağlanana kadar):
        if (role === 'doctor') {
            navigate('/dashboard'); // Doktor ana sayfasına git
        } else {
            navigate('/patient-dashboard'); // Hasta sayfasına git (Bunu birazdan yapacağız)
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">

                {/* --- BAŞLIK --- */}
                <h2 className="text-3xl font-bold text-center text-blue-900 mb-2">
                    Clinic System
                </h2>
                <p className="text-center text-gray-500 mb-6 text-sm">
                    Please select your login type
                </p>

                {/* --- SEKMELER (TABS) --- */}
                <div className="flex bg-gray-100 p-1 rounded-lg mb-6">
                    {/* Doktor Sekmesi */}
                    <button
                        onClick={() => setRole('doctor')}
                        className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${role === 'doctor'
                                ? 'bg-white text-blue-600 shadow-sm'
                                : 'text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        👨‍⚕️ Doctor Login
                    </button>

                    {/* Hasta Sekmesi */}
                    <button
                        onClick={() => setRole('patient')}
                        className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${role === 'patient'
                                ? 'bg-white text-blue-600 shadow-sm'
                                : 'text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        🤕 Patient Login
                    </button>
                </div>

                {/* --- FORM --- */}
                <form onSubmit={handleLogin} className="space-y-6">

                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            {role === 'doctor' ? 'Doctor Email' : 'Patient Identity / Email'}
                        </label>
                        <input
                            type="text"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            placeholder={role === 'doctor' ? 'doctor@clinic.com' : 'patient@gmail.com'}
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transform hover:-translate-y-0.5 transition duration-200"
                    >
                        Sign In as {role === 'doctor' ? 'Doctor' : 'Patient'}
                    </button>

                </form>

                {/* --- ALT BİLGİ --- */}
                {role === 'patient' && (
                    <div className="mt-6 text-center text-sm">
                        <span className="text-gray-500">New patient? </span>
                        <Link to="/register" className="text-blue-600 font-bold hover:underline">
                            Create Appointment Record
                        </Link>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Login