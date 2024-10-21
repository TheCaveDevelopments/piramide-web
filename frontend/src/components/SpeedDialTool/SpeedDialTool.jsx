import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CategoryIcon from '@mui/icons-material/Category';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import { enqueueSnackbar } from 'notistack';
import { handleScroll } from '/src/utilities';
import './styles/SpeedDialTool.scss';
import { useState } from 'react';
import { Backdrop } from '@mui/material';

export const SpeedDialTool = () => {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('piramide.soft@gmail.com')
      .then(() => {
        enqueueSnackbar('Email copiado al portapapeles', { variant: 'success' });
      })
      .catch(() => {
        enqueueSnackbar('Error al copiar el email al portapapeles', { variant: 'error' });
      });
    handleClose();
  }
  const handleNavigation = (event, id) => {
    handleScroll(event, id);
    handleClose();
  };
  const actions = [
    { icon: <ContactMailIcon sx={{ color: 'white' }} />, name: 'Contacto', id: 'contact' },
    { icon: <FileCopyIcon sx={{ color: 'white' }} />, name: 'Email', onClick: handleCopy, id: 'email' },
    { icon: <WhatsAppIcon sx={{ color: 'white' }} />, name: 'WhatsApp', onClick: () => window.open('https://wa.me/5491130770000', '_blank'), id: 'whatsapp' },
    { icon: <HomeWorkIcon sx={{ color: 'white' }} />, name: 'Inicio', id: 'home' },
    { icon: <EmojiPeopleIcon sx={{ color: 'white' }} />, name: 'Quienes Somos', id: 'about' },
    { icon: <DesignServicesIcon sx={{ color: 'white' }} />, name: 'Servicios', id: 'services' },
    { icon: <CategoryIcon sx={{ color: 'white' }} />, name: 'Productos', id: 'products' },
  ];

  return (
    <Box className={`speedDial-container ${open ? 'expanded' : ''}`}
      sx={{ transform: 'translateZ(0px)', flexGrow: 1, position: 'fixed', zIndex: 10, bottom: 5, right: 0 }}>
      <Backdrop open={open} onClick={handleClose} sx={{ height: '101vh' }} />
      <SpeedDial
        sx={{ position: 'absolute', bottom: 16, right: 16, zIndex: 10 }}
        className='speedDial'
        ariaLabel="SpeedDial with navigation actions"
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={(event) => action.onClick ? action.onClick() : handleNavigation(event, action.id)}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};