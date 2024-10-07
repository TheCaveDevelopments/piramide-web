import { useState } from 'react';
import { handleMouseEnter, handleMouseLeave } from '../Hellpers/handleMouse';
import { Button, Stack, Collapse } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import './styles/redes.scss'

export const Redes = ({ isMobile }) => {

  const [hoveredFacebook, setHoveredFacebook] = useState(false);

  const [hoveredInstagram, setHoveredInstagram] = useState(false);

  return (
    <Stack direction={isMobile ? 'column' : 'row'} className='Stack-redes'>
        <Button href="https://www.facebook.com/piramidesoft" target='_blank' rel='noopener' className='Button'
          onMouseEnter={()=>handleMouseEnter(setHoveredFacebook)} onMouseLeave={()=>handleMouseLeave(setHoveredFacebook)}>
            <FacebookIcon className='Icon'/>
            <Collapse orientation='horizontal' className='Collapse' timeout={1000}
              in={isMobile ? true : hoveredFacebook}>
                <p>/piramidesoft</p>
            </Collapse>
        </Button>
        <Button href="https://www.instagram.com/piramidesoft/" target='_blank' rel='noopener' className='Button'
          onMouseEnter={()=>handleMouseEnter(setHoveredInstagram)} onMouseLeave={()=>handleMouseLeave(setHoveredInstagram)}>
            <InstagramIcon className='Icon'/>
            <Collapse orientation='horizontal' className='Collapse' timeout={1000}
          in={isMobile ? true : hoveredInstagram}>
                <p>/piramidesoft</p>
            </Collapse>
        </Button>
    </Stack>
  )
}
