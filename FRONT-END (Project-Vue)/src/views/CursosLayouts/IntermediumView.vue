<template>
    <main class="classes" id="main__classes">
        <h1 class="classes__title">Intermedium</h1>
        <CursosNavBar></CursosNavBar>  
        <div class="classes__category-container">       
            <IntermediumCards></IntermediumCards>           
        </div>
    </main>


</template>

<script setup>
import IntermediumCards from '@/components/Cursos/IntermediumCards.vue'
import CursosNavBar from '@/components/Cursos/CursosNavBar.vue'


</script>

<style scoped>

</style>