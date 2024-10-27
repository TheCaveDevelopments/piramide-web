import { Home, , Contact } from "./components"
import { Box } from "@mui/material"
import { Inicio, Contact, Products, AboutUs, Services } from "./components"

import './styles/main.scss'

export const Main = () => {
  return (
    <Box component={'main'}>
        <Inicio />
        <AboutUs />
        <Services />
        <Products />
        <Contact />
    </Box>
  )
}