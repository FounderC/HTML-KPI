import express from 'express'
import path from 'path'
import axios from 'axios'
import nodemailer from 'nodemailer'

const __dirname = path.resolve();
const PORT = process.env.PORT ?? 8080;
const app = express();
const jsonParser = express.json();

//telegram
const BOT_TOKEN = '6709587211:AAFfyZ0tnbvs_HNBQNZqQK2cuc8UCOi6N2E';
const CHAT_ID = '-1002074047580';

app.use(express.static(path.resolve(__dirname, 'client')));

app.get('feedbackform.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'feedbackform.html'));
})

app.get('loginform.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'loginform.html'));
})

app.get('registrationform.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'registrationform.html'));
})

app.listen(PORT, () => {
    console.log(`Сервер було запущено на порту ${PORT}...`);
})

app.post("/feedbackdata", jsonParser, async (req, res) => {
    const responseText = req.body;

    if (!responseText) {
        return res.sendStatus(400);
    }
    res.send(responseText);

    //telegram
    let formattedText = JSON.stringify(responseText, null, 2)
        .replace(/[\{\}"]/g, '')
        .replace(/,/g, '\n')
        .split('\n')
        .map(line => line.trim())
        .join('\n');
    const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(formattedText)}`;
    try {
        const response = await axios.get(TELEGRAM_API_URL);
        console.log('Повідомлення успішно відправлено:', response);
    } catch (error) {
        console.error('Помилка при відправці повідомлення в Telegram:', error.message);
    }

    //email
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'kametrs@gmail.com',
            pass: 'oult ycco jgqe rduw'
        }
    });

    const mailOptions = {
        from: 'kametrs@gmail.com',
        to: 'olkhomenko.kpi@gmail.com',
        subject: 'Дані відгуку',
        text: formattedText
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Помилка при відправці електронної пошти:', error.message);
        } else {
            console.log('Електронна пошта відправлена:', info.response);
        }
    });
});

app.post("/registrationdata", jsonParser, async (req, res) => {
    const responseText = req.body;

    if (!responseText) {
        return res.sendStatus(400);
    }

    res.send(responseText);
    //telegram
    let formattedText = JSON.stringify(responseText, null, 2)
        .replace(/[\{\}"]/g, '')
        .replace(/,/g, '\n')
        .split('\n')
        .map(line => line.trim())
        .join('\n');

    const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(formattedText)}`;
    try {
        const response = await axios.get(TELEGRAM_API_URL);
        console.log('Повідомлення успішно відправлено:', response);
    } catch (error) {
        console.error('Помилка при відправці повідомлення в Telegram:', error.message);
    }

    //email
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'kametrs@gmail.com',
            pass: 'oult ycco jgqe rduw'
        }
    });

    const mailOptions = {
        from: 'kametrs@gmail.com',
        to: 'olkhomenko.kpi@gmail.com',
        subject: 'Дані реєстрації',
        text: formattedText
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Помилка при відправці електронної пошти:', error.message);
        } else {
            console.log('Електронна пошта відправлена:', info.response);
        }
    });
});

app.post('/logindata', jsonParser, async (req, res) => {
    const responseText = req.body;

    if (!responseText) {
        return res.sendStatus(400);
    }
    res.send(responseText);

    //telegram
    let formattedText = JSON.stringify(responseText, null, 2)
        .replace(/[\{\}"]/g, '')
        .replace(/,/g, '\n')
        .split('\n')
        .map(line => line.trim())
        .join('\n');

    const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(formattedText)}`;
    try {
        const response = await axios.get(TELEGRAM_API_URL);
        console.log('Повідомлення успішно відправлено:', response);
    } catch (error) {
        console.error('Помилка при відправці повідомлення в Telegram:', error.message);
    }

    //email
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'kametrs@gmail.com',
            pass: 'oult ycco jgqe rduw'
        }
    });

    const mailOptions = {
        from: 'kametrs@gmail.com',
        to: 'olkhomenko.kpi@gmail.com',
        subject: 'Дані входу',
        text: formattedText
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Помилка при відправці електронної пошти:', error.message);
        } else {
            console.log('Електронна пошта відправлена:', info.response);
        }
    });
});