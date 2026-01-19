<template>

  <div class="user_container">
    <h1 v-if= "isLogged()" class="user_title"> Welcome: <span class= "user-name">{{getUser().name}}</span> 
    </h1>
  </div>
  <Profile></Profile>
  <Portafolio></Portafolio>
  <Contact></Contact> 
  <Footer></Footer>

</template>

<script setup>

import Profile from '@/components/Home/Profile.vue'
import Portafolio from '@/components/Home/Portafolio.vue'
import Contact from '@/components/Home/Contact.vue'
import Footer from '@/components/Home/Footer.vue'
import {isLogged, getUser} from '@/assets/UTILS/auths'
   

</script>

<style scoped>

  .user_title{
    font-size: 3rem;
    margin-bottom: 20px ;
    border-top: 12px solid #26a;
    text-align: center;
    color: rgb(127,255,212);
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .user-name{
    color: #fff;
  }

  .user_container{
    background-color: rgba(15, 25, 50, 1);
  }


</style>