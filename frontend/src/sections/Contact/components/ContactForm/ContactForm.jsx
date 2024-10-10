import { Box, Button, TextField } from "@mui/material";
import { ReCAPTCHAbox } from "../../../../components";
import './styles/contactForm.scss';
import { useState } from "react";
import { useForm } from "../../../../hooks/useForm";

export const ContactForm = () => {

    const [check, setCheck] = useState(false);
    const [displayCAPTCHA, setDisplayCAPTCHA] = useState(false);

    const initialForm = {
        name: "",
        email: "",
        subject: "",
        phone: "",
        consult: ""
    }

    const { name, email, subject, phone, consult, onInputChange } = useForm(initialForm)

    const handleClick = (event) => {
        event.preventDefault()
        setDisplayCAPTCHA(true);
        console.log('Se ha hecho click en el botón de enviar');
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Se ha hecho submit en el formulario');
        console.log(name, email, subject, phone, consult);
    }

    return (
        <Box variant='form' onSubmit={handleSubmit} className='formClass'>
            <TextField className='textFieldClass' name='name' value={name} onChange={onInputChange} placeholder="Nombre completo" id="name" variant="standard" />
            <TextField className='textFieldClass' name='email' value={email} onChange={onInputChange} placeholder="Email" id="email" variant="standard" />
            <Box className='containerFieldClass'>
                <TextField fullWidth name='subject' value={subject} onChange={onInputChange} placeholder="Asunto" id="subject" variant="standard" />
                <TextField fullWidth name='phone' value={phone} onChange={onInputChange} placeholder="Teléfono" id="phone" variant="standard" />
            </Box>
            <TextField className='textFieldClass' name='consult' value={consult} onChange={onInputChange} placeholder="Consulta" id="consult" variant="standard" multiline={true} />
            <Button className='submitButton' type="submit" onClick={handleClick} variant="outlined">Enviar</Button>
            {displayCAPTCHA ? <ReCAPTCHAbox stateFunction={setCheck} /> : (check && false)}
        </Box>
    )
}