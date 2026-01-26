<template>
     <!-- CONTACT SECTION -->
    <section class="form" id="contact">
        <h2 class="form__title">CONTACT</h2>
        <form class="form__form">
            <div class="form__input-container">
                <label>Name
                    <input type="text" placeholder="Michael">
                </label>
            </div>
            <div class="form__input-container">
                <label>Last Name
                    <input type="text" placeholder="Jackson">
                </label>
            </div>
            <div class="form__input-container">
                <label>Email
                    <input type="text" placeholder="yourmail@example.com">
                </label>
            </div>
            <div class="form__input-container">
                <label>Message
                    <textarea placeholder="Your message"></textarea>
                </label>
            </div>
            <div class="form__input-container">
                <input type="submit">
            </div>
        </form>
    </section>

</template>

<script setup>

</script>

<style scoped>

/* --------CONTACT SECTION -------*/
.form{
    box-sizing: border-box;
    min-height: 60vh;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;  
    padding: 30px 0;  
    container-name: form;
    container-type: inline-size;

    /* ----- ANIMATION PART -----*/
    animation: aparecer both;
    animation-timeline: view();
    animation-range: cover 20% contain 40%;
}

.form__form{ 
    box-sizing: border-box;
    padding: 12px; 
    max-width: 600px;
    width: 100%; 
    display: grid;
    margin-bottom: 30px;
    background-image: radial-gradient(#44a,#47a);
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0px 0px 50px #000e;
}

.form__input-container label{
    color: #000;
}

.form__input-container :is(input,textarea){
    box-sizing: border-box;
    width: 100%;
    padding: 9px;
    font-size: 16px;
    margin: 4px;
    border: none;
    box-shadow: 2px 2px 4px #0003;

}

.form__input-container textarea{
    box-sizing: border-box;
    resize: none; 
    min-height: 120px;
    font-family: inherit;
}

.form__input-container input[type="submit"]{
    padding: 12px;
    background-color: #18233f;
    color: #fff;
    transition: all 0.3s ease;
}

.form__input-container input[type="submit"]:hover{
    box-shadow: 0 0 15px #26a; 
    background-color: #d15959cc;
    color: #000;
}

.form__title{
    font-size: 2.4rem;
    color: #fff;
}



/* --------CONTACT QUERIES -------*/

@container form (min-width: 45.25rem){
    .form__form{
        grid-template-columns: 1fr 1fr;
        grid-template-areas: 
        "name lastname"
        "email email"
        "message message"
        "button button";
        gap: 12px;
        background-image: radial-gradient(#44a,#47a);
        padding: 30px;
        border-radius: 12px;
        box-shadow: 0px 0px 50px #000e;
    }

    .form__input-container:first-child{
        grid-area: name;
    }

    .form__input-container:nth-child(2){
        grid-area: lastname;       
    }

    .form__input-container:nth-child(3){
        grid-area: email;        
    }

    .form__input-container:nth-child(4){
        grid-area: message;           
    }

    .form__input-container:nth-child(5){
        grid-area: button;           
    }

    .form__input-container :is(input,textarea){
        box-shadow: none;
        border-radius: 4px;
    }
}

/* --------CONTACT ENDS -------*/

/* --------ANIMATION -------*/

@keyframes aparecer {
    from{
        opacity: 0;    
    }
    to{
        opacity: 1;
    }
}


</style>