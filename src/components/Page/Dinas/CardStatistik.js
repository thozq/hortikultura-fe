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

const CardStatistik = (props) => {
  const { item, harga, persen, label, statistic, desc } = props;

  ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip);

  const data = {
    labels: label,
    datasets: [
      {
        labels: 'Harga Rata-Rata per Bulan',
        data: statistic,
        borderColor: 'black',
        pointBorderColor: 'blue'
      }
    ]
  };
  const options = {
    scales: {
      x: {
        display: false
      },
      y: {
        min: 0,
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
            {desc}
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

export default CardStatistik;
