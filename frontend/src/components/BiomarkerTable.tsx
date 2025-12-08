import { useState } from 'react';
import type { Biomarker } from '../types/index';

interface BiomarkerTableProps {
  biomarkers: Biomarker[];
}

const BiomarkerTable = ({ biomarkers }: BiomarkerTableProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredBiomarkers = selectedCategory === 'all'
    ? biomarkers
    : biomarkers.filter(b => b.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal': return '#4caf50';
      case 'high': return '#ff9800';
      case 'low': return '#f44336';
      default: return '#666';
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ marginRight: '10px', fontWeight: 'bold' }}>
          Filter by Category:
        </label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{
            padding: '8px 12px',
            borderRadius: '4px',
            border: '1px solid #ddd'
          }}
        >
          <option value="all">All Categories</option>
          <option value="metabolic">Metabolic</option>
          <option value="cardiovascular">Cardiovascular</option>
          <option value="hormonal">Hormonal</option>
        </select>
      </div>

      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        border: '1px solid #ddd'
      }}>
        <thead>
          <tr style={{ backgroundColor: '#f5f5f5' }}>
            <th style={headerStyle}>Name</th>
            <th style={headerStyle}>Value</th>
            <th style={headerStyle}>Unit</th>
            <th style={headerStyle}>Reference Range</th>
            <th style={headerStyle}>Status</th>
            <th style={headerStyle}>Date Measured</th>
          </tr>
        </thead>
        <tbody>
          {filteredBiomarkers.map(biomarker => (
            <tr key={biomarker.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={cellStyle}>{biomarker.name}</td>
              <td style={cellStyle}><strong>{biomarker.value}</strong></td>
              <td style={cellStyle}>{biomarker.unit}</td>
              <td style={cellStyle}>
                {biomarker.referenceRange.min} - {biomarker.referenceRange.max}
              </td>
              <td style={{
                ...cellStyle,
                color: getStatusColor(biomarker.status),
                fontWeight: 'bold'
              }}>
                {biomarker.status.toUpperCase()}
              </td>
              <td style={cellStyle}>
                {new Date(biomarker.measuredAt).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {filteredBiomarkers.length === 0 && (
        <p style={{ textAlign: 'center', padding: '20px', color: '#666' }}>
          No biomarkers found for this category.
        </p>
      )}
    </div>
  );
};

const headerStyle = {
  padding: '12px',
  textAlign: 'left' as const,
  borderBottom: '2px solid #ddd',
  fontWeight: 'bold'
};

const cellStyle = {
  padding: '12px',
  textAlign: 'left' as const
};

export default BiomarkerTable;