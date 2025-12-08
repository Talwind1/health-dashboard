// Define types here directly
export interface Patient {
    id: string;
    name: string;
    dateOfBirth: string;
    lastVisit: string;
  }
  
  export interface Biomarker {
    id: string;
    patientId: string;
    name: string;
    value: number;
    unit: string;
    category: 'metabolic' | 'cardiovascular' | 'hormonal';
    referenceRange: {
      min: number;
      max: number;
    };
    measuredAt: string;
    status: 'normal' | 'high' | 'low';
  }
  
  const API_BASE_URL = 'http://localhost:3000/api';
  
  export const api = {
    getPatients: async (): Promise<Patient[]> => {
      const response = await fetch(`${API_BASE_URL}/patients`);
      if (!response.ok) throw new Error('Failed to fetch patients');
      return response.json();
    },
  
    getBiomarkers: async (
      patientId: string,
      category?: string
    ): Promise<Biomarker[]> => {
      const url = category
        ? `${API_BASE_URL}/patients/${patientId}/biomarkers?category=${category}`
        : `${API_BASE_URL}/patients/${patientId}/biomarkers`;
      
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch biomarkers');
      return response.json();
    }
  };