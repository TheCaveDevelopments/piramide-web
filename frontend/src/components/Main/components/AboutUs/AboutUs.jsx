import { Box, Button, Typography } from "@mui/material"
import CategoryIcon from '@mui/icons-material/Category';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import './styles/AboutUs.scss'

export const AboutUs = () => {
    return (
        <>
            <Box id="aboutus" component="section" className="about-company">
                <Box className="company-info">
                    <Typography variant="h2" component="h2" gutterBottom>
                        <strong>Nuestra empresa</strong> nace formalmente en el año <strong>1995</strong>
                    </Typography>
                    <Typography variant="body1">
                        Con objetivos muy claros, que son brindar el mejor y más completo servicio para que nuestros clientes se sientan respaldados. Atendiendo
                        en la provincia de Entre Ríos principalmente las ciudades de Colón, San José, Villa Elisa y Concepción del Uruguay.
                    </Typography>
                    <Typography variant="body1">
                        Estamos en constante capacitación y adquiriendo nuevas y mejores herramientas para ofrecer la más óptima solución.
                    </Typography>
                    <Typography variant="body1">
                        Utilizamos metodologías ágiles de desarrollo de software (Programación Extrema y RAD) y nos basamos en los principios de Administración de Procesos
                        de Negocios (BPM) y Reingeniería de Procesos de Negocios (BPR).
                    </Typography>
                    <Typography variant="body1">
                        Ponemos a su servicio todos nuestros conocimientos en el campo empresarial y de software.
                    </Typography>
                    <Box className="button-container">
                        <Button endIcon={<AlternateEmailIcon/>} href="#home">Productos</Button >
                        <Button endIcon={<CategoryIcon/>} href="#contact">Contáctenos</Button >
                    </Box>
                    <Box className="memberships">
                        <Typography variant="h4" component="h4" gutterBottom>
                            Nuestra Empresa es miembro de:
                        </Typography>
                        <Box className="img-members">
                            <img src="soft_indus.gif" alt="Logo Software Industry Professionals" />
                            <img src="coprocier.png" alt="Logo CoprociER" />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
