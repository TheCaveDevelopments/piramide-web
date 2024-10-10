require('@babel/register')({
    presets: ['@babel/preset-env', '@babel/preset-react']
});

const express = require('express');
const { Resend } = require('resend');
const React = require('react');
const cors = require('cors');
const ReactDOMServer = require('react-dom/server');
const EmailTemplate = require('./ConsultConfirm').default; // Asegúrate de importar el componente correctamente
const app = express();

app.use(cors());
app.use(express.json());

const resend = new Resend('re_JEFY5LM6_AFC5QoUsyb2YgXoDcAAEcqCf');

const sendConsultConfirmEmail = async ({ email, completename, subject }) => {
    const emailHtml = ReactDOMServer.renderToString(<EmailTemplate completename={completename} />);

    const response = await resend.emails.send({
        from: 'Atilio <onboarding@thecave.com.ar>',
        to: [email],
        subject: subject || 'Thank you',
        html: emailHtml
    });

    if (!response) {
        throw new Error('Failed to send email');
    }

    return response;
};

app.post('/send-email', async (req, res) => {
    const { email, completename, subject } = req.body;

    try {
        const response = await sendConsultConfirmEmail({ email, completename, subject });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});