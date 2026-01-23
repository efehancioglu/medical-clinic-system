import React from "react"
import { Link } from "react-router-dom"

function Login() {
    return (
        // 1. Container: Full screen height, centered content, gray background
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            {/* 2. Card: White background, rounded corners, shadow */}
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">

                {/* Header Section */}
                <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
                    Sign In
                </h2>

                {/* Login Form */}
                <form className="space-y-6">

                    {/* Email Input */}
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            placeholder="admin@hospital.com"
                        />
                    </div>

                    {/* Password Input */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-gray-700 text-sm font-bold">
                                Password
                            </label>
                            <a href="#" className="text-xs text-blue-500 hover:underline">
                                Forgot Password?
                            </a>
                        </div>
                        <input
                            type="password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            placeholder="••••••••"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="button"
                        className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-0.5 transition duration-200"
                    >
                        Sign In
                    </button>

                </form>

                {/* Footer Link */}
                <div className="mt-6 text-center text-sm text-gray-500">
                    <p>
                        Don't have an account?{' '}
                        <Link to="/" className="text-blue-600 font-bold hover:underline">
                            Contact Admin
                        </Link>
                    </p>
                    <div className="mt-4">
                        <Link to="/" className="text-gray-400 hover:text-gray-600 transition">
                            ← Back to Home
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login