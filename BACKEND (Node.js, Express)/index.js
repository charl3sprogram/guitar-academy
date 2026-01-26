import cors from "cors";
import express from "express";
import pool from "./db.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import {cursos_query, beginner_query, intermedium_query, advanced_query, getProfesors_query, insertCourses_query, myCursos_query} from './queries.js'

const app = express();
app.use(cors());
app.use (express.urlencoded({ extended: true})); 
app.use (express.json());


/* EL GET ES PARA RUTEAR, 
TAMBIÉN TIENEN DIFERENTES NOMBRES CADA UNO DISTINTO "POST" , "PUT"
SI QUIERES MATCH TODO LO DEMAS, DEBAJO DE TODOS LOS GET ES LA FUNCION USE*/

app.get("/test-db", async(req, res) =>{
    const result = await
    pool.query("SELECT NOW()");
    res.json(result.rows);
})

/* app.get('/', (req, res) =>{
    EL res.send PUEDE SER UN STRING, UN OBJETO,UN HTML, ES VERSATIL
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

TO GET A QUERY 
app.get('/search', (req, res) =>{
    const {q} = req.query;
    res.send(`<h1> search results for: ${q} </h1>`);
}); */

/* ----- REGISTER -------- */
app.post ('/register', async (req, res) =>{
    const {name, email, password} = req.body;

    // ------ VERIFY EXISTING FILE
    const userExist = await pool.query("SELECT user_id FROM users WHERE email= $1",[email]);
    if (userExist.rows.length > 0){
        return res.status(400).json({message: 'User already exists'});
    }

    // ------ ENCRIPT PASSWORD   
    const hashedPassword = await bcrypt.hash(password, 10);

    // ------- INSERT USER
    const newUser = await pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, email',[name, email, hashedPassword]);

    // ------ ANWSER
    return res.status(201).json({ message: 'User Register Successfully', user: newUser.rows[0]});
});

/* ---------- LOGIN ---------*/
app.post ('/login', async (req, res) =>{
    const {email, password} = req.body;

    // --- FIND USER
    const result = await pool.query("SELECT * FROM users WHERE email= $1",[email]);
    if (result.rows.length === 0){
        return res.status(401).json({ success: false, message: "User doesn't exist"});
    }   
    const user = result.rows[0];

    // ---- COMPARE PASSWORDS
    const isValid = await bcrypt.compare(password, user.password)
    if (!isValid){
        return res.status(401).json({ success: false, message: 'Password Incorrect'});
    }

    const token = jwt.sign(
       {id: user.user_id, email: user.email},
       process.env.JWT_SECRET,
       {expiresIn: '1d'}
    )

    res.json({message: 'Login successful, Welcome', 
        token,
        user: {
            name: user.name,
            id: user.user_id,
            email : user.email,
            rol: user.rol
        }
    });
});


/* ------- OBTENER PROFESORES --------*/
app.get("/profesors", async (req, res) =>{
    try{
        const result = await pool.query(getProfesors_query);
        res.json(result.rows);       
    } catch(err){
        console.error(err);
        res.status(500).json({error: err});
    }
})

/*  ----- TRABAJO CON CURSOS -----*/
app.get('/courses', async (req,res) =>{
    try{
        const result = await pool.query(cursos_query);
        res.json(result.rows);       
    } catch(err){
        console.error(err);
        res.status(500).json({error: err});
    }
});

app.get('/myCourses', async (req,res) =>{
    try{
        const profesorID = req.query.profesorID
        const result = await pool.query(myCursos_query, [profesorID]);
        res.json(result.rows);       
    } catch(err){
        console.error(err);
        res.status(500).json({error: err});
    }
});

app.get('/courses/beginner', async (req,res) =>{
    try{
        const result = await pool.query(beginner_query);
        res.json(result.rows);       
    } catch(err){
        console.error(err);
        res.status(500).json({error: err});
    }
});

app.get('/courses/intermedium', async (req,res) =>{
    try{
        const result = await pool.query(intermedium_query);
        res.json(result.rows);       
    } catch(err){
        console.error(err);
        res.status(500).json({error: err});
    }
});

app.get('/courses/advanced', async (req,res) =>{
    try{
        const result = await pool.query(advanced_query);
        res.json(result.rows);       
    } catch(err){
        console.error(err);
        res.status(500).json({error: err});
    }
});

app.post('/createCourse', async (req,res) =>{
    const {title, description, difficulty, modality, price, profesorEmail} = req.body;

    const result = await pool.query(`SELECT user_id FROM users WHERE email = $1 AND rol = $2`,[profesorEmail, 'profesor']);
/* ESTO ES POR SI ACASO.. PORQUE EL PROFESOR VA A ESTAR SELECCIONADO CON UN OPTION CORRECTAMENTE */
    if(result.rows.length === 0){
        return res.status(400).json({message:'Profesor no encontrado'});
    }
    const user_id = result.rows[0].user_id;
    const profesor_id = user_id;
    
    const newCourse = await pool.query(insertCourses_query,[title, description, difficulty, modality, price, profesor_id]);
    return res.status(201).json({ message: 'Course created successfully', course: newCourse.rows[0]});
});

/* ------ UPLOADING IMAGES -------- */
app.use('/uploads',express.static('uploads'));






/* EL USE SE USA AL FINAL PARA TODOS LOS PATH QUE NO EXISTEN, ENGLOBA TODAS LAS PETICIONES*/
app.use((req, res) =>{
    res.send('I dont know that path');
});  

app.listen(3000, ()=> {
    console.log ("Listening on port 3000");
});

