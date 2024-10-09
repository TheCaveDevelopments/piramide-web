import { Box } from "@mui/material";
import { ReCAPTCHA } from "react-google-recaptcha";
import { SnackbarProvider, useSnackbar } from 'notistack';
import './styles/recaptchabox.scss';

const textColor = 'black';
const backgroundColor = 'white';

import PropTypes from 'prop-types';

export const ReCAPTCHAbox = ({ textColor, backgroundColor, stateFunction }) => {

    const { enqueueSnackbar } = useSnackbar();

    const handleChange = (value) => {
        if (!value) {
            enqueueSnackbar('El CAPTCHA no se completó correctamente!', 'error');
            stateFunction(false);
            return;
        }
        stateFunction(true);
        enqueueSnackbar('El CAPTCHA se completó correctamente!', 'success');
    }

    const style = {
        color: textColor,
        backgroundColor: backgroundColor
    }
    
    return (
        <Box
            className='recaptcha-overlay'
        >
            {console.log('Se ha renderizado el componente ReCAPTCHAbox')}
            <Box
                className='recaptcha-container'
            >
                <ReCAPTCHA
                    className='recapcha'
                    sitekey="6LcNw1wqAAAAADmjS-QdIGLi1nyb2OC2r4tsYiuK"
                    onChange={handleChange} />
            </Box>
        </Box>
    )
}

ReCAPTCHAbox.propTypes = {
    stateFunction: PropTypes.func.isRequired
};
