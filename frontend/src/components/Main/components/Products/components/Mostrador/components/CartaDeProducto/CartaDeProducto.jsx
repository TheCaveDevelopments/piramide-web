import { Card, CardContent, CardHeader, CardMedia, ImageList, ImageListItem, Stack, Typography } from '@mui/material'
import './styles/cartaDeProducto.scss'
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export const CartaDeProducto = ({
              titulo = "Titulo",
              descripcion = "Descripcion",
              imgPrincipal = null,
              imagenes = []
}) => {
  
  const [image, setImage] = useState(imgPrincipal || imagenes[0]);

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1023px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

  return (
    <Card className="Carta">
        <Stack direction={ isMobile ? 'column' : 'row'} justifyContent="center" alignItems="flex-start">
          { isMobile && <CardHeader title={titulo} />}
            <CardMedia className="Imagen" component='img' image={image} sx={{ width: '100%', height: '100%'}}/>
            <CardContent className="Descripcion">
              { !isMobile && <CardHeader title={titulo} /> }
              <Typography variant='body1'>{descripcion}</Typography>
              { !imgPrincipal && <ImageList className="ImageList" cols={4} gap={0}>
                {imagenes.map((imagen, index) => (
                  <ImageListItem key={index} className='ImageItem'
                    onClick={() => setImage(imagen)}>
                    <img className='Image' src={imagen} alt={titulo} />
                  </ImageListItem>))}
              </ImageList>}
            </CardContent>
        </Stack>
    </Card>
  )
}
