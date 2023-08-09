import React, {useState} from 'react';
import "../Styles/Form.css";

const Form = () => {

    const [formData, setFormData] = useState({
        name: '',
        message: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <div className="container">
                <div className="sub-home">

                    <form onSubmit={handleSubmit}>
                        <div className="form">
                            <p className="title-form">Écris-moi un joli mot</p>
                                <label htmlFor="name" className="active title-link">Prénom</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Victor"
                                />


                                <label htmlFor="message" className="active title-link">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="If my life is going to mean anything, I have to live it myself."
                                />
                        </div>
                        <div className="button">
                            <button type="submit" className="button-design">Envoyer</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Form;