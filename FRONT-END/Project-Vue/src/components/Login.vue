<template>
    <h1> GET AND POST REQUEST </h1>

    <!-- <h2> GET </h2> -->

    <h2> POST (LOGIN) </h2>
    <form @submit.prevent = "login">
        <input v-model = "email" type="email"/>
        <input v-model = "password" type="password"/>
        <button type="submit"> Login </button>
    </form>
</template>

<script setup>
    import {ref} from "vue";

    const email = ref("");
    const password = ref("");

    const login = async () =>{
        const response = await
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                email: email.value,
                password: password.value
            })
        }); 

        /* CONFIRMAR RESPUESTA DEL BACKEND  */          
        const data = await response.json();
        console.log ("Respuesta del backend:", data);
    };

</script>


<style scoped>


</style>

