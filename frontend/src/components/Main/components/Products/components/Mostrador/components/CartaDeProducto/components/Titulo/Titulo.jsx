import { CardHeader } from "@mui/material"
import './styles/Titulo.scss'

export const Titulo = ({ titulo = 'Titulo' }) => {
  return (
    <CardHeader title={titulo} className='Titulo'/>
  )
}
