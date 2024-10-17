import PropTypes from 'prop-types';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const ThemeContext = ({ children }) => {
    const theme = createTheme({
        palette: {
            success: {
                main: '#0d6073', // Color principal para success
                light: '#81c784', // Color claro para success
                dark: '#388e3c', // Color oscuro para success
            },
            warning: {
                main: '#ff9800', // Color principal para warning
                light: '#ffb74d', // Color claro para warning
                dark: '#f57c00', // Color oscuro para warning
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

ThemeContext.propTypes = {
    children: PropTypes.node.isRequired,
};
