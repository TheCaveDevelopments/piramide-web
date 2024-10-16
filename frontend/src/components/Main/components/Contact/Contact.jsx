import { Box, Divider, Paper, Typography } from '@mui/material'
import { ContactForm, VerticalLinearStepper } from './components'
import Grid from '@mui/material/Grid2';
import './styles/contact.scss'
import { useMediaQuery } from 'react-responsive';

export const Contact = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  return (
    <>
      <Box component={'section'} id='contact' className='contact'>
        <Paper elevation={3} className='contactPaper'>
          <Grid container spacing={5}>
            <Grid item size={{ xs: 12, md: 6 }}>
              <Box variant='div' className='verticalContainer'>
                <Typography variant='h1' className='contactTitle'>Contáctanos!</Typography>
                <VerticalLinearStepper />
              </Box>
            </Grid>
            <Grid item size={{ xs: 12, md: 6 }}>
              {isMobile && <Divider variant='middle' />}
              <ContactForm />
            </Grid>
          </Grid>
        </Paper>
      </Box >
    </>
  )
}
