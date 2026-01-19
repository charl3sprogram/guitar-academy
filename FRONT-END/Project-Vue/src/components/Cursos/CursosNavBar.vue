<template>
    <ul class="header__nav-menu">
        <li class="header__nav-item"> 
            <router-link :to = "{name: 'Cursos'}">All Curses </router-link>  
        </li>       
        <li class="header__nav-item"> 
            <router-link :to = "{name: 'BeginnersCards'}">Beginners Curses</router-link>  
        </li>
        <li class="header__nav-item"> 
            <router-link :to = "{name: 'IntermediumCards'}">Intermedium Curses</router-link>
        </li>
        <li class="header__nav-item"> 
            <router-link :to = "{name: 'AdvancedCards'}">Advanced Curses</router-link>
        </li>
    </ul> 
</template>

<script setup>


</script>

<style scoped>
    .header__nav-menu{
        display: flex;
        flex-direction: column;
        height: 40vh;
        margin: auto;
        justify-content: space-evenly;
    }
    
    .header__nav-item{    
        list-style:none;
        padding: 8px; 
        border-radius: 12px;
    }
    
    .header__nav-item a{       
        text-decoration: none;
        color: rgb(127,255,212);
    }
    
    .header__nav-item :is(:hover,:active){
        text-decoration: underline;
    }   

</style>