export function isLogged (){
    return !!localStorage.getItem('token');
}

export function getUser(){
    /* FORMA CORRECTA DE OBTENER EL OBJETO .... LEYENDO Y CONVIRTIENDO EL USUARIO JSON.parse----
    ---------- OTRA FORMA --- localStorage.getItem() SOLO DEVUELVE UN STRING */
    const user = JSON.parse(localStorage.getItem('user'));
    return user
}

export function isProfesor(){
    const user = getUser();
    return user?.rol === 'profesor';
}

export function isAdmin(){
    const user = getUser();
    return user?.rol === 'admin';  
}

export function logOut (){
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = "/";
    };

export function canDeleteCourse(course){
        const user = getUser();

        if (!user) return false;

        if(user.rol === 'admin') return true;

        return false;       
    }
    


