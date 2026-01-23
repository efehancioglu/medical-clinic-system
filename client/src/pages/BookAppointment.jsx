import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// GEÇİCİ VERİ (SEED DATA) - Backend bağlanınca burası veritabanından gelecek
const DOCTORS = [
    { id: 1, name: 'Dr. Efe Hancioglu', dept: 'Cardiology', image: '❤️' },
    { id: 2, name: 'Dr. Sarah Smith', dept: 'Dermatology', image: '💧' },
    { id: 3, name: 'Dr. John Doe', dept: 'Neurology', image: '🧠' },
]

const SLOTS = [
    '09:00', '09:30', '10:00', '11:30', '13:00', '14:15', '16:00'
]

function BookAppointment() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1); // Hangi adımdayız?
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [selectedSlot, setSelectedSlot] = useState(null);

    const handleConfirm = () => {
        // Burada ileride Backend'e POST isteği atacağız
        alert(`Appointment Confirmed!\nDoctor: ${selectedDoctor.name}\nTime: ${selectedSlot}`);
        navigate('/patient-dashboard'); // Ana sayfaya yönlendir
    }

    return (
        <div className="max-w-3xl mx-auto">

            {/* --- BAŞLIK --- */}
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Book an Appointment</h1>

            {/* --- İLERLEME ÇUBUĞU (STEPPER) --- */}
            <div className="flex items-center mb-8">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>1</div>
                <div className={`flex-1 h-1 mx-2 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>2</div>
                <div className={`flex-1 h-1 mx-2 ${step >= 3 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>3</div>
            </div>

            {/* --- ADIM 1: DOKTOR SEÇİMİ --- */}
            {step === 1 && (
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-700">Select a Doctor</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {DOCTORS.map((doc) => (
                            <div
                                key={doc.id}
                                onClick={() => setSelectedDoctor(doc)}
                                className={`p-4 rounded-xl border-2 cursor-pointer flex items-center transition ${selectedDoctor?.id === doc.id
                                    ? 'border-blue-500 bg-blue-50'
                                    : 'border-gray-200 hover:border-blue-200'
                                    }`}
                            >
                                <div className="text-4xl mr-4">{doc.image}</div>
                                <div>
                                    <h3 className="font-bold text-gray-800">{doc.name}</h3>
                                    <p className="text-sm text-gray-500">{doc.dept}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-end mt-6">
                        <button
                            disabled={!selectedDoctor}
                            onClick={() => setStep(2)}
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition"
                        >
                            Next: Select Time →
                        </button>
                    </div>
                </div>
            )}

            {/* --- ADIM 2: SAAT SEÇİMİ --- */}
            {step === 2 && (
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-700">Select a Time Slot</h2>
                    <p className="text-sm text-gray-500">Showing available slots for {selectedDoctor?.name}</p>

                    <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                        {SLOTS.map((slot) => (
                            <button
                                key={slot}
                                onClick={() => setSelectedSlot(slot)}
                                className={`py-3 rounded-lg font-medium border transition ${selectedSlot === slot
                                    ? 'bg-blue-600 text-white border-blue-600'
                                    : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'
                                    }`}
                            >
                                {slot}
                            </button>
                        ))}
                    </div>

                    <div className="flex justify-between mt-6">
                        <button onClick={() => setStep(1)} className="text-gray-500 hover:text-gray-800 font-medium">
                            ← Back
                        </button>
                        <button
                            disabled={!selectedSlot}
                            onClick={() => setStep(3)}
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition"
                        >
                            Next: Confirm →
                        </button>
                    </div>
                </div>
            )}

            {/* --- ADIM 3: ÖZET VE ONAY --- */}
            {step === 3 && (
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center space-y-6">
                    <div className="text-6xl">✅</div>
                    <h2 className="text-2xl font-bold text-gray-800">Confirm Appointment?</h2>

                    <div className="bg-gray-50 p-4 rounded-lg inline-block text-left mx-auto">
                        <p className="mb-2"><span className="font-bold text-gray-600">Doctor:</span> {selectedDoctor?.name}</p>
                        <p className="mb-2"><span className="font-bold text-gray-600">Department:</span> {selectedDoctor?.dept}</p>
                        <p className="mb-2"><span className="font-bold text-gray-600">Date:</span> Jan 25, 2026 (Tomorrow)</p>
                        <p><span className="font-bold text-gray-600">Time:</span> {selectedSlot}</p>
                    </div>

                    <div className="flex justify-center space-x-4 pt-4">
                        <button onClick={() => setStep(2)} className="text-gray-500 hover:text-gray-800 font-medium px-4">
                            Back
                        </button>
                        <button
                            onClick={handleConfirm}
                            className="bg-green-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-green-700 shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
                        >
                            Confirm Booking
                        </button>
                    </div>
                </div>
            )}

        </div>
    )
}

export default BookAppointment