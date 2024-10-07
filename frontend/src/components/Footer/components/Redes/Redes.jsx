import { useState } from 'react';
import { handleMouseEnter, handleMouseLeave } from '../Hellpers/handleMouse';
import { Button, Stack, Collapse } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import './styles/redes.scss'

export const Redes = () => {

  const [hoveredFacebook, setHoveredFacebook] = useState(false);

  const [hoveredInstagram, setHoveredInstagram] = useState(false);

  return (
    <Stack direction='row' className='Stack-redes' >
        <Button href="https://www.facebook.com/piramidesoft" target='_blank' rel='noopener' className='Button'
          onMouseEnter={()=>handleMouseEnter(setHoveredFacebook)} onMouseLeave={()=>handleMouseLeave(setHoveredFacebook)}>
            <FacebookIcon className='Icon'/>
            <Collapse in={hoveredFacebook} orientation='horizontal' className='Collapse' timeout={1000}>
                <p>/piramidesoft</p>
            </Collapse>
        </Button>
        <Button href="https://www.instagram.com/piramidesoft/" target='_blank' rel='noopener' className='Button'
          onMouseEnter={()=>handleMouseEnter(setHoveredInstagram)} onMouseLeave={()=>handleMouseLeave(setHoveredInstagram)}>
            <InstagramIcon className='Icon'/>
            <Collapse in={hoveredInstagram} orientation='horizontal' className='Collapse' timeout={1000}>
                <p>/piramidesoft</p>
            </Collapse>
        </Button>
    </Stack>
  )
}
