import { IconButton, Button, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import './styles/redes.scss'

export const Redes = () => {
  return (
    <Stack>
        <Button href="https://www.facebook.com/piramidesoft" target='_blank' rel='noopener'>
            <FacebookIcon className='Icon'/>
        </Button>
        <Button href="https://www.instagram.com/piramidesoft/" target='_blank' rel='noopener'>
            <InstagramIcon className='Icon'/>
        </Button>
    </Stack>
  )
}
