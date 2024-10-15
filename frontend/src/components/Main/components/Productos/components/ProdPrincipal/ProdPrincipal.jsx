import { Card, CardContent, CardHeader, CardMedia, Collapse, Stack, Typography } from "@mui/material";
import Carousel from 'react-material-ui-carousel';
import { elements } from './components/elements';
import './ProdPrincipal.scss';

export const ProdPrincipal = () => {
  return (
    <Card className="Carta">
        <CardHeader  title={elements.nombre} />
        <Stack direction='row-reverse' justifyContent={'flex-end'}>
            <CardMedia className="Media">
                <Carousel>
                    {elements.img.map((img, index) => (<img key={index} className={`imagen ${index}`} src={img} alt={elements.nombre}/>))}
                </Carousel>
            </CardMedia>
                <Collapse in={true} orientation="horizontal">
            <CardContent className="Descripcion">
                    {elements.descripcion.map((desc, index) => (<Typography key={index} variant='body1'>{desc}</Typography>))}
            </CardContent>
                </Collapse>
        </Stack>
    </Card>
  )
}
