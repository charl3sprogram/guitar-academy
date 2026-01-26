<template>
    <main class="classes" id="main__classes">
        <h1 class="classes__title">Profesors</h1>
        <div class="insert_container" v-if = "isAdmin()">
            <button class="classes__category-button" @click = "insertProf()"> INSERT PROFESOR </button>           
        </div>
        <div class="classes__category-container">       
            <Profesors></Profesors> 
        </div>
        
    </main>
</template>

<script setup>
    import {isAdmin} from '@/assets/UTILS/auths';
    import Profesors from '@/components/AdminControl/AdminProfes/VerProfesores.vue'


</script>


<style scoped>
.classes{
    margin-top: 50px;
    container-name: classes;
    container-type: inline-size;
}

.classes__title{
    text-align: center;
    color: rgb(127,255,212);
    margin-bottom: 20px;
    
}

.classes__category-container{
    display: grid;
    grid-template-columns: 1fr; 
    max-width: 1300px;
    margin:auto;    
    width: 100%;
    gap: 20px;
    padding: 20px;   
    min-height: 80vh;
}

/* ----- PARTE DE INSERT ------- */
.insert_container{
    background-color: rgba(15, 25, 50, 0.9);
    display: flex;
    padding-top: 20px;
}

.classes__category-button{
    position:relative;


    width: 20%;
    padding: 10px 40px;
    color: #fff;
    background-color:transparent;   
    letter-spacing: 3px; 
    margin :auto;
    margin-bottom: 20px;
    z-index: 0;
    
    border: 1px solid #44e; 
    border-radius: 6px;  
    overflow: hidden;
}

.classes__category-button::before{
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

.classes__category-button:hover::before{
    top:-35%;
    left: -20%;
    margin-top: -10%;
}
    



@container classes (min-width: 50.25rem){
    .classes__category-container{
        grid-template-columns: repeat(auto-fill,minmax(420px,1fr));
    }

    .portfolio__project:first-child{
        grid-column: span 2;
    }

    .portfolio__project:nth-child(6){
        grid-column: span 2;
    }

    
}

@container classes (min-width: 80.25rem){
    .classes__category-container{
        grid-template-columns: repeat(auto-fill,minmax(350px,1fr));
    }

    .portfolio__project:first-child{
        grid-column: span 2;
        grid-row: span 2;
    }

    .portfolio__project:nth-child(6){
        grid-column: span 4;
    }
}



</style>