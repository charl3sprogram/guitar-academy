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
/* ----- PARTE DE INSERT ------- */
.insert_container{
    background-color: rgba(15, 25, 50, 0.9);
    display: flex;
    padding-top: 20px;
}

.classes__category-button{
    width: 20%; 
}

</style>