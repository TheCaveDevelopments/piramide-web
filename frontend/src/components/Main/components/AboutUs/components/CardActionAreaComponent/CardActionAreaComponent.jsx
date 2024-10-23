import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { handleScroll } from '/src/utilities/handleScroll.js';
import './styles/CardActionAreaComponent.scss';
import PropTypes from 'prop-types';

export const CardActionAreaComponent = ({ title, href, image }) => {
  return (
    <Card className='card'>
      <CardActionArea onClick={(e) => handleScroll(e, href.substring(1))}>
        <CardMedia
          component="img"
          image={image}
          alt={title}
          className="card-media"
        />
        <CardContent className='card-content'>
          <Typography gutterBottom className="card-title" variant="h5" component="h5">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

CardActionAreaComponent.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}; 