import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    user:'root',
    host: 'localhost',
    password:'1111',
    database:'test'
})

app.post('/register', (req, res) => {
    console.log(req.body)
    const username = req.body.email;
    const password = req.body.password;

    const q = "INSERT INTO user (username, password) VALUES (?,?)"

    db.query(q, [username, password])
})

app.post('/login', (req, res) => {
    const username = req.body.email;
    const password = req.body.password;

    const q = "SELECT * FROM user WHERE username = ? AND password = ?"

    db.query(q, [username, password], (err, result) => {
        if (err) console.log(err);
        result ? console.log("success") : res.send("no user found")
    });
})

app.listen(port)