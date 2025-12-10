import type { Patient } from '../services/api';

interface PatientListProps {
  patients: Patient[];
  onSelectPatient: (patient: Patient) => void;
  selectedPatientId?: Patient['id'];
}

const PatientList = ({ patients, onSelectPatient, selectedPatientId }: PatientListProps) => {
  return (
    <div className="patient-list-container">
      <h2 className="patient-list-title">Patients</h2>
      <div className="patient-list-items">
        {patients.map((patient) => {
          const isSelected = selectedPatientId === patient.id;

          return (
            <div
              key={patient.id}
              onClick={() => onSelectPatient(patient)}
              className={`patient-list-item ${isSelected ? 'patient-list-item-selected' : ''}`}
            >
              <h3 className="patient-list-name">{patient.name}</h3>
              <p className="patient-list-meta">
                DOB: {new Date(patient.dateOfBirth).toLocaleDateString()}
              </p>
              <p className="patient-list-meta">
                Last Visit: {new Date(patient.lastVisit).toLocaleDateString()}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PatientList;
