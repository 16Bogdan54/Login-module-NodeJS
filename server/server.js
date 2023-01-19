import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import bcrypt from 'bcrypt';
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import session from 'express-session'

const saltRounds  = 3;

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json())
app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
        credentials: true,
    })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    session({
        key: "userId",
        secret: "subscribe",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60 * 60 * 24,
        },
    })
);

const db = mysql.createConnection({
    user:'root',
    host: 'localhost',
    password:'1111',
    database:'test'
})

app.post('/register', (req, res) => {
    const username = req.body.email;
    const password = req.body.password;

    bcrypt.hash(password, saltRounds, (err, hash) => {
        const q = "INSERT INTO user (username, password) VALUES (?,?)"

        db.query(q, [username, hash])
    })
})

app.post('/login', (req, res) => {
    const username = req.body.email;
    const password = req.body.password;

    const q = "SELECT * FROM user WHERE username = ?"

    db.query(q, username,
        (err, result) => {

        if (err) res.send({error: err})

        if(result.length > 0) {
            bcrypt.compare(password, result[0].password, (error, response) => {
                if (response) {
                    req.session.user = result;
                    console.log(req.session.user);
                    res.send(result);
                    console.log("success")
                } else {
                    res.send({ message: "Wrong username/password combination!" });
                }
            });
        }

        if(result.length < 0) res.send({ message: "User doesn't exist" });
    });
})

app.listen(port)