import { Box, Divider, Paper, Typography } from '@mui/material'
import { ContactForm, VerticalLinearStepper } from './components'
import Grid from '@mui/material/Grid2';
import './styles/contact.scss'
import { useMediaQuery } from 'react-responsive';

export const Contact = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  return (
    <>
      <Box component={'section'} id='contact' className='contact'>
        <Paper elevation={5} className='contactPaper'>
          <Grid container spacing={5}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box variant='div' className='verticalContainer'>
                {!isDesktop &&
                  <Typography variant='h2' className='contactTitle'>Contáctanos!</Typography>
                }
                {
                  !isMobile &&
                  <img src='1.svg' alt='contact' className='contactImage' />
                }

                <VerticalLinearStepper />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              {isMobile && <Divider variant='middle' />}
              <ContactForm />
            </Grid>
          </Grid>
        </Paper>
      </Box >
    </>
  )
}
