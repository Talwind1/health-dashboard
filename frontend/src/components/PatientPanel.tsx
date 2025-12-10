import type { Patient, Biomarker } from '../services/api';
import BiomarkerTable from './BiomarkerTable';
import BiomarkerChart from './BiomarkerChart';

interface PatientPanelProps {
  selectedPatient: Patient | null;
  biomarkers: Biomarker[];
  loading: boolean;
  error: string | null;
}

const PatientPanel = ({
  selectedPatient,
  biomarkers,
  loading,
  error,
}: PatientPanelProps) => {
  if (!selectedPatient) {
    return (
      <div className="empty-state">
        <div className="empty-state-icon">👈</div>
        <h2 className="empty-state-text">
          Select a patient to view their biomarkers
        </h2>
      </div>
    );
  }

  const isBiomarkersLoading = loading;
  const hasError = !!error;
  const hasBiomarkers = biomarkers.length > 0;

  return (
    <>
      <div className="patient-info-card">
        <h2>{selectedPatient.name}</h2>
        <p>
          <strong>Date of Birth:</strong>{' '}
          {new Date(selectedPatient.dateOfBirth).toLocaleDateString()}
        </p>
        <p>
          <strong>Last Visit:</strong>{' '}
          {new Date(selectedPatient.lastVisit).toLocaleDateString()}
        </p>
      </div>

      {isBiomarkersLoading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p className="loading-text">Loading biomarkers...</p>
        </div>
      ) : hasError ? (
        <div className="error-container">
          <p>❌ {error}</p>
        </div>
      ) : hasBiomarkers ? (
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
  );
};

export default PatientPanel;
