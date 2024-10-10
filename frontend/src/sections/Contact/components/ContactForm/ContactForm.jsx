import { Box, Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { ReCAPTCHAbox } from "../../../../components";
import './styles/contactForm.scss';
import { useState } from "react";
import { useForm } from "../../../../hooks/useForm";
import { useValidateForm } from "../../../../hooks/useValidateForm";

export const ContactForm = () => {

    const [check, setCheck] = useState(false);
    const [displayCAPTCHA, setDisplayCAPTCHA] = useState(false);

    const initialForm = {
        completename: "",
        email: "",
        subject: "",
        phone: "",
        consult: ""
    }
    const initialFormError = {
        errorcompletename: "",
        erroremail: "",
        errorsubject: "",
        errorphone: "",
        errorconsult: ""
    }

    const { completename, email, subject, phone, consult, onInputChange } = useForm(initialForm)
    const { errorcompletename, erroremail, errorsubject, errorphone, errorconsult, onBlurChange } = useValidateForm(initialFormError)
    console.log(errorcompletename);
    const handleClick = (event) => {
        event.preventDefault()
        setDisplayCAPTCHA(true);
        console.log('Se ha hecho click en el botón de enviar');
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (completename === '' || email === '' || subject === '' || phone === '' || consult === '') {
            console.log('Todos los campos deben estar completos');
            return;
        }
        if (!check) {
            console.log('Debe tildar el checkbox para continuar');
            return;
        }
        console.log('Se ha hecho submit en el formulario');
        console.log(completename, email, subject, phone, consult);
    }

    return (
        <form onSubmit={ (event) => handleSubmit(event) } className='formClass'>
            <TextField
                error={errorcompletename}
                color={errorcompletename ? 'error' : 'success'}
                helperText={errorcompletename ? errorcompletename : ''}
                className='textFieldClass' name='completename' value={completename} onBlur={onBlurChange} onChange={onInputChange} placeholder="Nombre completo" id="completename" variant="standard" />
            <TextField
                error={erroremail}
                color={erroremail ? 'error' : 'success'}
                helperText={erroremail ? erroremail : ''}
                className='textFieldClass' name='email' value={email} onBlur={onBlurChange} onChange={onInputChange} placeholder="Email" id="email" variant="standard" />
            <Box className='containerFieldClass'>
                <TextField
                    error={errorsubject}
                    color={errorsubject ? 'error' : 'success'}
                    helperText={errorsubject ? errorsubject : ''}
                    fullWidth name='subject' value={subject} onBlur={onBlurChange} onChange={onInputChange} placeholder="Asunto" id="subject" variant="standard" />
                <TextField
                    error={errorphone}
                    color={errorphone ? 'error' : 'success'}
                    helperText={errorphone ? errorphone : ''}
                    fullWidth name='phone' value={phone} onBlur={onBlurChange} onChange={onInputChange} placeholder="Teléfono" id="phone" variant="standard" />
            </Box>
            <TextField
                error={errorconsult}
                color={errorconsult ? 'error' : 'success'}
                helperText={errorconsult ? errorconsult : ''}
                className='textFieldClass' name='consult' value={consult} onBlur={onBlurChange} onChange={onInputChange} placeholder="Consulta" id="consult" variant="standard" multiline={true} />
            <FormControlLabel checked={displayCAPTCHA} control={<Checkbox />} label="No soy un botardo &#129302;" onChange={handleClick}/>
            <Button className='submitButton' type="submit" variant="outlined">Enviar</Button>
            {displayCAPTCHA ? <ReCAPTCHAbox stateFunction={setCheck} /> : (check && false)}
        </form>
    )
}