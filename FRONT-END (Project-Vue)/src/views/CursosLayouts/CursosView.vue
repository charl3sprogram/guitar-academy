<template>
    <main class="classes" id="main__classes">
        <h1 class="classes__title">Courses</h1>
        <CursosNavBar></CursosNavBar>       
        <div class="classes__category-container">       
            <CursosCards></CursosCards>
        </div>
    </main>


</template>

<script setup>
import CursosCards from '@/components/Cursos/CursosCards.vue'
import CursosNavBar from '@/components/Cursos/CursosNavBar.vue'

</script>

<style scoped>


</style>