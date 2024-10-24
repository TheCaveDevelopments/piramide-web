import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Collapse, ImageList, ImageListItem, Stack, Typography } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './styles/cartaDeProducto.scss'

export const CartaDeProducto = ({
  titulo = "Titulo",
  descripcion = "Descripcion",
  imgPrincipal = null,
  imagenes = [],
  setHeight = () => {}
}) => {
  
  const carta = document.querySelector('.Carta');
  const [image, setImage] = useState(imgPrincipal || imagenes[0]);
  const [desplegar, setDesplegar] = useState(false);

  const isMobile = useMediaQuery({ query: '(max-width: 819px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 820px) and (max-width: 1023px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px) and (max-width: 1399px)' });
  const isLargeDesktop = useMediaQuery({ query: '(min-width: 1400px)' });

  useEffect(() => {
    if (carta && !isMobile) {
      setHeight(carta.offsetHeight);
    } else if (isMobile) {
      setHeight(750);
    }
  }, [isMobile, isTablet, isDesktop, isLargeDesktop, desplegar, setHeight]);

  return (
    <Card className="Carta">
        <Stack direction={ isLargeDesktop ? 'row' : 'column'} className='Pila' justifyContent="center" alignItems="space-evenly">

          { !isLargeDesktop && <CardHeader title={titulo} style={{textAlign: 'center'}}/>}
          
            <CardMedia className="Imagen" component='img' image={image}/>
          
            <CardContent className="Descripcion" style={ !isLargeDesktop ? {flexDirection: 'column-reverse', width:'fit-content', minWidth: '500px'} : {}}>
          
              { isLargeDesktop && <CardHeader title={titulo} /> }
              
              {isMobile && 
                <CardActionArea className="VerDescripcion" onClick={() => setDesplegar(!desplegar)}>
                    <Typography variant='body1'>Ver descripción</Typography>
                    <KeyboardArrowDownIcon style={desplegar ? {transform: 'rotate(180deg)', transition: 'transform 0.5s ease'} : {transition: 'transform 0.5s ease'}}/>
                </CardActionArea>
              }
          
              <Collapse in={!isMobile || desplegar} timeout={1500}>
                        {<Typography variant='body1'>{descripcion}</Typography>}
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
