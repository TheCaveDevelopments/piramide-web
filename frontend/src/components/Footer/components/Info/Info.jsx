import { Button, Stack } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './styles/info.scss'

export const Info = () => {
  return (
    <Stack>
        <Button href="https://maps.google.com/maps?q=Bolivar%20152,%20Col%C3%B3n,%20Entre%20Rios,%20Argentina" target='_blank' rel='noopener'>
            <PlaceIcon className='Icon'/>
        </Button>
        <Button href="mailto:piramide.soft@gmail.com" target='_blank' rel='noopener'>
            <MailIcon className='Icon'/>
        </Button>
        <Button href="https://web.whatsapp.com/send?phone=+543447452943" target='_blank' rel='noopener'>
            <WhatsAppIcon className='Icon'/>
        </Button>
    </Stack>
  )
}