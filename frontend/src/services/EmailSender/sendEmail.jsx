import ReactDOMServer from "react-dom/server";
import { Consult } from "./emails";

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
    const response = await fetch("https://piramide-web-backend.onrender.com/send-email", {
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
    return { status: "success", data };
  } catch (error) {
    return { status: "error", error: error.message };
  }
}
