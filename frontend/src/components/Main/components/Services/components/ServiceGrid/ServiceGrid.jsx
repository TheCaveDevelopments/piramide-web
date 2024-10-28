import Grid from '@mui/material/Grid2';
import { ServiceCard } from '../';
import './styles/ServiceGrid.scss';

import PropTypes from 'prop-types';
import { useMediaQuery } from '@mui/material';

export const ServiceGrid = ({ services }) => {
    const isSmallScreen = useMediaQuery('(max-width: 1510px)');
    return (
        <Grid spacing={2} container className='grid-container'>
            {
                services.map(service => (
                    <Grid className='grid-item' key={service.id} size={{ xs: 12, sm: 6, md: isSmallScreen ? 6 : 3 }} >
                        <ServiceCard
                            key={service.id}
                            title={service.title}
                            description={service.description}
                            icon={service.icon} />
                    </Grid>
                ))
            }
        </Grid>
    );
};

ServiceGrid.propTypes = {
    services: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        icon: PropTypes.object.isRequired
    })).isRequired
};
