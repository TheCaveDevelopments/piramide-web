import Carousel from "react-material-ui-carousel";
import { elements } from "./components/elements";
import { CartaDeProducto } from "./components";
import "./styles/mostrador.scss";
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { useMediaQuery } from "react-responsive";

export const Mostrador = () => {
  let carouselElement = null;

  const [carouselHeight, setCarouselHeight] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isMobile = useMediaQuery({ query: "(max-width: 819px)" });

  const fetchElement = async () => {
    while (!carouselElement) {
      console.log("fetching element");
      carouselElement = document.querySelectorAll(".Carta");
      await new Promise((resolve) => setTimeout(resolve, 100));
      console.log("carouselElement", carouselElement[activeIndex]);
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
    console.log("resize");
  };

  useEffect(() => {
    fetchElement();
  }, []);

  useEffect(() => {
    console.log("activeIndex", activeIndex);
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
      autoPlay={false}
      height={carouselHeight}
      onChange={handleChange}
    >
      {elements.map((element, index) => (
        <CartaDeProducto
          key={index}
          className="Carta"
          titulo={element.titulo}
          descripcion={element.descripcion}
          imgPrincipal={element.imgPrincipal}
          imagenes={element.img}
          index={index}
          activeIndex={activeIndex}
          setHeight={setCarouselHeight}
        ></CartaDeProducto>
      ))}
    </Carousel>
  );
};
