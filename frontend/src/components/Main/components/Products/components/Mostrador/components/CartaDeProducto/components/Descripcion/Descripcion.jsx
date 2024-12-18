import { Collapse, Typography } from "@mui/material"
import './styles/descripcion.scss'

export const Descripcion = ({
    descripcion = '',
    desplegado = true,
    reference = null,
}) => {
  return (
    <Collapse in={desplegado} timeout={1500}>
              {<Typography variant='body1' className='Texto' ref={reference}>{descripcion}</Typography>}
    </Collapse>
  )
}
