import Carousel from "react-material-ui-carousel";
import { elements } from "./components/elements";
import { CartaDeProducto } from "./components";
import "./styles/mostrador.scss";
import { useEffect, useState, useRef } from "react";
import { useMediaQuery } from "react-responsive";

export const Mostrador = () => {
    const carouselElement = document.querySelector(".Carta");

  const [carouselHeight, setCarouselHeight] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isMobile = useMediaQuery({ query: "(max-width: 819px)" });

  const handleChange = (nowActive) => {
    setActiveIndex(nowActive);
  };

  const handleResize = () => {
    setCarouselHeight(carouselElement.scrollHeight);
    console.log("resize");
  };

  const handleTransitionEnd = () => {
    setCarouselHeight(carouselElement.scrollHeight);
    console.log(
      "transition end, updated height:",
      carouselElement.scrollHeight
    );
  };

  useEffect(() => {
    if (!isMobile) {
      window.addEventListener("resize", handleResize);
      if (carouselElement) {
        carouselElement.addEventListener("transitionend", handleTransitionEnd);
      }
    } else {
        window.addEventListener("resize", handleResize);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (carouselElement) {
        carouselElement.removeEventListener(
          "transitionend",
          handleTransitionEnd
        );
      }
    };
  }, [isMobile]);

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
