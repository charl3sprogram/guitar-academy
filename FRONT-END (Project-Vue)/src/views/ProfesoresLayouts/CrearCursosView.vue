<template>
    <div class= "CursosNavBar">
        <CursosNavBar></CursosNavBar>
    </div>
    <CreateCourses></CreateCourses>
</template>

<script setup>
    import CreateCourses from '@/components/ProfesControl/ProfesCourses/CreateCourses.vue'
    import CursosNavBar from '@/components/Cursos/CursosNavBar.vue'


</script>


<style scoped>
.CursosNavBar{
    position: absolute;
    margin-top: 6.67rem;
    margin-bottom: 0;

}



</style>