import { CardActionArea, Typography } from "@mui/material"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const BotonDespliegue = ({ 
    desplegado = true,
    desplegar = () => {}, 
}) => {

  return (
    <CardActionArea className="VerDescripcion" onClick={() => { console.log('desplegando'); desplegar()}}  sx={{display: 'flex', flexDirection: 'column', justifyContent:'center'}} >
        <Typography variant='body1'>Ver descripción</Typography>
        <KeyboardArrowDownIcon sx={{ transition: 'transform 0.5s ease', transform: `${desplegado && 'rotate(180deg)'}`, marginTop: '-10px'}}/>
    </CardActionArea>
  )
}
