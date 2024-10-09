import { Box, Stack, Divider } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import { Info, Redes } from './components';
import './styles/footer.scss'

export const Footer = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1023px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  
  return (
    <Box component='footer' justifyContent="center" >
      <Stack direction={isMobile ? 'column-reverse' : 'row'} divider={<Divider orientation={isMobile ? "horizontal" : "vertical"} flexItem />} spacing={2} justifyContent="center" className='Stack-footer'>
        <Info display={isMobile && 'mobile' || isTablet && 'tablet' || isDesktop && 'desktop'}/>
        <Redes display={isMobile && 'mobile' || isTablet && 'tablet' || isDesktop && 'desktop'}/>
      </Stack>

    </Box>
  )
}
