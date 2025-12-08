import { useState, useEffect } from 'react';
import { api, type Patient, type Biomarker } from './services/api';
import PatientList from './components/PatientList';
import BiomarkerTable from './components/BiomarkerTable';
import BiomarkerChart from './components/BiomarkerChart';
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
        <aside className="sidebar">
          {loading && patients.length === 0 && (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p style={{ marginTop: '16px' }}>Loading patients...</p>
            </div>
          )}
          {error && patients.length === 0 && (
            <div className="error-container">
              <p>❌ {error}</p>
            </div>
          )}
          {patients.length > 0 && (
            <PatientList
              patients={patients}
              onSelectPatient={handleSelectPatient}
              selectedPatientId={selectedPatient?.id}
            />
          )}
        </aside>

        <main className="main-content">
          {!selectedPatient ? (
            <div className="empty-state">
              <div style={{ fontSize: '64px', marginBottom: '16px' }}>👈</div>
              <h2 style={{ fontSize: '20px', color: '#666' }}>Select a patient to view their biomarkers</h2>
            </div>
          ) : (
            <>
              <div className="patient-info-card">
                <h2>{selectedPatient.name}</h2>
                <p><strong>Date of Birth:</strong> {new Date(selectedPatient.dateOfBirth).toLocaleDateString()}</p>
                <p><strong>Last Visit:</strong> {new Date(selectedPatient.lastVisit).toLocaleDateString()}</p>
              </div>

              {loading ? (
                <div className="loading-container">
                  <div className="loading-spinner"></div>
                  <p style={{ marginTop: '16px' }}>Loading biomarkers...</p>
                </div>
              ) : error ? (
                <div className="error-container">
                  <p>❌ {error}</p>
                </div>
              ) : biomarkers.length > 0 ? (
                <>
                  <BiomarkerTable biomarkers={biomarkers} />
                  <BiomarkerChart biomarkers={biomarkers} />
                </>
              ) : (
                <div className="empty-state">
                  <p>No biomarkers found for this patient.</p>
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;