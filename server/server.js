import express from 'express';
import mysql from 'mysql';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json())

const db = mysql.createConnection({
    user:'root',
    host: 'localhost',
    password:'1111',
    database:'test'
})

app.post('/register', (req, res) => {
    const q = "INSERT INTO test {username, password} VALUES (?,?)"

    db.query(q, [email, password])
})

app.listen(port)