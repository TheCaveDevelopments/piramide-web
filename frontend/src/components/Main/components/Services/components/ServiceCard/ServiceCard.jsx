import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './styles/ServiceCard.scss';

export const ServiceCard = ({ title, description, icon }) => {
    return (
        <Card className='service-card'>
            <CardMedia className='service-card-media'>
                {icon}
            </CardMedia>
            <CardContent className='service-card-content'>
                <Typography className='service-card-title' gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography className='service-card-description' variant="body2" sx={{ color: 'text.secondary' }}>
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
}