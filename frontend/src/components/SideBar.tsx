import PatientList from './PatientList';
import type { Patient } from '../services/api';

interface SidebarProps {
  patients: Patient[];
  loading: boolean;
  error: string | null;
  selectedPatientId?: Patient['id'];
  onSelectPatient: (patient: Patient) => void;
}

const Sidebar = ({
  patients,
  loading,
  error,
  selectedPatientId,
  onSelectPatient,
}: SidebarProps) => {
  const isInitialLoading = loading && patients.length === 0;
  const isInitialError = !!error && patients.length === 0;

  return (
    <aside className="sidebar">
      {isInitialLoading && (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p className="loading-text">Loading patients...</p>
        </div>
      )}

      {isInitialError && (
        <div className="error-container">
          <p>❌ {error}</p>
        </div>
      )}

      {patients.length > 0 && (
        <PatientList
          patients={patients}
          onSelectPatient={onSelectPatient}
          selectedPatientId={selectedPatientId}
        />
      )}
    </aside>
  );
};

export default Sidebar;
