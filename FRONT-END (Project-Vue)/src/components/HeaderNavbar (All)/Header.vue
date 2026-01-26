<template>
    <header class="header">
        <input type="checkbox" class="header__checkbox" id="open-menu">
        <label for="open-menu" class="header__open-nav-button" role="button">=        
        </label>

        <div class="header__logo-container">
            <img src="../../assets/LOGOS/logo.svg" class="header__logo">
        </div>
        <nav class="header__nav">
            <ul class="header__nav-menu">
                <li class="header__nav-item">
                    <router-link :to = "{name: 'Home'}"> Home  </router-link>
                </li>    
                <li class="header__nav-item" >
                    <router-link :to = "{name: 'Courses'}"> Courses </router-link>                   
                </li>      
                <li class="header__nav-item" v-if = "!isLogged()">
                    <router-link :to = "{name: 'Register'}">Register</router-link>
                </li> 

                <!-- CODIGOS PARA USUARIOS LOGUEADOS  -->      
                <li class="header__nav-item" v-if = "!isLogged()">
                    <router-link :to = "{name: 'Login'}">Log In</router-link>
                </li>
                <li class="header__nav-item" v-if = "isLogged()">
                    <router-link :to = "{name: 'Login'}"  @click = "logOut()">Log Out</router-link>
                </li>
                <li class="header__nav-item" v-if = "isLogged()">
                    <router-link :to = "{name: ''}"> Profile</router-link>
                </li>

                <!-- CODIGOS PARA USUARIOS ESPECIFICOS LOGUEADOS  --> 
                <li class="header__nav-item" v-if = "isProfesor() || isAdmin()" >
                    <router-link :to = "{name: 'CreateCourse'}"> Create Course </router-link>
                </li>
                <li class="header__nav-item" v-if = "isProfesor()" >
                    <router-link :to = "{name: 'MyCourses'}"> My Courses </router-link>
                </li>
                <li class="header__nav-item">
                    <router-link :to = "{name: 'Profesors'}"> Profesors </router-link>
                </li>
            </ul>
        </nav>     
    </header>

</template>

<script setup>
    import {isLogged, isProfesor, isAdmin, logOut} from '@/assets/UTILS/auths';


</script>

<style scoped>

/*----------- HEADER SECTION ----------------*/
.header{
    background-color: rgb(15, 25, 50);
    box-shadow: 0 0 8px rgb(127,255,212);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 10;
    text-align: center;
    font-size: 20px;
    color: #26e;
    margin: 0;
    padding: 0;

}
.header__open-nav-button{
    color: #26a;
    font-size: 3.2rem;
    font-weight: 700;
    position: absolute;
    right: 15px;
}

.header__checkbox{
    display: none;
}

.header__nav{
    display: none; 
    background-color: rgb(15, 25, 50);
    position: absolute;  
    height: 100vh;
    width: 100vw;
    top: 0;
    z-index: -1;  
} 

.header__checkbox:checked ~ .header__nav{
    display: flex;
    
}

.header__nav-menu{
    display: flex;
    flex-direction: column;
    height: 40vh;
    margin: auto;
    justify-content: space-evenly;
}

.header__logo-container{
    margin: 0;
    padding: 0;
}

.header__logo{
    max-width: 100%;
    width:50px;
    margin: 8px 20px;
}

.header__nav-item{    
    list-style:none;
    padding: 8px; 
    border-radius: 12px;
}

.header__nav-item a{       
    text-decoration: none;
    color: #2a4cff;
}

.header__nav-item :is(:hover,:active){
    text-decoration: underline;
}

/* ------- HEADER QUERIES -----------*/
@media screen and (min-width: 740px){
    .header{
        padding: 10px 0;
        position: sticky;
        top: 0;
        animation-range: 10px 100px;       
    }

    .header__nav{
        display: block;
        position: static;
        z-index: 10;   
        height: auto; 
        width: auto;    
        justify-content: space-between; 
        background-color: initial; 
    }

    .header__nav-menu{
        flex-direction: row;
        height: auto;
        width: auto;
        gap: 20px;
        margin-right: 40px;
    }


    .header__open-nav-button{
        display:none;
    }
}

/* ----------- HEADER ENDS ----------*/

/* --------ANIMATION -------*/

</style>