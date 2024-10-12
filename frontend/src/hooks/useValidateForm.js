import { useState } from "react";

export const useValidateForm = (initialForm = {}) => {
  const [formErrors, setFormErrors] = useState(initialForm);

  const onBlurChange = ({ target }) => {
    const { name, value } = target;
    validateField(name, value);
  };

  const resetFormErrors = () => {
    setFormErrors(initialForm);
  };

  const validateField = (name, value) => {
    let error = "";
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex =
      /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;
    switch (name) {
      case "completename":
        if (value.trim() === "") {
          error = "El nombre no puede estar vacío";
        } else if (value.length < 3) {
          error = "Debe tener al menos 3 caracteres";
        } else if (!value.includes(" ")) {
          error = "Ingresar nombre y apellido";
        }
        break;
      case "email":
        if (!emailRegex.test(value)) {
          error = "El email no es válido";
        }
        break;
      case "subject":
        if (value.trim() === "") {
          error = "El asunto no puede estar vacío";
        } else if (value.length < 5) {
          error = "Debe tener al menos 5 caracteres";
        } else if (value.trim().split(/\s+/).length < 3) {
          error = "Debe contener al menos 3 palabras";
        }
        break;
      case "phone":
        if (value.trim() === "") {
          error = "El teléfono no puede estar vacío";
        } else if (!phoneRegex.test(value)) {
          error = "El teléfono no es válido";
        }
        break;
      case "consult":
        if (value.trim() === "") {
          error = "La consulta no puede estar vacía";
        } else if (value.length < 20) {
          error = "Debe tener al menos 20 caracteres";
        }
        break;
      default:
        break;
    }

    setFormErrors({
      ...formErrors,
      [`error${name}`]: error,
    });
  };

  return {
    ...formErrors,
    onBlurChange,
    resetFormErrors,
  };
};
