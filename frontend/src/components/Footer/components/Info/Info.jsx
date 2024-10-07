import { useState } from 'react';
import { handleMouseEnter, handleMouseLeave } from '../Hellpers/handleMouse';
import { Button, Collapse, Stack } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './styles/info.scss'

export const Info = () => {

  const [hoveredLocation, setHoveredLocation] = useState(false);

  const [hoveredMail, setHoveredMail] = useState(false);

  const [hoveredWhatsapp, setHoveredWhatsapp] = useState(false);

  return (
    <Stack direction='row' className='Stack.info' width={'100%'} justifyContent={'end'}>
        <Button href="mailto:piramide.soft@gmail.com" target='_blank' rel='noopener'
        onMouseEnter={()=>handleMouseEnter(setHoveredMail)} onMouseLeave={()=>handleMouseLeave(setHoveredMail)}>
            <Collapse in={hoveredMail} orientation='horizontal' className='Collapse' timeout={1000}>
                <p>piramide.soft@gmail.com</p>
            </Collapse>
            <MailIcon className='Icon'/>
        </Button>
        <Button href="https://web.whatsapp.com/send?phone=+543447452943" target='_blank' rel='noopener'
        onMouseEnter={()=>handleMouseEnter(setHoveredWhatsapp)} onMouseLeave={()=>handleMouseLeave(setHoveredWhatsapp)}>
            <Collapse in={hoveredWhatsapp} orientation='horizontal' className='Collapse' timeout={1000}>
                <p>+543447452943</p>
            </Collapse>
            <WhatsAppIcon className='Icon'/>
        </Button>
        <Button href="https://maps.google.com/maps?q=Bolivar%20152,%20Col%C3%B3n,%20Entre%20Rios,%20Argentina" target='_blank' rel='noopener'
        onMouseEnter={()=>handleMouseEnter(setHoveredLocation)} onMouseLeave={()=>handleMouseLeave(setHoveredLocation)}>
            <Collapse in={hoveredLocation} orientation='horizontal' className='Collapse' timeout={1000}>
                <p> Bolivar 152, Colón</p>
            </Collapse>
            <PlaceIcon className='Icon'/>
        </Button>
    </Stack>
  )
}