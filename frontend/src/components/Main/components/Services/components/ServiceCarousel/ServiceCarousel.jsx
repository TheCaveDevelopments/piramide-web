import Carousel from "react-material-ui-carousel";
import { ServiceCard } from "../";

import PropTypes from 'prop-types';

export const ServiceCarousel = ({ services }) => {
    return (
        <Carousel
            autoPlay={true}
            indicators={false}
            width={'100vw'}
            height={'20rem'}
        >
            {
                services.map(service => <ServiceCard
                    key={service.id}
                    title={service.title}
                    description={service.description}
                    icon={service.icon} />)
            }
        </Carousel>
    )
}

ServiceCarousel.propTypes = {
    services: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    })).isRequired
};

