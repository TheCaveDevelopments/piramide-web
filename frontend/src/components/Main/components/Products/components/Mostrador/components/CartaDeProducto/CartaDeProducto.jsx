import React, { useState, useRef, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Collapse, ImageList, ImageListItem, Stack, Typography } from '@mui/material'
import './styles/cartaDeProducto.scss'
import { BotonDespliegue, Descripcion, ListaDeImagenes, Titulo } from './components';

export const CartaDeProducto = ({
  titulo = "Titulo",
  descripcion = "Descripcion",
  imgPrincipal = null,
  imagenes = [],
  index = 0,
  activeIndex = 0,
  setHeight = () => {},
}) => {
  const nodoCartaRef = useRef(null);
  const nodoDescripcionRef = useRef(null);

  const [image, setImage] = useState(imgPrincipal || imagenes[0]);
  const [desplegado, setDesplegado] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [restarTexto, setRestarTexto] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const isMobile = useMediaQuery({ query: '(max-width: 819px)' });
  const isLargeDesktop = useMediaQuery({ query: '(min-width: 1400px)' });

  const setCollapse = () => {
    console.log('setting collapse');
    desplegado ? setRestarTexto(true) : setRestarTexto(false);
    setDesplegado(!desplegado)
  }

  const handleImageLoad = () => {
    const image = document.querySelector('.Carta img');

    if (image.complete) {
      setImageLoaded(true);
    }
  };

  useEffect(() => {
    setIsActive(activeIndex === index);
    if (!isActive && desplegado){
      console.log('isActive', isActive);
      setCollapse();
    }
  }, [activeIndex, index]);

  useEffect(() => {
    console.log('desplegado', desplegado);
    if (imageLoaded && isActive) {
    if (nodoCartaRef.current && !desplegado) {
      if(restarTexto) {
        setHeight(nodoCartaRef.current.offsetHeight - nodoDescripcionRef.current.offsetHeight);
        setRestarTexto(false);
      } else {
        setHeight(nodoCartaRef.current.offsetHeight);
      }
    } else if (nodoCartaRef.current && desplegado) {
      setHeight(nodoCartaRef.current.offsetHeight + nodoDescripcionRef.current.offsetHeight);
    }
  }}, [isMobile, desplegado,imageLoaded, isActive]);

  return (
    <Card className="Carta" id={`carta-${index}`} ref={nodoCartaRef}>
        <Stack direction={ isLargeDesktop ? 'row' : 'column'} className='Pila' justifyContent="center" alignItems="space-evenly">

          { !isLargeDesktop && <Titulo titulo={titulo}/>}
          
            <CardMedia className="Imagen" component='img' image={image} onLoad={handleImageLoad}/>
          
            <CardContent className="Descripcion" style={ !isLargeDesktop ? {flexDirection: 'column-reverse', width:'fit-content'} : {}}>
          
              { isLargeDesktop && <Titulo titulo={titulo}/> }
              
              { isMobile && <BotonDespliegue desplegado={desplegado} desplegar={setCollapse}/> }

              <Descripcion descripcion={descripcion} desplegado={!isMobile || desplegado} reference={nodoDescripcionRef}/>

              { !imgPrincipal && <ListaDeImagenes imagenes={imagenes} titulo={titulo} setImage={setImage}/> }
              
            </CardContent>
        
        </Stack>
    
    </Card>
  )
}
