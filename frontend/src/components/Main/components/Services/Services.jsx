import { Box, Typography, useMediaQuery } from "@mui/material"
import Grid from '@mui/material/Grid2';
import { ServiceCard } from "./components";
import Carousel from 'react-material-ui-carousel'
import {
    IntegrationInstructions,
    SupportAgent,
    Code,
    Build,
    AccountBalance,
    Search,
    ImportantDevices,
    Handshake
} from '@mui/icons-material';
import './styles/Services.scss'
import { useTheme } from "@emotion/react";
const services = [
    {
        id: 1,
        title: "Soluciones Integrales",
        description: "Soluciones tecnológicas completas para optimizar tu negocio.",
        icon: <IntegrationInstructions />
    },
    {
        id: 2,
        title: "Consultoría Informática",
        description: "Asesoría especializada para mejorar tu infraestructura tecnológica.",
        icon: <SupportAgent />
    },
    {
        id: 3,
        title: "Desarrollo de Aplicaciones a Medida",
        description: "Aplicaciones personalizadas, ajustadas a tus necesidades.",
        icon: <Code />
    },
    {
        id: 4,
        title: "Ingeniería de Software",
        description: "Desarrollo y optimización de sistemas robustos y eficientes.",
        icon: <Build />
    },
    {
        id: 5,
        title: "Asesoramiento Informático y Fiscal",
        description: "Orientación informática y fiscal para cumplir normativas.",
        icon: <AccountBalance />
    },
    {
        id: 6,
        title: "Investigación",
        description: "Análisis para soluciones innovadoras y tecnológicas.",
        icon: <Search />
    },
    {
        id: 7,
        title: "Instalación de Controladores Fiscales",
        description: "Instalación de equipos fiscales según normativas vigentes.",
        icon: <ImportantDevices />
    },
    {
        id: 8,
        title: "Habilitación Fiscal con el Contador",
        description: "Colaboración con el contador para habilitar sistemas fiscales.",
        icon: <Handshake />
    }
]


export const Services = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box className='services-section' component={'section'} id="services">
            <Typography variant='h1' component="h1" className="title-text">Brindamos los mejores servicios</Typography>
            <Typography variant='body1' className="info-text">
                <strong>PIRAMIDE</strong> ofrece soluciones integrales en diseño, instalación y mantenimiento de software para Colón, San José, Villa Elisa y Concepción del Uruguay. Nos encargamos de todo el proceso, desde el diseño inicial hasta la implementación y mantenimiento, proporcionando también el equipamiento necesario. Nuestro enfoque es acompañar a nuestros clientes en cada etapa para garantizar el máximo rendimiento del sistema.
            </Typography>
            <Box className='services-container'>
                <Grid container className='grid-container'>
                    {
                        !isMobile &&
                        services.map(service => (
                            <Grid className='grid-item' key={service.id} size={{ xs: 12, sm: 6, md: 3 }} >
                                <ServiceCard
                                    key={service.id}
                                    title={service.title}
                                    description={service.description}
                                    icon={service.icon} />
                            </Grid>
                        ))
                    }
                </Grid>
                {
                    isMobile &&
                    <Carousel
                        autoPlay={true}
                        indicators={false}
                        width={'100vw'}
                        height={'20rem'}
                    >
                        {
                            services.map(service => <ServiceCard
                                key={service.id}
                                title={service.title}
                                description={service.description}
                                icon={service.icon} />)
                        }
                    </Carousel>

                }
            </Box>
        </Box>
    )
}
