import { Box, Button, TextField } from "@mui/material";
import { ReCAPTCHAbox } from "../../../../components";
import './styles/contactForm.scss';
import { useState } from "react";

export const ContactForm = () => {

    const [check, setCheck] = useState(false);
    const [displayCAPTCHA, setDisplayCAPTCHA] = useState(false);

    const handleClick = () => {
        setDisplayCAPTCHA(true);
        console.log('Se ha hecho click en el botón de enviar');
    }

    return (
        <Box variant='form' className='formClass'>
            <TextField className='textFieldClass' placeholder="Nombre completo" id="outlined-basic" variant="standard" />
            <TextField className='textFieldClass' placeholder="Email" id="outlined-basic" variant="standard" />
            <Box className='containerFieldClass'>
                <TextField fullWidth placeholder="Asunto" id="outlined-basic" variant="standard" />
                <TextField fullWidth placeholder="Teléfono" id="outlined-basic" variant="standard" />
            </Box>
            <TextField multiline={ true } className='textFieldClass' placeholder="Consulta" id="outlined-basic" variant="standard" />
            <Button onClick={ handleClick } className='submitButton' variant="outlined">Enviar</Button>
            {displayCAPTCHA ? <ReCAPTCHAbox stateFunction={ setCheck } /> : (check && false) }
        </Box>
    )
}