<template>
    <header class="header">
        <input type="checkbox" class="header__checkbox" id="open-menu">
        <label for="open-menu" class="header__open-nav-button" role="button">=        
        </label>

        <div class="header__logo-container">
            <img src="../assets/logo.svg" class="header__logo">
        </div>
        <nav class="header__nav">
            <ul class="header__nav-list">
                <li class="header__nav-item"><a href="#"> About </a></li>
                <li class="header__nav-item"><a href="#"> Portafolio </a></li>
                <li class="header__nav-item"><a href="#"> Contact </a></li>
            </ul>
        </nav>



    </header>



</template>

<script setup>




</script>

<style scoped>

*{
    box-sizing: border-box;
}

div, ul, nav, header, footer, a, li, label {
    margin: 0;
    padding: 0;
}


/*------ HEADER SECTION */
.header{
    background-color: #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    container-type: inline-size;
    container-name: header;
}
.header__open-nav-button{
    color: #44e;
    font-size: 3rem;
    font-weight: 700;
    position: absolute;
    right: 15px;
}

.header__checkbox{
    display: none;
}

.header__nav{
    display: none; 
    background-color: #444;
    position: absolute; 
    height: 100vh;
    width: 100vw;
    top: 0;
    z-index: -1; 
} 

.header__checkbox:checked ~ .header__nav{
    display: flex;
    
}

.header__nav-list{
    display: flex;
    flex-direction: column;
    height: 40vh;
    margin: auto;
    justify-content: space-evenly;

}

.header__logo{
    max-width: 100%;
    width:64px;
    margin: 10px 20px;
}

.header__nav-item{    
    list-style:none;
}

.header__nav-item a {    
    color: #46e;
    text-decoration: none;
}

.header__nav-item :is(:hover,:active){
    text-decoration: underline;
}



/* ------- HEADER QUERIES */
@container header (min-width: 600px){
    .header__nav{
       /*  display: block; */
        position: static; 
        height: auto;
       /* width: auto;    
        justify-content: space-between;  */   
    }

    /* .header__nav-list{
        flex-direction: row;
        height: auto;
        width: auto;
        gap: 20px;
        margin-right: 40px;
    }

    .header__open-nav-button{
        display:none;
    } */
}

/* -------- HEADER ENDS */





</style>


