// Lazy-loaded charts for AnnualView (PRD item 12).
import { Box, Paper, Stack, Typography } from '@mui/material';

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { formatNumberES } from '@/utils';
import { MonthlySummary } from '@/utils/annualSummary';

interface AnnualChartsProps {
  summary: MonthlySummary[];
}

export default function AnnualCharts({ summary }: AnnualChartsProps) {
  return (
    <Stack spacing={3}>
      <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>
          Kg entrados por mes
        </Typography>
        <Box sx={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <BarChart data={summary}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="monthLabel" />
              <YAxis tickFormatter={(v) => formatNumberES(Number(v))} />
              <Tooltip formatter={(v) => formatNumberES(Number(v))} />
              <Legend />
              <Bar dataKey="kgEntrados" name="Kg entrados" fill="#1976d2" />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Paper>

      <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>
          Kg salidos por mes
        </Typography>
        <Box sx={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <LineChart data={summary}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="monthLabel" />
              <YAxis tickFormatter={(v) => formatNumberES(Number(v))} />
              <Tooltip formatter={(v) => formatNumberES(Number(v))} />
              <Legend />
              <Line
                type="monotone"
                dataKey="kgSalidos"
                name="Kg salidos"
                stroke="#2e7d32"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </Paper>
    </Stack>
  );
}
