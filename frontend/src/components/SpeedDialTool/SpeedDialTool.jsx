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
import { useMediaQuery } from 'react-responsive';

export const SpeedDialTool = () => {
  const isTabletORMobile = useMediaQuery({ query: '(max-width: 1023px)' });

  const [open, setOpen] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState({});

  const handleOpen = () => {
    if (isTabletORMobile) {
      handleToolTipOpenAll();
    }
    setOpen(true);
  }
  const handleClose = () => {
    if (isTabletORMobile) {
      handleTooltipCloseAll();
    }
    setOpen(false);
  }

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
  const handleTooltipOpen = (name) => {
    setTooltipOpen(() => ({}));
    setTooltipOpen((prev) => ({ ...prev, [name]: true }));
  };
  const handleToolTipOpenAll = () => {
    const newTooltipState = {};
    actions.forEach(action => {
      newTooltipState[action.name] = true;
    });
    setTooltipOpen(() => newTooltipState);
    console.log('tooltipOpen', tooltipOpen);
  }
  const handleTooltipCloseAll = () => {
    setTooltipOpen(() => ({}));
  };

  const actions = [
    { icon: <ContactMailIcon sx={{ color: 'white' }} />, name: 'Contacto', id: 'contact' },
    { icon: <FileCopyIcon sx={{ color: 'white' }} />, name: 'Email', onClick: handleCopy, id: 'email' },
    { icon: <WhatsAppIcon sx={{ color: 'white' }} />, name: 'WhatsApp', onClick: () => window.open('https://wa.me/5493447452943', '_blank'), id: 'whatsapp' },
    { icon: <HomeWorkIcon sx={{ color: 'white' }} />, name: 'Inicio', id: 'home' },
    { icon: <EmojiPeopleIcon sx={{ color: 'white' }} />, name: 'Quienes Somos', id: 'aboutus' },
    { icon: <DesignServicesIcon sx={{ color: 'white' }} />, name: 'Servicios', id: 'services' },
    { icon: <CategoryIcon sx={{ color: 'white' }} />, name: 'Productos', id: 'products' },
  ];

  return (
    <Box className={`speedDial-container ${open ? 'expanded' : ''}`}
      sx={{ transform: 'translateZ(0px)', flexGrow: 1, position: 'fixed', zIndex: 10, bottom: { xs: 16, sm: 5 }, right: 0 }}>
      <Backdrop open={open} onClick={handleClose} sx={{ height: '102vh' }} />
      <SpeedDial
        sx={{ position: 'absolute', bottom: { xs: 65, sm: 60 }, right: 16, zIndex: 10 }}
        className='speedDial'
        ariaLabel="SpeedDial with navigation actions"
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        onMouseEnter={handleTooltipCloseAll}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            sx={{
              '.MuiSpeedDialAction-staticTooltipLabel': {
                transition: 'all 0.5s ease',
                opacity: tooltipOpen[action.name] ? 1 : 0,
              },
            }}
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen={true}
            onMouseEnter={() => handleTooltipOpen(action.name)}
            onMouseLeave={handleTooltipCloseAll}
            onClick={(event) => action.onClick ? action.onClick() : handleNavigation(event, action.id)}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};