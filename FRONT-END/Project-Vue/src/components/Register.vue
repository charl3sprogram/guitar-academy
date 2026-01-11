<template>
    <div class="container">
        <form class="register-form" @submit.prevent = "register">
            <h1>Guitar Academy</h1>
            <p class="subtitle">Create your account to start jamming 🎸</p>

            <label for="name">Name</label>
            <input type="text" id="name" placeholder="Tu nombre" v-model = "name" required>

            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Tu email" v-model = "email" required>

            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Tu contraseña" v-model = "password" required>

            <button type="submit">Register</button>
        </form>
    </div>
</template>

<script setup>
    import {ref} from "vue";

    const name = ref("");
    const email = ref("");
    const password = ref("");

    const register = async () =>{
        const response = await
        fetch("http://localhost:3000/register", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: name.value,
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
/* Contenedor */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 50px;
  width: 100%;
  max-width: 500px;
  padding: 30px 20px;
  background-color: rgba(15, 25, 45, 0.9);
  border-radius: 20px;
  border: 2px solid #4ea0e8; /* vino */
  box-shadow: 0 0 20px rgba(0,0,0,0.6);
}

/* Formulario */
.register-form{
    max-width: 80%;
    min-width: 60%;
}
.register-form h1 {
  text-align: center;
  color: #7e6a98;
  margin-bottom: 10px;
}

.register-form .subtitle {
  text-align: center;
  color: #7e6a98; 
  margin-bottom: 20px;
  font-size: 0.9rem;
}

/* Labels */
.register-form label {
  color: #7e6a98;
  display: block;
  margin: 10px 0 5px;
  font-weight: bold;
}

/* Inputs */
.register-form input {
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 1px solid #4e6a91;
  background-color: #112240;
  color: #eee;
  outline: none;
  transition: all 0.3s ease;
}

.register-form input:focus {
  border-color: #d15959; /* vino */
  box-shadow: 0 0 5px #d15959;
}

.register-form input:hover { /* vino */
  box-shadow: 0 0 5px #d15959;
  background-color: #d1595933;
}

/* Botón */
.register-form button {
  display:flex;
  margin:auto;
  margin-top: 20px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 12px;
  border-radius: 12px;
  border: none;
  background-color: #4ea0e2; /* azul semi oscuro */
  color: #eee;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.register-form button:hover {
  background-color: #d15959dd; /* vino al hover */
  color: #fff;
}

input::placeholder{
    color: #aaad;
}

    


</style>
