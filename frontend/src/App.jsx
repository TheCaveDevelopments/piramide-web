
import { SnackbarProvider } from 'notistack';
import { Header, Footer, Slogan } from './components';
import { Contact } from './sections';
function App() {

  return (
    <>
      <Header />
      <SnackbarProvider maxSnack={1}>
        <Contact />
      </SnackbarProvider>
      <Slogan />
      <Footer />
    </>
  )
}

export default App
