import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "../Styles/Form.css";
import Footer from "./Footer";

// import Footer from "./Footer";

const Form = () => {
  // gestion du status d'envoi
  const [status, setStatus] = useState("");
  // traitement du formulaire
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });
  // gestion d'erreurs
  const [errors, setErrors] = useState({
    name: "",
    message: "",
  });

  // traitement d'envoi du message
  const [isLoading, setIsLoading] = useState(false);

  // traitement des valeurs liées aux inputs
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // gestion d'évènement via l'action du button
  const handleSubmit = async (event) => {
    event.preventDefault();

    // erreurs d'envoi s'il n'y a aucun champ sur l'input
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Veuillez entrer un prénom.";
    }

    if (!formData.message) {
      newErrors.message = "Veuillez entrer un message.";
    }

    // sortir de la soumission si des erreurs existent
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // initialiser et afficher le loader au début (avant l'envoi du message)
    setIsLoading(true);

    // traitement d'envoi via emailjs
    const emailParams = {
      to_name: "Louisa",
      name: formData.name,
      message: formData.message,
    };

    try {
      const response = await emailjs.send(
        "SERVICE_LOUOHS_4683939",
        "template_4fjeb3a",
        emailParams
      );

      console.log("Email envoyé !", response.status, response.text);
      setStatus("Ton message a bien été envoyé! :)");
    } catch (error) {
      console.error("Erreur d'envoi d'e-mail :", error);
    }

    // initialiser le loader à la fin (en cas d'erreur)
    setIsLoading(false);
  };

  useEffect(() => {
    emailjs.init("E-u_BQRxlwXZIR-_Y");
  }, []);

  return (
    <>
      <div className="container">
        <div className="sub-home">
          <form onSubmit={handleSubmit}>
            <div className="form">
              <p className="title-form">Écris-moi un joli mot</p>
              <label htmlFor="name" className="active title-link">
                Prénom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Ton prénom"
              />
              {errors.name && <p className="error-message">{errors.name}</p>}

              <label htmlFor="message" className="active title-link">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="If my life is going to mean anything, I have to live it myself."
              />
              {errors.message && (
                <p className="error-message">{errors.message}</p>
              )}
            </div>
            {/* action submit */}
            <div className="button-center">
              <button
                onClick={handleSubmit}
                className={`button-design ${isLoading ? "loading" : ""}`}
                disabled={isLoading}
              >
                {isLoading ? <div className="loader"></div> : "Envoyer"}
              </button>
            </div>
            <div className="success-message">{status && <p>{status}</p>}</div>
          </form>
        </div>
      </div>
      {/* STYLE CSS FROM LOADER */}
      <style>
        {`
       .loader {
        border: 4px solid rgba(0, 0, 0, 0.1);
        border-radius: 50%;
        width: 20px;
        height: 20px;
        animation: spin 1s linear infinite;
        display: inline-block;
        margin-top: 0;
      }

      .button-center {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 40px; 
      }
      
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }

            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
      <Footer/>
    </>
  );
};

export default Form;
