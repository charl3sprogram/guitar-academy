<template>
    <main class="classes" id="main__classes">
        <h1 class="classes__title">My courses: <span class= "user-name">"{{getUser().name}}"</span></h1> 
        <CursosNavBar></CursosNavBar>
        <div class="classes__category-container">       
            <MyCourses></MyCourses>
        </div>
    </main>
    <div class="background-wrapper"></div>
</template>

<script setup>
import MyCourses from '@/components/ProfesControl/ProfesCourses/MyCourses.vue'
import CursosNavBar from '@/components/Cursos/CursosNavBar.vue'
import {getUser} from '@/assets/UTILS/auths'

    

</script>

<style scoped>
.background-wrapper{
  height:30vh;
}
.user-name{
    color: #fff;
}

</style>