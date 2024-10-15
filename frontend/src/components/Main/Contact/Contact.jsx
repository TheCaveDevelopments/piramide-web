import { Box, Divider, Typography } from '@mui/material'
import { ContactForm, VerticalLinearStepper } from './components'
import Grid from '@mui/material/Grid2';
import './styles/contact.scss'
import { useMediaQuery } from 'react-responsive';

export const Contact = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  return (
    <>
      <Box variant='section' className='contact'>
        <Grid container spacing={2}>
          <Grid item size={{ xs: 12, md: 6 }}>
            <Box variant='div' className='verticalContainer'>
{/*               <div id={'container'}>
                En Pirámide tenemos
                <div id={'flip'}>
                  <div><div>Trabajo</div></div>
                  <div><div>Responsabilidad</div></div>
                  <div><div>Compromiso</div></div>
                </div>
                Contáctanos!
              </div>
 */}
              <Typography variant='h1' className='contactTitle'>Contáctanos!</Typography>
              <VerticalLinearStepper />
            </Box>
          </Grid>
          <Grid item size={{ xs: 12, md: 6 }}>
            {isMobile && <Divider variant='middle' />}
            <ContactForm />
          </Grid>
        </Grid>
      </Box >
    </>
  )
}
