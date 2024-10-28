import { Stack } from '@mui/material';
import { CollapseButton } from '../';
import PlaceIcon from '@mui/icons-material/Place';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './styles/info.scss'

export const Info = ( {display} ) => {

  return (
    <Stack 
    direction={ display == 'mobile' || display == 'tablet' ? "column" : "row" } 
    className='Stack-info' 
    justifyContent={'end'} 
    alignItems={display == 'mobile' ? 'center' : 'end'}>
        <CollapseButton
        href="mailto:piramide.soft@gmail.com"
        icon={<MailIcon className='Icon'/>}
        text="piramide.soft@gmail.com"
        iconPos={ display == 'mobile' ? "left" : "right" }
        collapsed={ display == 'mobile' || display == 'tablet' }
      />
        <CollapseButton
        href="https://maps.google.com/maps?q=Bolivar%20152,%20Col%C3%B3n,%20Entre%20Rios,%20Argentina"
        icon={<PlaceIcon className='Icon'/>}
        text="Bolivar 152, Colón"
        iconPos={ display == 'mobile' ? "left" : "right" }
        collapsed={ display == 'mobile' || display == 'tablet' }
      />
        <CollapseButton
        href="https://wa.me/5493447452943"
        icon={<WhatsAppIcon className='Icon'/>}
        text="+543447452943"
        iconPos={ display == 'mobile' ? "left" : "right" }
        collapsed={ display == 'mobile' || display == 'tablet'}
      />
    </Stack>
  )
}