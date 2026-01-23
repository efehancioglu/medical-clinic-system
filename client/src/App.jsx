import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';

import Layout from './components/Layout';
import PatientLayout from './components/PatientLayout';
import PatientDashboard from './pages/PatientDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>


        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path="/dashboard" element={<Layout />}>


          <Route index element={<Dashboard />} />


        </Route>

        <Route path='/patient-dashboard' element={<PatientLayout />}>
          <Route index element={<PatientDashboard />} />
          <Route path='book' element={
            <div>
              Randevu Alma Sayasi (Yapilacak)
            </div>
          } />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
