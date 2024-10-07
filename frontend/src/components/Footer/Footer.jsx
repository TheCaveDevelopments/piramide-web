import { Box, Stack, Divider } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import { Info, Redes } from './components';
import './styles/footer.scss'

export const Footer = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  
  return (
    <Box component='footer' justifyContent="center" >
      <Stack direction={isMobile ? 'column-reverse' : 'row'} divider={<Divider orientation={isMobile ? "horizontal" : "vertical"} flexItem />} spacing={2} justifyContent="center" className='Stack-footer'>
        <Info isMobile={isMobile}/>
        <Redes isMobile={isMobile}/>
      </Stack>

    </Box>
  )
}
