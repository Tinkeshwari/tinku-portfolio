const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    // Setup your email transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'tinkeshwariloganathan@gmail.com',
            pass: 'Tinku_190706'
        }
    });

    const mailOptions = {
        from: email,
        to: 'tinkeshwariloganthan@gmail.com',
        subject: `Portfolio Contact Form: ${name}`,
        text: message
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.json({ message: 'Error sending email' });
        } else {
            res.json({ message: 'Email sent successfully!' });
        }
    });
});

const PORT = 4000;  // new port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));