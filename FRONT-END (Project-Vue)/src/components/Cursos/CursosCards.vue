<template>   
    <div class="classes__category__box" v-for = "curso in cursos" :key = "curso.id">
        <div class="profesor_image">
            <img :src="'http://localhost:3000/uploads/profesors/' + curso.profesor_image" :alt="curso.profesor_name">
        </div>
        <button class="classes__category-button" v-if = "canDeleteCourse(curso)" @click ="deleteCourse(curso.id)">
            ERASE COURSE
        </button>
        <h2><strong>Profesor:</strong> {{curso.profesor_name}}</h2>
        <h2 class="classes__category-title"><strong>Course Title:</strong> {{curso.title}}</h2>  
        <p class="classes__category__content"><strong>Description:</strong> {{curso.description}}</p>
        <p class="classes__category__content"><strong>Modality:</strong> {{curso.modality}}</p>
        <button class="classes__category-button">BUY {{curso.price}}</button>       
    </div>    
</template>

<script setup>
    import {ref, onMounted} from "vue";
    import {canDeleteCourse, getUser} from '@/assets/UTILS/auths'


    const cursos = ref([]);
    onMounted(async () =>{
        const res = await fetch ('http://localhost:3000/courses');
        cursos.value = await res.json(); 

    });
    

</script>

<style scoped>
strong{
    color:#2a4cff;
    font-weight: 600;
}

.profesor_image{
    width: 120px;
    height: 120px;
    margin: 15px auto;

    border-radius: 50%;
    overflow: hidden;
    border: 3px solid #2a4cff
}

.profesor_image img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}


</style>
