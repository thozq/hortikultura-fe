import React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ChevronRightRounded } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Accordion = styled((props) => (
  <MuiAccordion
    disableGutters
    elevation={0}
    sx={{ ':before': { display: 'none !important' } }}
    {...props}
  />
))(({ theme }) => ({
  borderTopLeftRadius: '8px',
  borderTopRightRadius: '8px',
  borderBottomLeftRadius: '8px',
  borderBottomRightRadius: '8px',
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.optional.contrastText,
  ':first-of-type': { borderTopLeftRadius: '8px', borderTopRightRadius: '8px' },
  ':last-of-type': { borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px' }
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ChevronRightRounded sx={{ color: 'optional.contrastText' }} />}
    {...props}
  />
))(() => ({
  minHeight: 0,
  flexDirection: 'row',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)'
  }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(0),
  borderTop: '1px solid rgba(255, 255, 255, .125)'
}));

const BaseAccordion = (props) => {
  const { title, detail, link } = props;
  const navigate = useNavigate();
  return (
    <>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color="white" variant="h5">
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails onClick={() => navigate(link)}>{detail}</AccordionDetails>
      </Accordion>
    </>
  );
};

export default BaseAccordion;
