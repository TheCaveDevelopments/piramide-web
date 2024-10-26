
import { ImageList, ImageListItem } from '@mui/material';
export const ListaDeImagenes = ({ 
    imagenes = [],
    titulo = '',
    setImage = () => {},
}) => {
  return (
    <ImageList className="ImageList" cols={4} gap={0}>
    
      {imagenes.map((imagen, index) => (

        <ImageListItem key={index} className='ImageItem' onClick={() => setImage(imagen)}>
        
        <img className='Image' src={imagen} alt={titulo} />
      
        </ImageListItem>))}
  
    </ImageList>
  )
}
