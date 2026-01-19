<template>
    <div class="container">
        <form class="register-form" @submit.prevent = "createCurse">
            <h1>Guitar Academy</h1>
            <p class="subtitle"> Create curse 🎸</p>

            <label for="name">title:</label>
            <input type="text" id="name" placeholder="Tu nombre" v-model = "title" required>

            <label for="description">description:</label>
            <input type="text" id="description" placeholder="Put Description" v-model = "description" required>

           <!--//////  POR COMPLETAR //////// -->
            <label for="difficulty">difficulty:</label>
            <input type="" id="difficulty" placeholder="Tu contraseña" v-model = "difficulty" required>

            <label for="modality">Modality:</label>
            <input type="password" id="modality" placeholder="Tu contraseña" v-model = "modality" required>

            <label for="price">Price:</label>
            <input type="password" id="price" placeholder="Tu contraseña" v-model = "price" required>

            <button type="submit" class="button">Create Curse</button>
            <!--//////  POR COMPLETAR //////// -->

            <p v-if= "errorMsg" class="error"> {{errorMsg }} </p>
            <p v-if= "successMsg" class="success"> {{successMsg }} </p>
        </form>
    </div>
    <div class="background-wrapper"></div>
</template>

<script setup>
    import {ref} from "vue";


    /* //////// POR COMPLETAR ////////*/
    const name = ref("");
    const email = ref("");
    const password = ref("");
    const errorMsg = ref("");
    const successMsg = ref("");

    const createCurse = async () =>{
      errorMsg.value = "";
      successMsg.value = "";

      try{
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
        if(!response.ok){
          errorMsg.value = data.message;
          return;
        }
        successMsg.value = "Register succesfully";
        window.location.href = "/";
      }catch(err){
        errorMsg.value = err;
        }   
    };
    /* //////// POR COMPLETAR ////////*/

</script>


<style scoped>
.background-wrapper{
  height:30vh;
}
.error{
  color: red;
}

.success{
  color: green;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 50px;
  width: 100%;
  max-width: 500px;
  padding: 30px 20px;
  background-color: rgba(15, 25, 45);
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
  color: #d14050;
  margin-bottom: 10px;
}

.register-form .subtitle {
  text-align: center;
  color: #d14050; 
  margin-bottom: 20px;
  font-size: 0.9rem;
}

/* Labels */
.register-form label {
  color: #d14050;
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
  background-color: #d15959cc;
}

input::placeholder{
    color: #aaad;
}

.button{
    position:relative;

    top:20px;
    width: 100%;
    padding: 10px 40px;
    color: #fff;
    background-color: #112240;   
    letter-spacing: 1px; 
    margin :auto;
    margin-bottom: 20px;
    z-index: 10;
    font-weight: bold;
    

    border: 1px solid #44e; 
    border-radius: 6px;  
    overflow: hidden;
}

.button::before{
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
.button:hover::before{
    top:-35%;
    left: -20%;
    margin-top: -10%;
}



</style>