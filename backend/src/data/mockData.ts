import { Patient, Biomarker } from '../types';

export const patients: Patient[] = [
  {
    id: '1',
    name: 'John Doe',
    dateOfBirth: '1985-03-15',
    lastVisit: '2024-12-01'
  },
  {
    id: '2',
    name: 'Jane Smith',
    dateOfBirth: '1990-07-22',
    lastVisit: '2024-11-28'
  },
  {
    id: '3',
    name: 'Mike Johnson',
    dateOfBirth: '1978-11-30',
    lastVisit: '2024-12-05'
  }
];

export const biomarkers: Biomarker[] = [
  // Patient 1 - John Doe
  {
    id: 'b1',
    patientId: '1',
    name: 'Glucose',
    value: 95,
    unit: 'mg/dL',
    category: 'metabolic',
    referenceRange: { min: 70, max: 100 },
    measuredAt: '2024-12-01T09:00:00Z',
    status: 'normal'
  },
  {
    id: 'b2',
    patientId: '1',
    name: 'Cholesterol',
    value: 220,
    unit: 'mg/dL',
    category: 'cardiovascular',
    referenceRange: { min: 125, max: 200 },
    measuredAt: '2024-12-01T09:00:00Z',
    status: 'high'
  },
  {
    id: 'b3',
    patientId: '1',
    name: 'HDL',
    value: 45,
    unit: 'mg/dL',
    category: 'cardiovascular',
    referenceRange: { min: 40, max: 60 },
    measuredAt: '2024-12-01T09:00:00Z',
    status: 'normal'
  },
  {
    id: 'b4',
    patientId: '1',
    name: 'Testosterone',
    value: 350,
    unit: 'ng/dL',
    category: 'hormonal',
    referenceRange: { min: 300, max: 1000 },
    measuredAt: '2024-12-01T09:00:00Z',
    status: 'normal'
  },
  {
    id: 'b5',
    patientId: '1',
    name: 'Triglycerides',
    value: 180,
    unit: 'mg/dL',
    category: 'metabolic',
    referenceRange: { min: 0, max: 150 },
    measuredAt: '2024-12-01T09:00:00Z',
    status: 'high'
  },
  
  // Patient 2 - Jane Smith
  {
    id: 'b6',
    patientId: '2',
    name: 'Glucose',
    value: 88,
    unit: 'mg/dL',
    category: 'metabolic',
    referenceRange: { min: 70, max: 100 },
    measuredAt: '2024-11-28T10:30:00Z',
    status: 'normal'
  },
  {
    id: 'b7',
    patientId: '2',
    name: 'Blood Pressure (Systolic)',
    value: 145,
    unit: 'mmHg',
    category: 'cardiovascular',
    referenceRange: { min: 90, max: 120 },
    measuredAt: '2024-11-28T10:30:00Z',
    status: 'high'
  },
  {
    id: 'b8',
    patientId: '2',
    name: 'TSH',
    value: 2.5,
    unit: 'mIU/L',
    category: 'hormonal',
    referenceRange: { min: 0.4, max: 4.0 },
    measuredAt: '2024-11-28T10:30:00Z',
    status: 'normal'
  },
  {
    id: 'b9',
    patientId: '2',
    name: 'HbA1c',
    value: 5.4,
    unit: '%',
    category: 'metabolic',
    referenceRange: { min: 4.0, max: 5.6 },
    measuredAt: '2024-11-28T10:30:00Z',
    status: 'normal'
  },
  {
    id: 'b10',
    patientId: '2',
    name: 'Cortisol',
    value: 18,
    unit: 'μg/dL',
    category: 'hormonal',
    referenceRange: { min: 6, max: 23 },
    measuredAt: '2024-11-28T10:30:00Z',
    status: 'normal'
  },
  
  // Patient 3 - Mike Johnson
  {
    id: 'b11',
    patientId: '3',
    name: 'Glucose',
    value: 65,
    unit: 'mg/dL',
    category: 'metabolic',
    referenceRange: { min: 70, max: 100 },
    measuredAt: '2024-12-05T08:00:00Z',
    status: 'low'
  },
  {
    id: 'b12',
    patientId: '3',
    name: 'LDL',
    value: 95,
    unit: 'mg/dL',
    category: 'cardiovascular',
    referenceRange: { min: 0, max: 100 },
    measuredAt: '2024-12-05T08:00:00Z',
    status: 'normal'
  },
  {
    id: 'b13',
    patientId: '3',
    name: 'Heart Rate',
    value: 72,
    unit: 'bpm',
    category: 'cardiovascular',
    referenceRange: { min: 60, max: 100 },
    measuredAt: '2024-12-05T08:00:00Z',
    status: 'normal'
  },
  {
    id: 'b14',
    patientId: '3',
    name: 'Vitamin D',
    value: 22,
    unit: 'ng/mL',
    category: 'hormonal',
    referenceRange: { min: 30, max: 100 },
    measuredAt: '2024-12-05T08:00:00Z',
    status: 'low'
  },
  {
    id: 'b15',
    patientId: '3',
    name: 'Insulin',
    value: 8,
    unit: 'μIU/mL',
    category: 'metabolic',
    referenceRange: { min: 2, max: 25 },
    measuredAt: '2024-12-05T08:00:00Z',
    status: 'normal'
  }
];