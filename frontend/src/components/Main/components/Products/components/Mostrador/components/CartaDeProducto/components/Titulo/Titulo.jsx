import { CardHeader } from "@mui/material"

export const Titulo = ({ titulo = 'Titulo' }) => {
  return (
    <CardHeader title={titulo} style={{textAlign: 'center'}}/>
  )
}
