import type { Patient } from '../types/index';

interface PatientListProps {
  patients: Patient[];
  onSelectPatient: (patient: Patient) => void;
  selectedPatientId?: string;
}

const PatientList = ({ patients, onSelectPatient, selectedPatientId }: PatientListProps) => {
  return (
    <div style={{ padding: '20px', borderRight: '1px solid #ccc' }}>
      <h2>Patients</h2>
      <div>
        {patients.map(patient => (
          <div
            key={patient.id}
            onClick={() => onSelectPatient(patient)}
            style={{
              padding: '15px',
              margin: '10px 0',
              border: '1px solid #ddd',
              borderRadius: '8px',
              cursor: 'pointer',
              backgroundColor: selectedPatientId === patient.id ? '#e3f2fd' : 'white'
            }}
          >
            <h3 style={{ margin: '0 0 8px 0' }}>{patient.name}</h3>
            <p style={{ margin: '4px 0', color: '#666', fontSize: '14px' }}>
              DOB: {new Date(patient.dateOfBirth).toLocaleDateString()}
            </p>
            <p style={{ margin: '4px 0', color: '#666', fontSize: '14px' }}>
              Last Visit: {new Date(patient.lastVisit).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientList;