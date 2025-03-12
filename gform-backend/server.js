require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/submit-form", async (req, res) => {
    try {
        const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;
        const response = await axios.post(GOOGLE_SCRIPT_URL, req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Error submitting form" });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));
