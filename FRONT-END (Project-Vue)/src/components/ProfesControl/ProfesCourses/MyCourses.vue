<template>   
    <div class="classes__category__box" v-for = "curso in cursos" :key = "curso.id">
        <h2 class="classes__category-title"><strong>Course Title:</strong> {{curso.title}}</h2>  
        <p class="classes__category__content"><strong>Description:</strong> {{curso.description}}</p>
        <p class="classes__category__content"><strong>Modality:</strong> {{curso.modality}}</p>
        <button class="classes__category-button">
            ERASE COURSE
        </button>
        <button class="classes__category-button">BUY {{curso.price}}</button>       
    </div>    
</template>

<script setup>
    import {ref, onMounted} from "vue";
    import {getUser} from '@/assets/UTILS/auths'

    const cursos = ref([]);
    onMounted(async () =>{
        const user = getUser();
        const profesorID = Number(user.id); 
        const res = await fetch (`http://localhost:3000/myCourses?profesorID=${profesorID}`)
        cursos.value = await res.json();
    });

    async function deleteCourse(courseID){
        const token = localStorage.getItem ('token')     
        await fetch(`http://localhost:3000/courses/${courseID}`,
            {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
        })          
        cursos.value = curses.value.filter(c => c.id !== courseID)
    }
    
</script>

<style scoped>
.classes__category-title{
    margin: 30px 0 0 0;
}
strong{
    color:#2a4cff;
    font-weight: 600;
}

</style>
