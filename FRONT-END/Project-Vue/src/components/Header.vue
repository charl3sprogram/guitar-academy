<template>
    <header class="header">
        <input type="checkbox" class="header__checkbox" id="open-menu">
        <label for="open-menu" class="header__open-nav-button" role="button">=        
        </label>

        <div class="header__logo-container">
            <img src="../assets/logo.svg" class="header__logo">
        </div>
        <nav class="header__nav">
            <ul class="header__nav-menu">
                <li class="header__nav-item">
                    <router-link :to = "{name: 'Home'}"> Home  </router-link>
                </li>    
                <li class="header__nav-item header__nav__submenu" >
                    <a class = "header__nav-submenu-button"> Curses </a>
                    <ul class="header__nav-submenu-container">
                        <li class= "header__nav-submenu-item"> 
                            <router-link :to = "{name: 'BeginnersCards'}">Beginners</router-link>  
                        </li>
                        <li class= "header__nav-submenu-item"> 
                            <router-link :to = "{name: 'IntermediumCards'}">Intermedium</router-link>
                        </li>
                        <li class= "header__nav-submenu-item"> 
                            <router-link :to = "{name: 'AdvancedCards'}">Advanced</router-link>
                        </li>
                    </ul> 
                </li>               
                <li class="header__nav-item" >
                    <router-link :to = "{name: 'Login'}">Log In</router-link>
                </li>
                <li class="header__nav-item">
                    <router-link :to = "{name: 'Register'}">Register</router-link>
                </li>
            </ul>
        </nav>
    </header>

</template>

<script setup>



</script>

<style scoped>

/*----------- HEADER SECTION ----------------*/
.header{
    background-color: #101632f4;
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
    background-color: #101632aa;
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
    color: #26d;
}

.header__nav-item :is(:hover,:active){
    text-decoration: underline;
}

/* Contenedor del item con submenú */
.header__nav__submenu {
    position: relative;
}

/* Submenú oculto por defecto */
.header__nav-submenu-container {
    position: absolute;
    top: 100%;
    left: 0;   
    display: none;
    flex-direction: column;
    list-style: none;

    padding: 8px 0;
    border-radius: 10px;
    max-width: 180px;
    z-index: 20;

}

/* Mostrar submenú al hover */
.header__nav__submenu:hover .header__nav-submenu-container {
    display: flex;
}


/* Botón "Curses" */
.header__nav-submenu-button {
    cursor: pointer;
    color: #26e;
    display: inline-block;
}

/* Efecto hover del botón */
.header__nav-submenu-button:hover {
    text-decoration: underline;
}

/* Items del submenú */
.header__nav-submenu-item {
    padding-left: 15px;
}

/* Links del submenú */
.header__nav-submenu-item a {
    color: #9ab7ff;
    font-size: 0.9em;
}

.button{
    position:relative;

    width: 30%;
    padding: 10px 40px;
    color: #fff;
    background-color:transparent;   
    letter-spacing: 3px; 
    margin :auto;
    margin-bottom: 20px;
    z-index: 10;
    

    border: 1px solid #44e; 
    border-radius: 6px;  
    overflow: hidden;
}

.button::before{
    content: '';
    background-color:  #d15959;
    display: block;
    height: 300%;
    width: 140%;
    position:absolute;
    z-index: -1;
    margin-top: 30%;
    transition: top .6s, left .6s;
    border-radius: 50%;
    top: 100%;
    left: 30%;
} 
.button:hover::before{
    top:-35%;
    left: -20%;
    margin-top: -10%;
}




/* ------- HEADER QUERIES -----------*/
@media screen and (min-width: 740px){
    .header{
        padding: 10px 0;
        animation: header-movement both;
        animation-timeline: scroll();
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

@keyframes header-movement {
    from{
        margin: 0;
        background-color: #101632f4;      
    }
    to{
        background-color: #101632dd;
    }
}


</style>