/* ------ QUERIES ------*/
export const beginner_query = 
`   SELECT
        c.title,
        c.description,
        c.price,
        c.modality,
        c.difficulty,
        u.user_id AS profesor_id,
        u.name AS profesor_name,
        u.image AS profesor_image
        FROM courses c
        JOIN users u ON c.profesor_id = u.user_id
        WHERE c.difficulty = 'beginner'
        AND u.rol = 'profesor';
        `;

export const intermedium_query = 
`   SELECT
        c.title,
        c.description,
        c.price,
        c.modality,
        c.difficulty,
        u.user_id AS profesor_id,
        u.name AS profesor_name,
        u.image AS profesor_image
        FROM courses c
        JOIN users u ON c.profesor_id = u.user_id
        WHERE c.difficulty = 'intermedium'
        AND u.rol = 'profesor';
        `;
        
export const advanced_query = 
`   SELECT
        c.title,
        c.description,
        c.price,
        c.modality,
        c.difficulty,
        u.user_id AS profesor_id,
        u.name AS profesor_name,
        u.image AS profesor_image
        FROM courses c
        JOIN users u ON c.profesor_id = u.user_id
        WHERE c.difficulty = 'advanced'
        AND u.rol = 'profesor';
        `;

export const cursos_query = 
`   SELECT
        c.title,
        c.description,
        c.price,
        c.modality,
        c.difficulty,
        u.name AS profesor_name,
        u.image AS profesor_image
        FROM courses c
        JOIN users u ON c.profesor_id = u.user_id
        WHERE u.rol = 'profesor';
        `;


export const getProfesors_query =
`SELECT 
    user_id, name, email, image
    FROM users 
    WHERE rol = 'profesor'`;

export const insertCourses_query =
`INSERT INTO courses (title, description, difficulty, modality, price, profesor_id)
VALUES ($1, $2, $3, $4, $5, $6)
RETURNING *
`

