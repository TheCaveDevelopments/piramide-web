import { Box } from "@mui/material"
import { Inicio, Contact, AboutUs, Services } from "./components"
import './styles/main.scss'

export const Main = () => {
  return (
    <Box component={'main'}>
        <Inicio />
        <AboutUs />
        <Services />
        <Contact />
    </Box>
  )
}