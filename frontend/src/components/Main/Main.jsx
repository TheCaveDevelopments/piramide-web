import { Home, Contact, Products, AboutUs, Services } from "./components"
import { Box } from "@mui/material"

import './styles/main.scss'

export const Main = () => {
  return (
    <Box component={'main'}>
        <Home />
        <AboutUs />
        <Services />
        <Products />
        <Contact />
    </Box>
  )
}