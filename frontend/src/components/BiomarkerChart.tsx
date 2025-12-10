import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import type { Biomarker } from '../types';

interface BiomarkerChartProps {
  biomarkers: Biomarker[];
}

const BiomarkerChart = ({ biomarkers }: BiomarkerChartProps) => {
  // Transform data for the chart
  const chartData = biomarkers.map((b) => ({
    name: b.name,
    value: b.value,
    min: b.referenceRange.min,
    max: b.referenceRange.max,
  }));

  if (chartData.length === 0) {
    return null;
  }

  return (
    <div className="biomarker-chart">
      <h3 className="biomarker-chart-title">Biomarker Values Overview</h3>
      <div className="biomarker-chart-inner">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#2196f3" name="Current Value" />
            <Bar dataKey="min" fill="#4caf50" name="Min Range" />
            <Bar dataKey="max" fill="#ff9800" name="Max Range" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BiomarkerChart;
