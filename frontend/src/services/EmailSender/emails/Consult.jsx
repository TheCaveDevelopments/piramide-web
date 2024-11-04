import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Button,
  Img,
} from "@react-email/components";

const main = {
  backgroundColor: '#f4f4f4',
  fontFamily: 'Arial, sans-serif',
  padding: '20px',
};

const container = {
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  maxWidth: '600px',
  margin: '0 auto',
};

const codeTitle = {
  color: '#333333',
  fontSize: '24px',
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: '20px',
};

const codeDescription = {
  color: '#555555',
  fontSize: '16px',
  lineHeight: '1.5',
  marginBottom: '20px',
};

const infoContainer = {
  marginBottom: '20px',
};

const infoStyle = {
  color: '#333333',
  fontSize: '16px',
  lineHeight: '1.5',
  marginBottom: '10px',
};

const buttonContainer = {
  textAlign: 'center',
  marginBottom: '20px',
};

const button = {
  backgroundColor: '#3f4b8c',  // Cambiado el color del botón
  color: '#ffffff',
  padding: '10px 20px',
  borderRadius: '5px',
  textDecoration: 'none',
  display: 'inline-block',
};

const paragraph = {
  color: '#555555',
  fontSize: '16px',
  lineHeight: '1.5',
  marginBottom: '10px',
};

const link = {
  color: '#007bff',
  textDecoration: 'none',
};

export const Consult = ({ completename, email, phone, subject, consult }) => {
  return (
    <Html>
      <Head />
      <Preview>Consulta de cliente - Piramide</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img width='560px' src="https://piramidesoluciones.thecave.com.ar/1.jpg" alt="Piramide imagen" />
          <Heading style={codeTitle}>Nueva Consulta de Cliente</Heading>
          <Text style={codeDescription}>
            Hola equipo,
          </Text>
          <Text style={codeDescription}>
            Hemos recibido una nueva consulta de un cliente. Por favor, revisa los detalles a continuación y responde a la brevedad.
          </Text>
          <Section style={infoContainer}>
            {completename && <Text style={infoStyle}><strong>Nombre Completo:</strong> {completename}</Text>}
            {email && <Text style={infoStyle}><strong>Email:</strong> {email}</Text>}
            {phone && <Text style={infoStyle}><strong>Teléfono:</strong> {phone}</Text>}
            {subject && <Text style={infoStyle}><strong>Asunto:</strong> {subject}</Text>}
            {consult && <Text style={infoStyle}><strong>Consulta:</strong> {consult}</Text>}
          </Section>
          <Section style={buttonContainer}>
            <Button
              href={`mailto:${email}?subject=${encodeURIComponent(subject)}`}
              style={button}>
              Responder Consulta
            </Button>
          </Section>
          <Text style={paragraph}>Gracias por tu atención.</Text>
        </Container>
      </Body>
    </Html>
  );
};
