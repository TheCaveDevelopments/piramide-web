
import { SnackbarProvider, MaterialDesignContent } from 'notistack';
import { Header, Footer, Slogan } from './components';
import { Contact } from './sections';
import { styled } from '@mui/system'; // Importa styled de @mui/system

const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  '&.notistack-MuiContent-success': {
    backgroundColor: '#0d6073',
  },
  '&.notistack-MuiContent-error': {
    backgroundColor: '#970C0C',
  },
}));

function App() {

  return (
    <>
      <Header />
      <SnackbarProvider maxSnack={1} Components={{
        success: StyledMaterialDesignContent,
        error: StyledMaterialDesignContent,
      }}
      >
        <Contact />
      </SnackbarProvider>
      <Slogan />
      <Footer />
    </>
  )
}

export default App
