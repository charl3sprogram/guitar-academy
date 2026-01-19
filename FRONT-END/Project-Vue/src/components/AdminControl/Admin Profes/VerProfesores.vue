<template>
    <div class="classes__category__box" v-for = "profesor in profesors" :key = "profesor.id">
        <img src="" alt="">
        <h2 class="classes__category-title">{{profesor.name}}</h2>  
        <p class="classes__category__content">{{profesor.email}}</p>
        <button class="classes__category-button" @click = "erase()"> ERASE </button>
    </div>   
</template>

<script setup>
import {ref, onMounted} from "vue";
    
    const profesors = ref([]);
    onMounted(async () =>{
        const res = await fetch ('http://localhost:3000/profesors');
        profesors.value = await res.json(); 
    });
    


</script>

<style scoped>
.classes__category__box{
    border-radius: 8px;
    background-color: #10233f; 
    color: #fff;
    text-align: center;
    display: grid;
    min-height: 300px;
}


.classes__category__content{
    text-wrap: balance;
}

.classes__category-button{
    position:relative;


    width: 40%;
    padding: 10px 40px;
    color: #fff;
    background-color:transparent;   
    letter-spacing: 3px; 
    margin :auto;
    margin-bottom: 20px;
    z-index: 0;
    

    border: 1px solid #44e; 
    border-radius: 6px;  
    overflow: hidden;
}

.classes__category-button::before{
    content: '';
    background-color:  #d15959;
    display: block;
    height: 300%;
    width: 140%;
    position:absolute;
    z-index: -1;
    margin-top: 30%;
    transition: top .6s, left .6s;
    border-radius: 50%;
    top: 100%;
    left: 30%;
}

.classes__category-button:hover::before{
    top:-35%;
    left: -20%;
    margin-top: -10%;
}
    
</style>