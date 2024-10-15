import { Inicio, Productos } from "./components"
import { Box } from "@mui/material"
import './styles/main.scss'

export const Main = () => {
  return (
    <Box component='main'>
        <Inicio />
        <Productos />
    </Box>
  )
}
