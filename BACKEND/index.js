import cors from "cors";
import express from "express";
import pool from "./db.js";
import bcrypt from "bcrypt";

const app = express();


/* EL GET ES PARA RUTEAR, 
TAMBIÉN TIENEN DIFERENTES NOMBRES CADA UNO DISTINTO "POST" , "PUT"
SI QUIERES MATCH TODO LO DEMAS, DEBAJO DE TODOS LOS GET ES LA FUNCION USE*/

app.get("/test-db", async(req, res) =>{
    const result = await
    pool.query("SELECT NOW()");
    res.json(result.rows);
})

app.get('/', (req, res) =>{
    /* EL res.send PUEDE SER UN STRING, UN OBJETO,UN HTML, ES VERSATIL*/
    res.send('<h1> This is home page </h1>');
});

app.get('/r/:subreddit', (req, res) =>{
    const {subreddit} = req.params;
    res.send(`<h1> Viendo el ${subreddit} subreddit </h1>`);
}) ;

app.get('/r/:subreddit/:postID', (req, res) =>{
    const {subreddit, postID} = req.params;
    res.send(`<h1> Viendo el ID: ${postID} en el ${subreddit} subreddit </h1>`);
}); 

/* TO GET A QUERY */
app.get('/search', (req, res) =>{
    const {q} = req.query;
    res.send(`<h1> search results for: ${q} </h1>`);
});

app.use(cors());
app.use (express.urlencoded({ extended: true})); 
app.use (express.json());

/* ----- REGISTER -------- */
app.post ('/register', async (req, res) =>{
    const {name, email, password} = req.body;

    try{
        // ------ VERIFY EXISTING FILE
        const userExist = await pool.query("SELECT id FROM usuarios WHERE email= $1",[email]);
        if (userExist.rows.length > 0){
            return res.status(400).json({message: 'Usuario ya existe'});
        }

        // ------ ENCRIPT PASSWORD   
        const hashedPassword = await bcrypt.hash(password, 10);

        // ------- INSERT USER
        const newUser = await pool.query('INSERT INTO usuarios (name, email, password) VALUES ($1, $2, $3) RETURNING id, email',[name, email, hashedPassword]);

        // ------ ANWSER
        res.status(201).json({ message: 'User Register Succesfully', user: newUser.rows[0]});
    }catch (error){
        console.error(error);
        res.status(500).json({ message: 'Error on register'});
    }
});

/* ---------- LOGIN ---------*/
app.post ('/login', async (req, res) =>{
    const {email, password} = req.body;

    // --- FIND USER
    const result = await pool.query("SELECT * FROM usuarios WHERE email= $1",[email]);
    if (result.rows.length === 0){
        return res.status(401).json({ success: false, message: 'Usuario no existe'});
    }   
    const user = result.rows[0];

    // ---- COMPARE PASSWORDS
    const isValid = await bcrypt.compare(password, user.password)
    if (!isValid){
        return res.status(401).json({ success: false, message: 'Password Incorrect'});
    }
    res.json({message: 'Login exitoso', userID: user.id});
});

/* EL USE SE USA AL FINAL PARA TODOS LOS PATH QUE NO EXISTEN, ENGLOBA TODAS LAS PETICIONES*/
app.use((req, res) =>{
    res.send('I dont know that path');
});  

app.listen(3000, ()=> {
    console.log ("Listening on port 3000");
});

