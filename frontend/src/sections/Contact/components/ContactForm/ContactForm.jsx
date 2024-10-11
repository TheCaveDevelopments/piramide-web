import { Box, Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { ReCAPTCHAbox } from "../../../../components";
import { useState } from "react";
import { useForm, useValidateForm } from "../../../../hooks";
import { ThemeContext } from "../../../../components";
import { useSnackbar } from "notistack";
import './styles/contactForm.scss';

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

export const ContactForm = () => {

    const { enqueueSnackbar } = useSnackbar();
    const [check, setCheck] = useState(false);
    const [displayCAPTCHA, setDisplayCAPTCHA] = useState(false);

    const { completename, email, subject, phone, consult, onInputChange, resetForm } = useForm(initialForm)
    const { errorcompletename, erroremail, errorsubject, errorphone, errorconsult, onBlurChange, resetFormErrors } = useValidateForm(initialFormError)

    const handleClick = () => {
        setDisplayCAPTCHA(true);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (completename === '' || email === '' || subject === '' || phone === '' || consult === '') {
            enqueueSnackbar('Todos los campos deben estar completos', { variant: 'warning' });
            return;
        }
        if (!check) {
            enqueueSnackbar('Debe tildar el checkbox para continuar', { variant: 'warning' });
            return;
        }
        enqueueSnackbar('Se enviado su consulta, revise su casilla de correo', { variant: 'success' });
        //logica envio de email
        setCheck(false);
        setDisplayCAPTCHA(false);

        resetForm();
        resetFormErrors();

        try {
            const response = await fetch('http://localhost:3000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, completename, subject })
            });
            const data = await response.json();
            if (response.ok) {
                console.log('Email sent successfully');
            } else {
                throw new Error(data.error || 'Failed to send email');
            }
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }

    return (
        <ThemeContext>
            <form onSubmit={(event) => handleSubmit(event)} className='formClass'>
                <TextField
                    error={!!errorcompletename.trim()}
                    color={errorcompletename ? 'error' : 'success'}
                    helperText={errorcompletename ? errorcompletename : ''}
                    className='textFieldClass' name='completename' value={completename} onBlur={onBlurChange} onChange={onInputChange} placeholder="Nombre completo" id="completename" variant="standard" />
                <TextField
                    error={!!erroremail.trim()}
                    color={erroremail ? 'error' : 'success'}
                    helperText={erroremail ? erroremail : ''}
                    className='textFieldClass' name='email' value={email} onBlur={onBlurChange} onChange={onInputChange} placeholder="Email" id="email" variant="standard" />
                <Box className='containerFieldClass'>
                    <TextField
                        className="textFieldClassInner"
                        error={!!errorsubject.trim()}
                        color={errorsubject ? 'error' : 'success'}
                        helperText={errorsubject ? errorsubject : ''}
                        fullWidth name='subject' value={subject} onBlur={onBlurChange} onChange={onInputChange} placeholder="Asunto" id="subject" variant="standard" />
                    <TextField
                        className="textFieldClassInner"
                        error={!!errorphone.trim()}
                        color={errorphone ? 'error' : 'success'}
                        helperText={errorphone ? errorphone : ''}
                        fullWidth name='phone' value={phone} onBlur={onBlurChange} onChange={onInputChange} placeholder="Teléfono" id="phone" variant="standard" />
                </Box>
                <TextField
                    error={!!errorconsult.trim()}
                    color={errorconsult ? 'error' : 'success'}
                    helperText={errorconsult ? errorconsult : ''}
                    className='textFieldClass' name='consult' value={consult} onBlur={onBlurChange} onChange={onInputChange} placeholder="Consulta" id="consult" variant="standard" multiline={true} />
                <FormControlLabel checked={displayCAPTCHA} control={<Checkbox />} label="No soy un botardo &#129302;" onChange={handleClick} />
                <Button className='submitButton' type="submit" variant="outlined">Enviar</Button>
                {displayCAPTCHA ?
                    <ReCAPTCHAbox stateFunction={setCheck} />
                    : (check && false)}
            </form>
        </ThemeContext>
    )
}