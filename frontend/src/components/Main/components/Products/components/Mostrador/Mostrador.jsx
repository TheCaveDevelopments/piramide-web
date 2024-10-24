import Carousel from "react-material-ui-carousel";
import { elements } from './components/elements';
import { CartaDeProducto } from "./components";
import './styles/mostrador.scss';
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const Mostrador = () => {

    const [carouselHeight, setCarouselHeight] = useState(null);

  return (
    <Carousel className="Mostrador" navButtonsAlwaysVisible autoPlay={false} height={ carouselHeight }>
        {elements.map((element, index) => (
        <CartaDeProducto 
            key={index} 
            className="Carta"
            titulo={element.titulo}
            descripcion={element.descripcion}
            imgPrincipal={ element.imgPrincipal }
            imagenes={ element.img }
            setHeight={setCarouselHeight}>
        </CartaDeProducto>
        ))}
    </Carousel>
  )
}
