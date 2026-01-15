import pool from "./db.js";

const cursos = [
    {
        title : 'Sweet Picking',
        description: 'You will learn a lot about this',
        difficulty: 'beginner',
        modality: 'online',
        price: 3.55,
        profesor_id: 13 
    },
    {
        title : 'Tapping',
        description: 'You will learn a lot about this',
        difficulty: 'beginner',
        modality: 'online',
        price: 3.55,
        profesor_id: 14
    },
    {
        title : 'Economy Picking',
        description: 'You will learn a lot about this',
        difficulty: 'beginner',
        modality: 'online',
        price: 3.55,
        profesor_id: 14
    },
    {
        title : 'Slide',
        description: 'You will learn a lot about this',
        difficulty: 'beginner',
        modality: 'online',
        price: 3.55,
        profesor_id: 13
    }
];
async function crearCursos(){
    try{
        for(const c of cursos){

            await pool.query(
                `INSERT INTO cursos (title, description, difficulty, modality, price, profesor_id)
                VALUES($1,$2,$3,$4,$5,$6)`,[c.title, c.description, c.difficulty, c.modality, c.price, c.profesor_id]
            );
            console.log(`Curso creado: ${c.title}`);
        }
        process.exit();
    } catch(err){
        console.error('Error: ', err);
        process.exit(1);
    }
}

crearCursos();