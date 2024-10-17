import { Box, Divider } from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import { useState, useEffect } from "react";
import './styles/recaptchabox.scss';

const textColorDefault = '#0d0d0d';
const backgroundColorDefault = '#f2f2f2';

export const ReCAPTCHAbox = ({ textColor = textColorDefault, backgroundColor = backgroundColorDefault, stateFunction }) => {

    const { enqueueSnackbar } = useSnackbar();
    const [show, setShow] = useState(true);

    useEffect(() => {
        const disableScrollAndLinks = (e) => {
            e.preventDefault();
            e.stopPropagation();
        };

        if (show) {
            document.body.style.overflow = 'hidden';

            document.querySelectorAll('.nav-link').forEach((link) => {
                console.log(link);
                link.addEventListener('click', disableScrollAndLinks);
            });
        } else {
            document.body.style.overflow = '';
            document.querySelectorAll('.nav-link').forEach((link) => {
                link.removeEventListener('click', disableScrollAndLinks);
            });
        }
        return () => {
            document.body.style.overflow = '';
            document.querySelectorAll('.nav-link').forEach((link) => {
                link.removeEventListener('click', disableScrollAndLinks);
            });
        };
    }, [show]);

    const handleChange = (value) => {
        if (!value) {
            enqueueSnackbar('El CAPTCHA no se completó correctamente!', { variant: 'error' });
            stateFunction(false);
            return;
        }
        stateFunction(true);
        enqueueSnackbar('El CAPTCHA se completó correctamente!', { variant: 'success' });
        setShow(false);
        return value;
    }

    const style = {
        color: textColor,
        backgroundColor: backgroundColor
    }

    return (
        show && (
            <Box
                className='recaptcha-overlay'
            >
                <Box
                    sx={style}
                    className='recaptcha-container'
                >
                    <Box className='subtitleCheck' variant='h2'>Necesitamos realizar un chequeo</Box>
                    <Divider />
                    <ReCAPTCHA
                        className='recaptcha'
                        sitekey="6LcNw1wqAAAAADmjS-QdIGLi1nyb2OC2r4tsYiuK"
                        onChange={(value) => handleChange(value)}
                    />
                </Box>
            </Box>
        )
    );
}

ReCAPTCHAbox.propTypes = {
    textColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    stateFunction: PropTypes.func.isRequired
};
