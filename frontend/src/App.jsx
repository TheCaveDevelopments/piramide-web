
import { SnackbarProvider, MaterialDesignContent } from 'notistack';
import { Header, Footer, Slogan, Main } from './components';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles'; // Importa styled de @mui/system

const StyledMaterialDesignContent = styled(MaterialDesignContent)(({ theme }) => ({
  '&.notistack-MuiContent-success': {
    backgroundColor: '#0d6073',
    fontSize: '0.8rem', // Ajusta el tamaño de las palabras
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.1rem', // Ajusta el tamaño de las palabras para pantallas más grandes
    },
  },
  '&.notistack-MuiContent-error': {
    backgroundColor: '#6B5E62',
    fontSize: '0.8rem', // Ajusta el tamaño de las palabras
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.1rem', // Ajusta el tamaño de las palabras para pantallas más grandes
    },
  },
}));

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1280,
      xl: 1920,
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <SnackbarProvider maxSnack={1} Components={{
          success: StyledMaterialDesignContent,
          error: StyledMaterialDesignContent,
        }}
        >
        <Main />
        </SnackbarProvider>
        <Slogan />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
