import { Home, Products, Contact } from "./components"
import { Box } from "@mui/material"
import './styles/main.scss'

export const Main = () => {
  return (
    <Box component='main'>
        <Home id="home" />
        <Products />
        <Contact id="contact" />
    </Box>
  )
}