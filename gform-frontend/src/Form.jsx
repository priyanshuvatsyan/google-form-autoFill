import { useState } from "react";
import axios from "axios";

const Form = () => {
    const [formData, setFormData] = useState({
        Name: " ",
        Email: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/submit-form", formData);
            alert("Form Submitted: " + JSON.stringify(response.data));
        } catch (error) {
            alert("Error submitting form.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="Name" placeholder="Name" onChange={handleChange} />
            <input type="email" name="Email" placeholder="Email" onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
