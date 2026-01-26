<template>
    <div class="container">
        <form class="register-form" @submit.prevent = "createCurse">
            <h1>Guitar Academy</h1>
            <p class="subtitle"> Create curse 🎸</p>

            <label for="title">Title:</label>
            <input type="text" id="title" placeholder="Your Name" v-model = "title" required>

            <label for="description">Description:</label>
            <textarea id="description" placeholder="Put Description" v-model = "description" required></textarea>

            <label for="difficulty">Difficulty:</label>
            <select id="difficulty" v-model='difficulty' required>
              <option disabled value ="">Select difficulty</option>
              <option value="beginner">beginner</option>
              <option value="intermedium">intermedium</option>
              <option value="advanced">advanced</option>
            </select>

            <label for="modality">Modality:</label>
            <select id="modality" v-model='modality' required>
              <option disabled value = "">Select modality</option>
              <option value="online">online</option>
              <option value="presencial">presencial</option>
            </select>

            <label for="price">Set Price:</label>
            <input id="price" type="number" v-model.number = "price" min="0" step = "0.01" required>

            <label for="create_profesor" v-if="isAdmin()">Profesor:</label>
            <select id="create_profesor" v-model='selectProfesorEmail' required v-if="isAdmin()">
              <option disabled value = "">Select profesor</option>
              <option v-for="prof in profesors" :key="prof.user_id" :value="prof.email">{{ prof.name}} ({{prof.email}})</option>
            </select>

            <button type="submit" class="classes__category-button" @click = "createCourse">Create Curse</button>

            <p v-if= "errorMsg" class="error"> {{errorMsg }} </p>
            <p v-if= "successMsg" class="success"> {{successMsg }} </p>
        </form>
    </div>
    <div class="background-wrapper"></div>
</template>

<script setup>
    import {ref, onMounted} from "vue";
    import {isAdmin, isProfesor} from '@/assets/UTILS/auths'

    const errorMsg = ref("");
    const successMsg = ref("");

    const title = ref("");
    const description = ref("");
    const difficulty = ref('');
    const modality = ref('');
    const price = ref("3.50");
    const selectProfesorEmail = ref("");
    
    const profesors = ref([]);
    onMounted(async () =>{
        const res = await fetch ('http://localhost:3000/profesors');
        profesors.value = await res.json(); 
    });
    
    const createCourse = async () =>{
      errorMsg.value = "";
      successMsg.value = "";

      try{
        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user'));

        const body = {
          title: title.value, 
          description: description.value,
          difficulty: difficulty.value,
          modality: modality.value,
          price: price.value,
          profesorEmail: selectProfesorEmail.value
        }

        if(isProfesor()){
          body.profesorEmail = user.email;
        }

        const response = await
        fetch("http://localhost:3000/createCourse", {
            method: "POST",
            headers: {'Content-Type': 'application/json', Authorization: `Bearer ${token}`},
            body: JSON.stringify(body)
        }); 

        /* CONFIRMAR RESPUESTA DEL BACKEND  */          
        const data = await response.json();
        if(!response.ok){
          errorMsg.value = data.message;
          return;
        }
        successMsg.value = "Course created successfully";
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

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 40px;
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
    width: 80%;
}
h1 {
  text-align: center;
  color: rgb(127,255,212);
  margin-bottom: 10px;
}

.subtitle {
  text-align: center;
  color: rgb(127,255,212); 
  margin-bottom: 20px;
  font-size: 0.9rem;
}

/* Labels */
label{
  color: rgb(127,255,212);
  display: block;
  margin: 10px 0 5px;
  font-weight: bold;
}

/* Inputs */
input, select, textarea{
  font-family: sans-serif;
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 10px;
  margin-top: 3px;
  border-radius: 10px;
  border: 1px solid #4e6a91;
  background-color: #112240;
  color: #fff;
  outline: none;
  transition: all 0.3s ease;
}

input:focus, select:focus, textarea:focus {
  border-color: #d15959; 
  box-shadow: 0 0 5px #d15959;
}

input:hover, textarea:hover{ 
  box-shadow: 0 0 5px #d1595999;
  background-color: #d1595999;
}

select:hover{
  box-shadow: 0 0 5px #d15959cc;
}

input::placeholder{
    color: #aaad;
}


.classes__category-button{
    top:20px;
    width: 100%;
    background-color: #112240;   
    letter-spacing: 1px; 
    z-index: 10;
    font-weight: bold;
}

</style>