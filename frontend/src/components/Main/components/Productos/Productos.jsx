import { Mostrador } from './components';
import { Box, Typography } from '@mui/material';
import './styles/productos.scss';

export const Productos = () => {
  return (
    <Box component='section' className='Productos' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
      <Typography component='h2'>Nuestros productos</Typography>
      <Mostrador />
    </Box>
  )
}
