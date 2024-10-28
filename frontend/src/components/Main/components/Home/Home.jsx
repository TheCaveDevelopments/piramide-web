import './styles/home.scss'
import { Box, Stack } from '@mui/material'
import { Logo, TextoDescriptivo, Titulo } from './Components'
import { useMediaQuery } from 'react-responsive';

export const Home = () => {

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

return (
    <Box component='section' id="home" className='Home' display="flex" justifyContent="center" alignItems="center">
        <Box className='Bloque'>
            <Titulo isMobile={isMobile}/>
        <Stack direction={isMobile ? 'column' : 'row'} className='Contenido'>
            {!isMobile && <Logo/>}
            <TextoDescriptivo isMobile={isMobile}/>
        </Stack>
        </Box>
    </Box>
    )
}
