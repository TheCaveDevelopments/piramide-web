import { Mostrador } from './components';
import { Box, Typography } from '@mui/material';
import './styles/products.scss';

export const Products = () => {
  return (
    <Box component='section' id='products' className='Productos' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
      <Typography component='h2'>Nuestros productos</Typography>
      <Mostrador />
    </Box>
  )
}
