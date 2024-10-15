import { Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import { ReCAPTCHAbox } from "../../../../components";
import { makeStyles, useTheme } from '@mui/styles';
import { useState } from "react";
import { useForm, useValidateForm } from "../../../../hooks";
import { ThemeContext } from "../../../../components";
import { useSnackbar } from "notistack";
import { sendEmail } from "../../../../services/EmailSender/sendEmail";
import './styles/contactForm.scss';

const useStyles = makeStyles((theme) => ({
    textField: {
        '& .MuiInputBase-input': {
            fontSize: '1.3rem',
            fontFamily: "'Poppins', sans-serif",
            [theme.breakpoints.down('sm')]: {
                fontSize: '1rem',
            },
            [theme.breakpoints.between('sm', 'md')]: {
                fontSize: '1.2rem',
            },
        },
        '& .MuiFormHelperText-root.Mui-error': {
            fontSize: '1rem',
            fontFamily: "'Roboto', sans-serif",
            whiteSpace: 'nowrap', position: 'absolute', bottom: '-13px',
            [theme.breakpoints.down('sm')]: {
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                position: 'absolute',
                bottom: '-5px',
                fontSize: '0.8rem',
            },
            [theme.breakpoints.between('sm', 'md')]: {
                fontSize: '0.95rem',
            },
        }
    },
    button: {
        color: '#0d6073 !important',
        borderColor: '#0d6073 !important',
        backgroundColor: 'transparent !important',
        '&:hover': {
            backgroundColor: '#e0f7fa !important',
        },
    },
    FormControlLabel: {
        '& .MuiTypography-root': {
            fontSize: '1.25rem',
            [theme.breakpoints.down('sm')]: {
                fontSize: '0.9rem',
            },
            [theme.breakpoints.between('sm', 'md')]: {
                fontSize: '1.15rem',
            },
        }
    },
    checkbox: {
        '&.Mui-checked': {
          color: '#0d6073 !important', // Cambia el color del checkbox marcado
        },
        '&.MuiCheckbox-indeterminate': {
          color: '#0d6073 !important', // Cambia el color del checkbox indeterminado
        },
      },
}));

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
    const theme = useTheme(); // Obtén el tema
    const classes = useStyles(theme);
    
    const { enqueueSnackbar } = useSnackbar();
    const [check, setCheck] = useState(false);
    const [displayCAPTCHA, setDisplayCAPTCHA] = useState(false);

    const { completename, email, subject, phone, consult, onInputChange, resetForm } = useForm(initialForm)
    const { errorcompletename, erroremail, errorsubject, errorphone, errorconsult, onBlurChange, resetFormErrors } = useValidateForm(initialFormError)

    const handleClick = (event) => {
        event.preventDefault();
        setDisplayCAPTCHA(true);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (completename === '' || email === '' || subject === '' || phone === '' || consult === '') {
            enqueueSnackbar('Todos los campos deben estar completos', { variant: 'error' });
            return;
        }
        if (!check) {
            enqueueSnackbar('Debe tildar el checkbox para continuar', { variant: 'error' });
            return;
        }
        
        setCheck(false);
        setDisplayCAPTCHA(false);
        
        resetForm();
        resetFormErrors();
        
        const formData = { completename, email, phone, subject, consult };
        try {
            await sendEmail(formData);
            enqueueSnackbar('Se enviado su consulta, nos comunicaremos a la brevedad!', { variant: 'success' });
            // Aquí puedes manejar el resultado exitoso, como mostrar un mensaje al usuario
        } catch (error) {
            console.error("No se puedo enviar su consulta!", error);
            // Aquí puedes manejar el error, como mostrar un mensaje de error al usuario
          }

    }

    return (
        <ThemeContext>
            <form onSubmit={(event) => handleSubmit(event)} className='formClass'>
                <Typography variant='h2' className='contactFormTitle'>Completa el formulario</Typography>
                <TextField
                    error={!!errorcompletename.trim()}
                    color={errorcompletename ? 'error' : 'success'}
                    helperText={errorcompletename ? errorcompletename : ''}
                    className={`${classes.textField} textFieldClass`}
                    name='completename' value={completename} onBlur={onBlurChange} onChange={onInputChange} placeholder="Nombre completo" id="completename" variant="standard" />
                <TextField
                    error={!!erroremail.trim()}
                    color={erroremail ? 'error' : 'success'}
                    helperText={erroremail ? erroremail : ''}
                    className={`${classes.textField} textFieldClass`}
                    name='email' value={email} onBlur={onBlurChange} onChange={onInputChange} placeholder="Email" id="email" variant="standard" />
                <TextField
                    error={!!errorphone.trim()}
                    color={errorphone ? 'error' : 'success'}
                    helperText={errorphone ? errorphone : ''}
                    className={`${classes.textField} textFieldClass`}
                    fullWidth name='phone' value={phone} onBlur={onBlurChange} onChange={onInputChange} placeholder="Teléfono" id="phone" variant="standard" />
                <TextField
                    error={!!errorsubject.trim()}
                    color={errorsubject ? 'error' : 'success'}
                    helperText={errorsubject ? errorsubject : ''}
                    className={`${classes.textField} textFieldClass`}
                    fullWidth name='subject' value={subject} onBlur={onBlurChange} onChange={onInputChange} placeholder="Asunto" id="subject" variant="standard" />
                <TextField
                    multiline={true}
                    variant="outlined"
                    rows={4}
                    error={!!errorconsult.trim()}
                    color={errorconsult ? 'error' : 'success'}
                    helperText={errorconsult ? errorconsult : ''}
                    className={`${classes.textField} textFieldClass`}
                    name='consult' value={consult} onBlur={onBlurChange} onChange={onInputChange} placeholder="Consulta" id="consult" />
                <FormControlLabel
                    className="checkboxClass"
                    classes={{ root: classes.FormControlLabel }}
                    checked={displayCAPTCHA}
                    control={<Checkbox className={classes.checkbox} />}
                    label={`No soy un bot. ${displayCAPTCHA ? 'Verificado' : 'Verificar'}`}
                    onChange={handleClick} />
                <Button
                    className={'submitButton'}
                    classes={{ root: classes.button }}
                    type="submit"
                    variant="outlined"
                    style={{ fontSize: '1rem' }}>Enviar</Button>
                {displayCAPTCHA ?
                    <ReCAPTCHAbox stateFunction={setCheck} />
                    : (check && false)}
            </form>
        </ThemeContext>
    )
}