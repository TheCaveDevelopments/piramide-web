import { useState } from 'react';
import { handleMouseEnter, handleMouseLeave } from '../Hellpers/handleMouse';
import { Button, Collapse, Stack } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './styles/info.scss'

export const Info = ( {isMobile} ) => {

  const [hoveredLocation, setHoveredLocation] = useState(false);

  const [hoveredMail, setHoveredMail] = useState(false);

  const [hoveredWhatsapp, setHoveredWhatsapp] = useState(false);

  return (
    <Stack direction={isMobile ? 'column' : 'row'} className='Stack-info' width={'100%'} justifyContent={'end'}>
        <Button href="mailto:piramide.soft@gmail.com" target='_blank' rel='noopener'
        onMouseEnter={()=>handleMouseEnter(setHoveredMail)} onMouseLeave={()=>handleMouseLeave(setHoveredMail)}>
          <Stack direction={isMobile ? 'row-reverse' : 'row'}>
            <Collapse orientation='horizontal' className='Collapse' timeout={1000} 
              in={isMobile ? true : hoveredMail}>
                <p>piramide.soft@gmail.com</p>
            </Collapse>
            <MailIcon className='Icon'/>
          </Stack>
        </Button>
        <Button href="https://maps.google.com/maps?q=Bolivar%20152,%20Col%C3%B3n,%20Entre%20Rios,%20Argentina" target='_blank' rel='noopener'
        onMouseEnter={()=>handleMouseEnter(setHoveredLocation)} onMouseLeave={()=>handleMouseLeave(setHoveredLocation)}>
          <Stack direction={isMobile ? 'row-reverse' : 'row'}>
            <Collapse orientation='horizontal' className='Collapse' timeout={1000}
              in={isMobile ? true : hoveredLocation}>
                <p> Bolivar 152, Colón</p>
            </Collapse>
            <PlaceIcon className='Icon'/>
          </Stack>
        </Button>
        <Button href="https://web.whatsapp.com/send?phone=+543447452943" target='_blank' rel='noopener'
        onMouseEnter={()=>handleMouseEnter(setHoveredWhatsapp)} onMouseLeave={()=>handleMouseLeave(setHoveredWhatsapp)}>
          <Stack direction={isMobile ? 'row-reverse' : 'row'}>
            <Collapse orientation='horizontal' className='Collapse' timeout={1000}
              in={isMobile ? true : hoveredWhatsapp}>
                <p>+543447452943</p>
            </Collapse>
            <WhatsAppIcon className='Icon'/>
          </Stack>
        </Button>
    </Stack>
  )
}