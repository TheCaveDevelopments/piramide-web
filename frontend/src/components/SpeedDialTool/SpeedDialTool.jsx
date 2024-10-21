import React from 'react';
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
import { enqueueSnackbar } from 'notistack';
import { handleScroll } from '/src/utilities';
import './styles/SpeedDialTool.scss';

export const SpeedDialTool = () => {
  const [open, setOpen] = React.useState(false);
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
    { icon: <FileCopyIcon sx={{ color: 'white' }} />, name: 'Email', onClick: handleCopy },
    { icon: <HomeWorkIcon sx={{ color: 'white' }} />, name: 'Inicio', href: '#home', id: 'home' },
    { icon: <EmojiPeopleIcon sx={{ color: 'white' }} />, name: 'Quienes Somos', href: '#about', id: 'about' },
    { icon: <DesignServicesIcon sx={{ color: 'white' }} />, name: 'Servicios', href: '#services', id: 'services' },
    { icon: <CategoryIcon sx={{ color: 'white' }} />, name: 'Productos', href: '#products', id: 'products' },
    { icon: <ContactMailIcon sx={{ color: 'white' }} />, name: 'Contacto', href: '#contact', id: 'contact' },
  ];

  return (
    <Box className='speedDial'
      sx={{ height: 330, transform: 'translateZ(0px)', flexGrow: 1, position: 'fixed', zIndex: 10, bottom: 16, right: 16 }}>
      <SpeedDial
        ariaLabel="SpeedDial with navigation actions"
        sx={{ position: 'absolute', bottom: 16, right: 16, zIndex: 10 }}
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