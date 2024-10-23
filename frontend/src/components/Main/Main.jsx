import { Box } from "@mui/material"
import { Inicio, Contact, Services } from "./components"
import './styles/main.scss'

export const Main = () => {
  return (
    <Box component={'main'}>
        <Inicio id="home" />
        <Services id="services" />
        <Contact id="contact" />
    </Box>
  )
}