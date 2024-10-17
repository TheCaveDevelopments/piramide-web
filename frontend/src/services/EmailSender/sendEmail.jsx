import ReactDOMServer from "react-dom/server";
import { Consult } from "./emails"; // Asegúrate de importar tu componente de email

const renderEmailTemplate = (formData) => {
  return ReactDOMServer.renderToString(<Consult {...formData} />);
};

export async function sendEmail(formData) {
  const emailHtml = renderEmailTemplate(formData);

  const payload = {
    ...formData,
    emailHtml,
  };

  try {
    const response = await fetch("http://localhost:3000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Failed to send email");
    }

    const data = await response.json();
    console.log("Email sent successfully:", data);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}
