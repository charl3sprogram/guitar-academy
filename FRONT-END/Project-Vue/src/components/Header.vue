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
                    <router-link :to = "{name: 'Home'}"> Home</router-link>
                </li>
                <!-- <li class="header__nav-item">
                    <router-link :to = "{name: 'BeginnersCards'}">Beginners</router-link> 
                </li>
                <li class="header__nav-item">
                    <router-link :to = "{name: 'IntermediumCards'}">Intermedium</router-link>
                </li>    
                <li class="header__nav-item">
                    <router-link :to = "{name: 'AdvancedCards'}">Advanced</router-link>
                </li> -->
                 <!--    <ul class="header__nav-submenu">
                        <li class= "header__nav-submenu-item"> <a href="#">Beginner</a> </li>
                        <li class= "header__nav-submenu-item"> <a href="#">Intermedium</a> </li>
                        <li class= "header__nav-submenu-item"> <a href="#">Advanced</a> </li>
                    </ul> -->
                
                <li class="header__nav-item">
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
    text-align:center;
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
    background-color: #101632f4;;
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

/* #cursos-desplegable:hover{
    .header__nav-submenu{
        display:block;
    }
}

.header__nav-submenu{
    display:none;
    list-style: none;
} */

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
    background-color: #d8d8d855;
    border-radius: 12px;

}

.header__nav-item a{       
    text-decoration: none;
    color: #00ff70;
}

.header__nav-item :is(:hover,:active){
    text-decoration: underline;
}



/* ------- HEADER QUERIES -----------*/
@media screen and (min-width: 740px){
    .header{
        padding: 20px 0;
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
        padding: 5px 0; 
        background-color: #101632f4;      
    }
    to{
        padding: 0;
        background-color: #101632dd;
        color: #fff;
    }
}


</style>