import { handleScroll } from '/src/utilities';
import { Box, Typography } from "@mui/material"
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import './styles/BannerDeContacto.scss'
import { useMediaQuery } from 'react-responsive';

export const BannerDeContacto = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  return (
    <Box className='Banner-de-contacto'
      onClick={(e) => handleScroll(e, `${isMobile ? "contact-form-box" : "contact"}`, isMobile ? 'contact':null)}>
      <KeyboardDoubleArrowRightIcon className='icon left' />
      <Typography variant="body1" className="texto">NO DUDES EN CONTACTARNOS</Typography>
      <KeyboardDoubleArrowLeftIcon className='icon right' />
    </Box>
  )
}
