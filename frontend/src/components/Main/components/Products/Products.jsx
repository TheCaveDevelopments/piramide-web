import { Mostrador, BannerDeContacto } from './components';
import { Box, Typography } from '@mui/material';
import './styles/products.scss';

export const Products = () => {
  return (
    <Box component='section' id='products' className='Productos' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
      <Typography variant='h1' component="h1" className="title-text">NUESTROS PRODUCTOS</Typography>
      <Mostrador />
      <BannerDeContacto />
    </Box>
  )
}
