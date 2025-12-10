import { useState } from 'react';
import type { Biomarker } from '../types';

interface BiomarkerTableProps {
  biomarkers: Biomarker[];
}

const BiomarkerTable = ({ biomarkers }: BiomarkerTableProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredBiomarkers =
    selectedCategory === 'all'
      ? biomarkers
      : biomarkers.filter((b) => b.category === selectedCategory);

  return (
    <div className="biomarker-table-container">
      <div className="biomarker-filter">
        <label
          htmlFor="biomarker-category-select"
          className="biomarker-filter-label"
        >
          Filter by Category:
        </label>
        <select
          id="biomarker-category-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="biomarker-filter-select"
        >
          <option value="all">All Categories</option>
          <option value="metabolic">Metabolic</option>
          <option value="cardiovascular">Cardiovascular</option>
          <option value="hormonal">Hormonal</option>
        </select>
      </div>

      <div className="biomarker-table-wrapper">
        <table className="biomarker-table">
          <thead>
            <tr>
              <th className="biomarker-table-header">Name</th>
              <th className="biomarker-table-header">Value</th>
              <th className="biomarker-table-header">Unit</th>
              <th className="biomarker-table-header">Reference Range</th>
              <th className="biomarker-table-header">Status</th>
              <th className="biomarker-table-header">Date Measured</th>
            </tr>
          </thead>
          <tbody>
            {filteredBiomarkers.map((biomarker) => (
              <tr key={biomarker.id} className="biomarker-table-row">
                <td className="biomarker-table-cell">{biomarker.name}</td>
                <td className="biomarker-table-cell">
                  <strong>{biomarker.value}</strong>
                </td>
                <td className="biomarker-table-cell">{biomarker.unit}</td>
                <td className="biomarker-table-cell">
                  {biomarker.referenceRange.min} -{' '}
                  {biomarker.referenceRange.max}
                </td>
                <td
                  className={`
                    biomarker-table-cell 
                    biomarker-status 
                    biomarker-status-${biomarker.status}
                  `}
                >
                  {biomarker.status.toUpperCase()}
                </td>
                <td className="biomarker-table-cell">
                  {new Date(biomarker.measuredAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredBiomarkers.length === 0 && (
        <p className="biomarker-table-empty">
          No biomarkers found for this category.
        </p>
      )}
    </div>
  );
};

export default BiomarkerTable;
