import './styles/inicio.scss'
import { Box } from '@mui/material'
import { Logo, TextoDescriptivo } from './Components'

export const Inicio = () => {
return (
    <Box component={'section'} className='Inicio' display="flex" justifyContent="center" alignItems="center">
        <Logo />
        <TextoDescriptivo />
    </Box>
)
}
