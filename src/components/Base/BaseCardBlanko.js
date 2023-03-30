import { Box, Typography, Card, CardContent, CardMedia, CardHeader } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { ArrowUpward } from '@mui/icons-material/';
// import { CabaiEnum } from 'utils/constants';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
} from 'chart.js';

const BaseCardBlanko = (props) => {
  const { item, harga, persen } = props;

  ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip);

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'],
    datasets: [
      {
        labels: 'Harga Rata-Rata per Bulan',
        data: [43500, 42500, 50000, 52000, 45000, 30000],
        borderColor: 'green',
        pointBorderColor: 'white'
      }
    ]
  };
  const options = {
    scales: {
      x: {
        display: false
      },
      y: {
        min: 10000,
        display: false,
        ticks: {
          display: false
        },
        grid: {
          display: false,
          drawBorder: false
        }
      }
    }
  };

  return (
    <Card sx={{ maxWidth: 175 }}>
      <CardHeader title={item} />
      <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Typography alignItems="center" variant="subtitle2">
            {harga}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {' '}
            PER KG
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: 'green',
            alignItems: 'center',
            display: 'flex',
            maxWidth: 50,
            pl: 1
          }}>
          <ArrowUpward color="green" />
          <Typography variant="subtitle2" color="primary">
            {' '}
            {persen}{' '}
          </Typography>
        </Box>
      </CardContent>
      <CardMedia>
        <Line data={data} options={options} />
      </CardMedia>
    </Card>
  );
};

export default BaseCardBlanko;
