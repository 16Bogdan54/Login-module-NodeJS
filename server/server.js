import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import bcrypt, {hash} from 'bcrypt';
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

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

        db.query(q, [username, password])
    })
})

app.post('/login', (req, res) => {
    const username = req.body.email;
    const password = req.body.password;

    const q = "SELECT * FROM user WHERE username = ? AND password = ?"

    db.query(q, [username, password], (err, result) => {
        if (err) console.log(err);
        if(result) {
            bcrypt.compare(password, result.password, (err, res) => {
                if (res) {
                    req.session.user = result;
                    console.log(req.session.user);
                    res.send(result);
                } else {
                    res.send({ message: "Wrong username/password combination!" });
                }
            })
        }
    });
})

app.listen(port)