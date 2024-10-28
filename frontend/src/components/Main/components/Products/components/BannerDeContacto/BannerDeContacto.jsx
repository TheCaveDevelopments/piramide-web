import { handleScroll } from '/src/utilities';
import { Box, Typography } from "@mui/material"
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import './styles/BannerDeContacto.scss'

export const BannerDeContacto = () => {
  return (
    <Box className='Banner-de-contacto' onClick={(e) => handleScroll(e, 'contact')}>
        <KeyboardDoubleArrowRightIcon className='icon left'/>
        <Typography variant="body1" className="texto">NO DUDES EN CONTACTARNOS</Typography>
        <KeyboardDoubleArrowLeftIcon className='icon right'/>
    </Box>
  )
}
