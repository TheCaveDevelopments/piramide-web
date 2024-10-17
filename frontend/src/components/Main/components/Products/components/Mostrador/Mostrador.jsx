import Carousel from "react-material-ui-carousel";
import { elements } from './components/elements';
import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Collapse, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './styles/mostrador.scss';

export const Mostrador = () => {
  return (
    <Carousel className="Mostrador">
        {elements.map((element, index) => (
        <Card key={index}>
            <CardHeader title={element.titulo} />
            <CardMedia>
                <img src={element.imgPrincipal} alt={element.titulo} />
            </CardMedia>
            <CardContent className="Descripcion">
                <Collapse in={true}>
                        {<Typography variant='body1'>{element.descripcion}</Typography>}
                </Collapse>
                <CardActionArea className="VerDescripcion">
                    <Typography variant='body1'>Ver descripción</Typography>
                    <KeyboardArrowDownIcon />
                </CardActionArea>
            </CardContent>
        </Card>
        ))}
    </Carousel>
  )
}
