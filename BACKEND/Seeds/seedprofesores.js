import pool from "../db.js";
import bcrypt from "bcrypt";

const profesores = [
    {
        name : 'Tom Morello',
        email: 'tomMorrello@gmail.com',
        password: '1234',
        rol: 'profesor',
        image: 'Tom Morello.jpg',
    },
    {
        name : 'Joe Bonammassa',
        email: 'joeBonammassa@gmail.com',
        password: '1234',
        rol: 'profesor',
        image: 'Joe Bonammassa.jpg',
    },
    {
        name : 'Eric Gales',
        email: 'ericGales@gmail.com',
        password: '1234',        
        rol: 'profesor',
        image: 'Eric Gales.jpg',
    }
];
async function crearProfesores(){
    try{
        for(const prof of profesores){
            const hash = await bcrypt.hash(prof.password,10)

            await pool.query(
                `INSERT INTO users (name, email, password, rol, image)
                VALUES($1,$2,$3,$4,$5)`,[prof.name, prof.email, hash, prof.rol, prof.image]
            );
            console.log(`Profesor creado: ${prof.email}`);
        }
        process.exit();
    } catch(err){
        console.error('Error: ', err);
        process.exit(1);
    }
}

crearProfesores();