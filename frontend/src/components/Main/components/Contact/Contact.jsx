import { Box, Divider, Paper, Stack, Typography } from '@mui/material'
import { ContactForm, VerticalLinearStepper } from './components'
import { useMediaQuery } from 'react-responsive';
import './styles/contact.scss'

export const Contact = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1023px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  return (
    <>
      <Box component={'section'} id='contact' className='contact'>
        <Paper elevation={5} className='contactPaper'>
          <Stack
            divider={<Divider orientation="vertical" flexItem />}
            justifyContent={'space-evenly'}
            width='100%'
            direction={ isMobile ? 'column' : 'row' }>
            <Box variant='div' className='verticalContainer' flex={1} >
              {!isDesktop && 
                <Typography variant='h2' className='contactTitle'>Contáctanos!</Typography>
              }
              {
                !isMobile && !isTablet &&
                <img src='1.svg' alt='contact' className='contactImage' />
              }
              <VerticalLinearStepper />
            </Box>
            <Box width={'100%'} flex={1}>
              <ContactForm />
            </Box>
          </Stack>
        </Paper>
      </Box >
    </>
  )
}
