import { Box, Typography, useMediaQuery } from "@mui/material"
import { ServiceCarousel, ServiceGrid } from "./components";
import { useTheme } from '@mui/material/styles';

import { services } from "./variables";
import './styles/Services.scss';

export const Services = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box component={'section'} id="services" className='services-section'>
            <Box className='services-text'>
                <Typography variant='h1' component="h1" className="title-text">NUESTROS SERVICIOS</Typography>
                <Typography variant='body1' className="info-text">
                    <strong>PIRAMIDE</strong> ofrece soluciones integrales en diseño, instalación y mantenimiento de software para Colón, San José, Villa Elisa y Concepción del Uruguay. Nos encargamos de todo el proceso, desde el diseño inicial hasta la implementación y mantenimiento, proporcionando también el equipamiento necesario. Nuestro enfoque es acompañar a nuestros clientes en cada etapa para garantizar el máximo rendimiento del sistema.
                </Typography>
            </Box>
            <Box className='services-container'>
                {
                    isMobile ?
                        <ServiceCarousel services={services} /> :
                        <ServiceGrid services={services} />
                }
            </Box>
        </Box>
    );
}
