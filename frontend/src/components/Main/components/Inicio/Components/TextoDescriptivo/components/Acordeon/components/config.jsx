import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordion from '@mui/material/Accordion';
import { styled } from '@mui/material';

export const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    backgroundColor: 'transparent',
    width: '100%',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&::before': {
      display: 'none',
      backgroundColor: 'transparent',
    },
  }));
  
  export const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }}/>}
      {...props}
    />
  ))(({ theme }) => ({
    flexDirection: 'row-reverse',
    '&.fixed' : {
      color: '#3f4b8c',
      '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        color: '#3f4b8c',
      },
      '& .MuiTypography-root': {
        fontWeight: 'bold',
      },
    },
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
    '& .MuiTypography-root': {
    },
    ...theme.applyStyles('dark', {
      backgroundColor: 'rgba(255, 255, 255, .05)',
    }),
  }));
  
  export const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: 0,
  }));