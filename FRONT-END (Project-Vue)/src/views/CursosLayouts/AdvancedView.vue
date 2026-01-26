<template>
    <main class="classes" id="main__classes">
        <h1 class="classes__title">Advanced</h1>
        <CursosNavBar></CursosNavBar>  
        <div class="classes__category-container">       
            <AdvancedCards></AdvancedCards>
        </div>
    </main>

</template>

<script setup>
    import AdvancedCards from '@/components/Cursos/AdvancedCards.vue'
    import CursosNavBar from '@/components/Cursos/CursosNavBar.vue'
  
</script>

<style scoped>

</style>