require('@babel/register')({
    presets: ['@babel/preset-env', '@babel/preset-react']
});

const express = require('express');
const { Resend } = require('resend');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const resend = new Resend('re_JEFY5LM6_AFC5QoUsyb2YgXoDcAAEcqCf');

const sendConsultConfirmEmail = async ({ email, completename, subject, emailHtml }) => {
    const response = await resend.emails.send({
      from: 'Piramide Soluciones <onboarding@resend.dev>',
      to: 'atilio.rausch@uner.edu.ar', // Enviar al email proporcionado
      subject: subject || 'Thank you',
      html: emailHtml
    });
  
    if (!response) {
      throw new Error('Failed to send email');
    }
  
    return response;
  };
  
  app.post('/send-email', async (req, res) => {
    const { completename, email, phone, subject, consult, emailHtml } = req.body;
  
    try {
      const response = await sendConsultConfirmEmail({ email, completename, subject, emailHtml });
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });