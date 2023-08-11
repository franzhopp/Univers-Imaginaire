import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "../Styles/Form.css";
// import Footer from "./Footer";

const Form = () => {
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

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
      setStatus("Ton message a bien été envoyé!");
    } catch (error) {
      console.error("Erreur d'envoi d'e-mail :", error);
    }
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
            </div>
            <div className="button">
              <button type="submit" className="button-design">
                Envoyer
              </button>
            </div>
            <div className="success-message">{status && <p>{status}</p>}</div>
          </form>
        </div>
      </div>
        {/* <Footer/> */}
    </>
  );
};

export default Form;
