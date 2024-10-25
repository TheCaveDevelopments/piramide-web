import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Collapse, ImageList, ImageListItem, Stack, Typography } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './styles/cartaDeProducto.scss'

export const CartaDeProducto = ({
  titulo = "Titulo",
  descripcion = "Descripcion",
  imgPrincipal = null,
  imagenes = [],
  index = '',
  activeIndex = 0,
  setHeight = () => {},
}) => {
  const nodoCartaRef = useRef(null);
  const nodoDescripcionRef = useRef(null);
  const carta = document.querySelector('.Carta');

  const [image, setImage] = useState(imgPrincipal || imagenes[0]);
  const [desplegado, setDesplegado] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [restarTexto, setRestarTexto] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const isMobile = useMediaQuery({ query: '(max-width: 819px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 820px) and (max-width: 1023px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px) and (max-width: 1399px)' });
  const isLargeDesktop = useMediaQuery({ query: '(min-width: 1400px)' });

  const setCollapse = () => {
    desplegado ? setRestarTexto(true) : setRestarTexto(false);
    setDesplegado(!desplegado)
  }

  const handleImageLoad = () => {
    const image = document.querySelector('.Carta img');

    if (image.complete) {
      console.log('image loaded');
      setImageLoaded(true);
    }
  };

  useEffect(() => {
    setIsActive(activeIndex === index);
    if (!isActive && desplegado) 
      setCollapse();
  }, [activeIndex, index]);

  useEffect(() => {
    if (imageLoaded && isActive) {
    if (nodoCartaRef.current && !desplegado) {
      setHeight( restarTexto ? nodoCartaRef.current.offsetHeight - nodoDescripcionRef.current.offsetHeight : nodoCartaRef.current.offsetHeight);
    } else if (nodoCartaRef.current && desplegado) {
      setHeight(nodoCartaRef.current.offsetHeight + nodoDescripcionRef.current.offsetHeight);
    }
  }}, [isMobile, desplegado,imageLoaded]);

  return (
    <Card className="Carta" id={`carta-${index}`} ref={nodoCartaRef}>
        <Stack direction={ isLargeDesktop ? 'row' : 'column'} className='Pila' justifyContent="center" alignItems="space-evenly">

          { !isLargeDesktop && <CardHeader title={titulo} style={{textAlign: 'center'}}/>}
          
            <CardMedia className="Imagen" component='img' image={image} onLoad={handleImageLoad}/>
          
            <CardContent className="Descripcion" style={ !isLargeDesktop ? {flexDirection: 'column-reverse', width:'fit-content', minWidth: '500px'} : {}}>
          
              { isLargeDesktop && <CardHeader title={titulo} /> }
              
              {isMobile && 
                <CardActionArea className="VerDescripcion" onClick={() => setCollapse() } onChange={() => !desplegado ? setRestarTexto(true) : setRestarTexto(false) }>
                    <Typography variant='body1'>Ver descripción</Typography>
                    <KeyboardArrowDownIcon style={desplegado ? {transform: 'rotate(180deg)', transition: 'transform 0.5s ease'} : {transition: 'transform 0.5s ease'}}/>
                </CardActionArea>
              }
          
              <Collapse in={!isMobile || desplegado} timeout={1500}>
                        {<Typography variant='body1'  ref={nodoDescripcionRef}>{descripcion}</Typography>}
              </Collapse>
              { !imgPrincipal && 
                <ImageList className="ImageList" cols={4} gap={0}>
                
                  {imagenes.map((imagen, index) => (
          
                    <ImageListItem key={index} className='ImageItem' onClick={() => setImage(imagen)}>
                    
                    <img className='Image' src={imagen} alt={titulo} />
                  
                    </ImageListItem>))}
              
                </ImageList>}
              
            </CardContent>
        
        </Stack>
    
    </Card>
  )
}
