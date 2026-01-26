<template>
    <ul class="header__nav-menu">
        <li class="header__nav-item" v-if = "isProfesor() || isAdmin()" >
            <router-link :to = "{name: 'CreateCourse'}"> Create Course </router-link>
        </li>
        <li class="header__nav-item" v-if = "isProfesor()" >
            <router-link :to = "{name: 'MyCourses'}"> My Courses </router-link>
        </li>
        <li class="header__nav-item"> 
            <router-link :to = "{name: 'Courses'}">All Courses </router-link>  
        </li>       
        <li class="header__nav-item"> 
            <router-link :to = "{name: 'BeginnersCards'}" v-if = "!isProfesor() || isAdmin()">Beginners Courses</router-link>    
        </li>
        <li class="header__nav-item"> 
            <router-link :to = "{name: 'IntermediumCards'}" v-if = "!isProfesor() || isAdmin()">Intermedium Courses</router-link>
        </li>
        <li class="header__nav-item"> 
            <router-link :to = "{name: 'AdvancedCards'}" v-if = "!isProfesor() || isAdmin()">Advanced Courses</router-link> 
        </li>
    </ul> 
</template>

<script setup>
    import {isProfesor, isAdmin} from '@/assets/UTILS/auths'


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
        font-size: 1.5rem;
        font-weight: 700;
    }
    
    .header__nav-item a{       
        text-decoration: none;
        color: rgb(123,255,212);
    }
    
    .header__nav-item :is(:hover,:active){
        text-decoration: underline;
    }   
</style>