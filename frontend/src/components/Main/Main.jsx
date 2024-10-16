import { Box } from "@mui/material"
import { Inicio, Contact } from "./components"
import './styles/main.scss'

export const Main = () => {
  return (
    <Box component={'main'}>
        <Inicio />
        <Contact />
    </Box>
  )
}