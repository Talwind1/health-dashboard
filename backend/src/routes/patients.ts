import { Router, Request, Response } from 'express';
import { patients, biomarkers } from '../data/mockData';

const router = Router();

// GET /api/patients - Get all patients
router.get('/', (req: Request, res: Response) => {
  res.json(patients);
});

// GET /api/patients/:id/biomarkers - Get biomarkers for a specific patient
router.get('/:id/biomarkers', (req: Request, res: Response) => {
  const { id } = req.params;
  const { category } = req.query;

  // Find patient
  const patient = patients.find(p => p.id === id);
  
  if (!patient) {
    return res.status(404).json({ error: 'Patient not found' });
  }

  // Filter biomarkers by patient
  let patientBiomarkers = biomarkers.filter(b => b.patientId === id);

  // Filter by category if provided
  if (category && typeof category === 'string') {
    patientBiomarkers = patientBiomarkers.filter(
      b => b.category === category
    );
  }

  res.json(patientBiomarkers);
});

export default router;