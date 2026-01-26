<template>
    <main class="classes" id="main__classes">
        <h1 class="classes__title">Beginners courses</h1>
        <CursosNavBar></CursosNavBar>  
        <div class="classes__category-container">       
            <BeginnersCards></BeginnersCards>
        </div>
    </main>


</template>

<script setup>
import BeginnersCards from '@/components/Cursos/BeginnersCards.vue'
import CursosNavBar from '@/components/Cursos/CursosNavBar.vue'


</script>

<style scoped>


</style>