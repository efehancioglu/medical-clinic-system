import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            {/* Kart Yapısı */}
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">

                <h2 className="text-3xl font-bold text-center text-blue-900 mb-2">
                    New Patient Record
                </h2>
                <p className="text-center text-gray-500 mb-8 text-sm">
                    Create an account to book appointments
                </p>

                <form className="space-y-4">

                    {/* Ad Soyad */}
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Full Name
                        </label>
                        <input
                            type="text"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            placeholder="John Doe"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            placeholder="john@example.com"
                        />
                    </div>

                    {/* Şifre */}
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

                    {/* Şifre Tekrar */}
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            placeholder="••••••••"
                        />
                    </div>

                    {/* Kayıt Butonu */}
                    <button
                        type="button"
                        className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transform hover:-translate-y-0.5 transition duration-200 mt-4"
                    >
                        Create Account
                    </button>

                </form>

                {/* Login'e Dönüş Linki */}
                <div className="mt-6 text-center text-sm text-gray-500">
                    <p>
                        Already have an account?{' '}
                        <Link to="/login" className="text-blue-600 font-bold hover:underline">
                            Sign In
                        </Link>
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Register