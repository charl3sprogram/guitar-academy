import pool from "../db.js";
import bcrypt from "bcrypt";

const admin = {
        name : 'CharlesAdmin',
        email: 'charlespuyabusiness@gmail.com',
        password: '1234',
        rol: 'admin'
    };
async function crearAdmin(){
    try{
            const hash = await bcrypt.hash(admin.password,10);
            await pool.query(
                `INSERT INTO users (name, email, password, rol)
                VALUES($1,$2,$3,$4)`,[admin.name, admin.email, hash, admin.rol]
            );
            console.log(`Admin creado: ${admin.email}`);
        process.exit();
    } catch(err){
        console.error('Error: ', err);
        process.exit(1);
    }
}

crearAdmin();