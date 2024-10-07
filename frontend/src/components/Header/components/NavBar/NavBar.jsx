import Box from '@mui/material/Box';
import { Badge, Button, IconButton } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/material/styles';
import { useMediaQuery } from 'react-responsive';
import './styles/NavBar.scss';
import SwipeableTemporaryDrawer from './components/SwipeableTemporaryDrawer';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

const NavBar = () => {
    // Define breakpoint for mobile
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    return (
        <nav>
            {/* Definir componente Logo */}
            <Box className="logoContainer">
                <img src="piramide.ico" alt="Logo" />
            </Box>

            {/* Definir componente NavList */}
            {!isMobile && <ul>
                <li><a>Bienvenido</a></li>
                <li><a>Productos</a></li>
                <li><a>Blog</a></li>
                <li><a>Contacto</a></li>
            </ul>}


            <Box className = "buttonContainer">
                {!isMobile && 
                <Button variant="outlined" color="secondary">Iniciar sesión</Button>}
                
                <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                        <ShoppingCartIcon />
                    </StyledBadge>
                </IconButton>
                
                {isMobile && <SwipeableTemporaryDrawer />}
            </Box>
        </nav>
    )
}

export default NavBar;