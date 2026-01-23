import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function PatientLayout() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">

            {/* --- ÜST MENÜ (NAVBAR) --- */}
            <nav className="bg-white shadow-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">

                        {/* Logo */}
                        <div className="flex items-center">
                            <span className="text-2xl mr-2">🏥</span>
                            <span className="font-bold text-gray-800 text-lg">My Clinic Portal</span>
                        </div>

                        {/* Sağ Linkler */}
                        <div className="flex items-center space-x-4">
                            <span className="text-sm text-gray-500 hidden md:block">
                                Welcome, Ali Yılmaz
                            </span>
                            <Link
                                to="/login"
                                className="text-sm text-red-500 hover:text-red-700 font-medium border border-red-100 px-3 py-1 rounded bg-red-50"
                            >
                                Logout
                            </Link>
                        </div>

                    </div>
                </div>
            </nav>

            {/* --- İÇERİK ALANI --- */}
            {/* max-w-7xl: İçerik çok yayılmasın, derli toplu dursun */}
            <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Outlet />
            </main>

            {/* --- BASİT FOOTER --- */}
            <footer className="bg-white border-t border-gray-200 mt-auto">
                <div className="max-w-7xl mx-auto py-6 px-4 text-center text-sm text-gray-400">
                    © 2026 Clinic Management System
                </div>
            </footer>

        </div>
    )
}

export default PatientLayout