import { Box, Stack, Divider } from '@mui/material';
import { Info, Redes } from './components';
import './styles/footer.scss'

export const Footer = () => {
  return (
    <Box component='footer' justifyContent="center" >
      <Stack direction='row' divider={<Divider orientation="vertical" flexItem />} spacing={2} justifyContent="center">
        <Info />
        <Redes />
      </Stack>
    </Box>
  )
}
