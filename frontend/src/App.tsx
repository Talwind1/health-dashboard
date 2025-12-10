import { useState, useEffect } from 'react';
import { api, type Patient, type Biomarker } from './services/api';
import Sidebar from './components/SideBar';
import PatientPanel from './components/PatientPanel';
import './App.css';

function App() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [biomarkers, setBiomarkers] = useState<Biomarker[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        setLoading(true);
        const data = await api.getPatients();
        setPatients(data);
      } catch (err) {
        setError('Failed to load patients');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  useEffect(() => {
    if (!selectedPatient) return;

    const fetchBiomarkers = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await api.getBiomarkers(selectedPatient.id);
        setBiomarkers(data);
      } catch (err) {
        setError('Failed to load biomarkers');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBiomarkers();
  }, [selectedPatient]);

  const handleSelectPatient = (patient: Patient) => {
    setSelectedPatient(patient);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🏥 Health Dashboard</h1>
      </header>

      <div className="app-main">
        <Sidebar
          patients={patients}
          loading={loading}
          error={error}
          selectedPatientId={selectedPatient?.id}
          onSelectPatient={handleSelectPatient}
        />

        <main className="main-content">
          <PatientPanel
            selectedPatient={selectedPatient}
            biomarkers={biomarkers}
            loading={loading}
            error={error}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
