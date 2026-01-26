<template>
    <main class="classes" id="main__classes">
        <h1 class="classes__title">My courses: <span class= "user-name">"{{getUser().name}}"</span></h1> 
        <div class="classes__category-container">       
            <MyCourses></MyCourses>
        </div>
    </main>
    <div class="background-wrapper"></div>
</template>

<script setup>
    import MyCourses from '@/components/ProfesControl/ProfesCourses/MyCourses.vue'
    import {getUser} from '@/assets/UTILS/auths'

    

</script>

<style scoped>
.background-wrapper{
  height:30vh;
}
.user-name{
    color: #fff;
}

.classes{
    margin-top: 50px;
    container-name: classes;
    container-type: inline-size;
}

.classes__title{
    text-align: center;
    color: rgb(127,255,212);
}

.classes__category-container{
    display: grid;
    grid-template-columns: 1fr; 
    max-width: 1300px;
    margin:auto;    
    width: 100%;
    gap: 20px;
    padding: 20px;   
    min-height: 60vh;
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