import { Box, Divider, Typography } from "@mui/material"
import './styles/AboutUs.scss'
import { useMediaQuery } from "react-responsive"

export const AboutUs = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 410px)' })
    return (
        <>
            <Box id="aboutus" component="section" className="about-company company-info">
                <Box className="info-container">
                    <Typography variant="h1" component="h1" className="title-text" gutterBottom>
                        <strong>Nuestra empresa</strong>,{isMobile ? <br /> : ' '}fundada en <strong>1995</strong>
                    </Typography>
                    <Box className="info-text-map">
                        <Box className="info-text-container" width={'100%'}>
                            <Divider variant="fullWidth" />
                            <Typography variant="body1" className="info-text">
                                Desde nuestros inicios, hemos tenido un objetivo claro: brindar un servicio integral que ofrezca respaldo y confianza a nuestros clientes. Atendemos principalmente en la <strong>provincia de Entre Ríos, incluyendo las ciudades de Colón, San José, Villa Elisa y Concepción del Uruguay</strong>.
                            </Typography>
                            <Typography variant="body1" className="info-text">
                                Estamos en constante capacitación, implementando las <strong>últimas herramientas y metodologías ágiles para asegurar soluciones óptimas y eficientes</strong>. Basamos nuestro trabajo en principios de Administración de Procesos de Negocios (BPM) y Reingeniería de Procesos (BPR), aplicando prácticas modernas como Programación Extrema y RAD.
                            </Typography>
                            <Divider />
                        </Box>
                        <Box className="iframe-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3375.4699151036607!2d-58.14028582347436!3d-32.218511435486874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ae3304834707b3%3A0x35d62ca21b038e25!2sPiramide%20Soft%20-%20ingenier%C3%ADa%20de%20software!5e0!3m2!1ses!2sar!4v1729505011210!5m2!1ses!2sar"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade" />
                        </Box>
                    </Box>
                </Box>
                <Box className='end-about-us'>
                    <Box className='end-about-us-container'>
                        <Box className='logo-container'>
                            <img src="6.svg" alt="Logo Pirámide Soft" />
                        </Box>
                        <Box className="memberships">
                            <Typography variant="h5" component="h4" gutterBottom>
                                Somos miembros de: <Divider />
                            </Typography>
                            <Box className="img-members">
                                <img src="soft_indus.gif" alt="Logo Software Industry Professionals" />
                                <img src="coprocier.png" alt="Logo CoprociER" />
                            </Box>
                        </Box>
                    </Box>
                    <Typography variant="h4" component="h4" className="quote" gutterBottom>
                        “Si elige las soluciones de nuestra Empresa no solo está adquiriendo un software, sino que se está garantizando el buen funcionamiento del mismo.”
                    </Typography>
                </Box>
            </Box>
        </>
    )
}
