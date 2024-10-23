import Carousel from "react-material-ui-carousel";
import { elements } from './components/elements';
import { CartaDeProducto } from "./components";
import { Card, CardContent, CardHeader, CardMedia, Stack, Typography } from '@mui/material';
import './styles/mostrador.scss';

export const Mostrador = () => {
  return (
    <Carousel className="Mostrador" navButtonsAlwaysVisible autoPlay={false}>
        {elements.map((element, index) => (
        <CartaDeProducto 
            key={index} 
            className="Carta"
            titulo={element.titulo}
            descripcion={element.descripcion}
            imgPrincipal={ element.imgPrincipal }
            imagenes={ element.img }>
        </CartaDeProducto>
        ))}
    </Carousel>
  )
}
