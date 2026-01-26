<template>
    <div class="classes__category__box" v-for = "profesor in profesors" :key = "profesor.id">
        <div class="profesor_image">
            <img :src= "'http://localhost:3000/uploads/profesors/' + profesor.image" :alt="profesor.image">
        </div>
        <h2 class="classes__category-title">{{profesor.name}}</h2>  
        <p class="classes__category__content">{{profesor.email}}</p>
        <button class="classes__category-button" @click = "erase()" v-if = "isAdmin()"> ERASE </button>
    </div>   
</template>

<script setup>
import {ref, onMounted} from "vue";
import {isAdmin} from '@/assets/UTILS/auths';
    
    const profesors = ref([]);
    onMounted(async () =>{
        const res = await fetch ('http://localhost:3000/profesors');
        profesors.value = await res.json(); 
    });

</script>

<style scoped>
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

.classes__category__content{
    margin-bottom: 20px;
}
    
</style>