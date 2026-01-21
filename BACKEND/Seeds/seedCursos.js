import pool from "../db";

/* searchProfesorID FUNCTION*/
const cursos = [
    {
        title : 'Bendings',
        description: 'You will learn a lot about this',
        difficulty: 'intermedium',
        modality: 'online',
        price: 4.05,
        profesor_id: 13
    },
    {
        title : 'Slide harmonics',
        description: 'You will learn a lot about this',
        difficulty: 'advanced',
        modality: 'presencial',
        price: 3.65,
        profesor_id: 14
    },
    {
        title : 'Chords and Scales',
        description: 'You will learn a lot about this',
        difficulty: 'intermedium',
        modality: 'presencial',
        price: 3.75,
        profesor_id: 15
    },
    {
        title : 'Sweep Tapping',
        description: 'You will learn a lot about this',
        difficulty: 'advanced',
        modality: 'online',
        price: 3.85,
        profesor_id: 15
    }
];

async function crearCursos(){
    try{
        for(const c of cursos){

            await pool.query(
                `INSERT INTO courses (title, description, difficulty, modality, price, profesor_id)
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