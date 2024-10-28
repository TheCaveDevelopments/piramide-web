import { ImageList, ImageListItem } from "@mui/material";
import { useState } from "react";
import "./styles/listaDeImagenes.scss";

export const ListaDeImagenes = ({
  imagenes = [],
  titulo = "",
  setImage = () => {},
}) => {
  const [indexSelected, setIndexSelected] = useState(0);

  const handleImage = (imagen, index) => {
    if (indexSelected != index) {
      setImage(imagen);
      setIndexSelected(index);
    }
  };

  return (
    <ImageList className="ImageList" cols={4} gap={5}>
      {imagenes.map((imagen, index) => (
        <ImageListItem
          key={index}
          className={`ImageItem ${indexSelected == index ? "Selected" : ""}`}
          onClick={() => handleImage(imagen, index)}
        >
          <img className="Image" src={imagen} alt={titulo} />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
