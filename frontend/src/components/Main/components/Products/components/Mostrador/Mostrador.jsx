import Carousel from "react-material-ui-carousel";
import { elements } from "./components/elements";
import { CartaDeProducto } from "./components";
import "./styles/mostrador.scss";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const Mostrador = () => {
  let carouselElement = null;

  const [carouselHeight, setCarouselHeight] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isMobile = useMediaQuery({ query: "(max-width: 819px)" });

  const fetchElement = () => {
    while (!carouselElement) {
      carouselElement = document.querySelectorAll(".Carta");
    }
  };
  
  const fetchResize = async () => {
    let alturaInicial;
    do {
      alturaInicial = carouselElement[activeIndex].scrollHeight;
      handleResize();
      await new Promise((resolve) => setTimeout(resolve, 10));
    } while (alturaInicial !== carouselElement[activeIndex].scrollHeight);
  };

  const handleChange = (nowActive) => {
    setActiveIndex(nowActive);
  };

  const handleResize = () => {
    setCarouselHeight(carouselElement[activeIndex].scrollHeight);
  };

  useEffect(() => {
    if (!carouselElement) {
      fetchElement();
    }
      window.addEventListener("resize", handleResize);
      fetchResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile, activeIndex]);

  return (
    <Carousel
      className="Mostrador"
      navButtonsAlwaysVisible
      navButtonsAlwaysInvisible={isMobile}
      autoPlay={isMobile}
      height={carouselHeight}
      onChange={handleChange}
      PrevIcon={<ArrowBackIcon />}
      NextIcon={<ArrowForwardIcon />}
      interval={7000}
    >
      {elements.map((element, index) => (
        <CartaDeProducto
          key={index}
          className="Carta"
          titulo={element.titulo}
          descripcion={element.descripcion}
          imagenes={element.img}
          index={index}
          activeIndex={activeIndex}
          setHeight={setCarouselHeight}
        ></CartaDeProducto>
      ))}
    </Carousel>
  );
};
