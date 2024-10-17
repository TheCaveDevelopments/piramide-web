import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import { useState } from 'react';

import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import SubjectIcon from '@mui/icons-material/Subject';
import ContactMailIcon from '@mui/icons-material/ContactMail';

import './styles/verticallinearstepper.scss';
import { makeStyles, useTheme, ThemeProvider } from '@mui/styles';

const steps = [
  {
    label: 'Cuéntanos qué necesitas',
    description: `Por favor, completa el formulario con tus datos y cuéntanos en qué podemos ayudarte. Queremos entender tus necesidades para ofrecerte una solución personalizada y adecuada. Cuanta más información nos brindes, mejor podremos ayudarte.`,
    icon: <PersonIcon />
  },
  {
    label: 'Revisamos tu consulta',
    description: `Una vez que envíes tu solicitud, nuestro equipo comenzará a revisarla. Nos tomamos en serio cada consulta para garantizar que recibas una solución acorde a tus necesidades. Este proceso es clave para brindarte una atención de calidad.`,
    icon: <EmailIcon />
  },
  {
    label: 'Notificación al administrador',
    description: `Tu consulta ha sido enviada automáticamente a nuestro administrador, quien es el responsable de asignarla al especialista adecuado. En un plazo máximo de 5 días hábiles, recibirás una respuesta formal por correo electrónico. Mientras tanto, puedes estar seguro de que tu solicitud está siendo gestionada con prioridad.`,
    icon: <ContactMailIcon />
  },
  {
    label: 'Nos comunicamos contigo',
    description: `En un plazo corto, te contactaremos a través del teléfono o correo electrónico que nos proporcionaste. Nuestro objetivo es ofrecerte una respuesta clara y personalizada que aborde tu consulta de manera efectiva. Estamos aquí para asistirte y garantizar que todas tus dudas sean resueltas.`,
    icon: <SubjectIcon />
  },
];

const useStyles = makeStyles((theme) => ({
  stepLabel: {
    '& .MuiStepLabel-label': {
      fontSize: '1.75rem', // Tamaño de fuente más grande para las etiquetas de los pasos
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
      },
      [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '1.5rem',
      },
    },
    '& .MuiStepLabel-label.Mui-active': {
      color: '#3f4b8c',
      fontWeight: 'bold' // Color para el StepLabel activo
    },
  },
  typography: {
    '& .MuiTypography-root': {
      fontSize: '1.25rem', // Tamaño de fuente para las descripciones de los pasos
      textAlign: 'justify', // Justificar el texto de las descripciones de los pasos
      [theme.breakpoints.down('sm')]: {
        fontSize: '0.8rem',
      },
      [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '1.15rem',
      },
    },
  },
  stepIcon: {
    color: 'gray', // Color por defecto de los iconos de los pasos
  },
  stepIconActive: {
    color: '#3f4b8c', // Color de los iconos de los pasos activos
  },
  icon: {
    '& .MuiSvgIcon-root': {
      width: '2rem',
      height: '2rem', // Tamaño de los iconos para pantallas grandes (desktop)
      [theme.breakpoints.down('sm')]: {
        width: '1.25rem',
        height: '1.25rem', // Tamaño de los iconos para pantallas pequeñas (mobile)
      },
      [theme.breakpoints.between('sm', 'md')]: {
        width: '1.5rem',
        height: '1.5rem', // Tamaño de los iconos para pantallas medianas (tablet)
      },
    },
  },
}));


const CustomStepIcon = (props) => {
  const { active, completed, icon } = props;
  const theme = useTheme(); // Obtén el tema
  const classes = useStyles(theme);
  return (
    <div className={`${classes.icon} ${completed ? classes.stepIconCompleted : ''} ${active ? classes.stepIconActive : ''}`}>
      {icon}
    </div>
  );
};

export const VerticalLinearStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(true);
  const theme = useTheme();
  const classes = useStyles(theme);

  useEffect(() => {
    let interval;
    if (isTimerActive) {
      interval = setInterval(() => {
        setActiveStep((prevActiveStep) => {
          if (prevActiveStep < steps.length - 1) {
            return prevActiveStep + 1;
          } else {
            return 0;
          }
        });
      }, 3000);
    }

    return () => clearInterval(interval);
  }, [isTimerActive]);

  const handleStepClick = (index) => {
    setActiveStep(index);
    setIsTimerActive(false);
  };

  const handleOutsideClick = () => {
    setIsTimerActive(true);
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box className='stepperContainer' onClick={(e) => e.stopPropagation()}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label} onClick={() => handleStepClick(index)}>
              <StepLabel
                classes={{ root: classes.stepLabel }}
                StepIconComponent={(props) => <CustomStepIcon {...props} icon={step.icon} />}
              >
                {step.label}
              </StepLabel>
              <StepContent classes={{ root: classes.typography }}>
                <Typography >{step.description}</Typography>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography sx={{ fontSize: '1rem' }}>All steps completed - you&apos;re finished</Typography>
          </Paper>
        )}
      </Box>
    </ThemeProvider>
  );
};
