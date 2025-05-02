import nodemailer from "nodemailer";
import 'dotenv/config.js'

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    },
});

function sendEmail(email, bookTitle, dueDate) {
    const mailOptions = {
        from: '',
        to: email,
        subject: 'Livro emprestado',
        html: `<div style="font-family: Arial, sans-serif; color: #333; font-size: 16px;">
<h2>Lembrete da Biblioteca Comunitária</h2>
<p>Olá,</p>
<p>Este é um lembrete para a devolução do livro "${bookTitle}".</p>
<p>Data de devolução: ${dueDate}</p>
<p>Por favor, devolva o livro até a data indicada.</p>
<p>Obrigado por utilizar nossa biblioteca!</p>
</div>`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email enviado: ' + info.response);
        }
    });
};



export default sendEmail