import Carousel from "react-material-ui-carousel";
import { elements } from './components/elements';
import { CartaDeProducto } from "./components";
import './styles/mostrador.scss';
import { useState } from "react";

export const Mostrador = () => {

    const [ancho, setAncho] = useState();

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
