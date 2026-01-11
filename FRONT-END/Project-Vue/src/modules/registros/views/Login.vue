<template>
    <!-- SECTION DE LOGIN -->
    
        <div class="modal-background">    
            <form class= "form_login">
                <h2 class = "form_login_h2"> 
                    Contact Formulary
                </h2>

                <div class="form_input">
                    <input type="submit" value="Log In" id="submit">
                </div>

            </form>   
        </div>

</template>

<script setup>




</script>

<style>
    /* PARA EL LOGIN */
     .modal-background{
        box-sizing: border-box;
        width: 100%;
        height: 100%; 
        background-color: #111;
    } 

    .form_login{
        color: #fff;
        background-color: #222;
        padding: 25px 30px;
        max-width: 500px;  
        margin: auto;
        box-shadow: 0px 0px 55px #fff2 ;
        border-radius: 8px;
        font-size: 16px;
    }

    .form_login_h2{
        text-align: center;
        margin: 0;
        margin-bottom: 10px;
        text-transform: uppercase;
        font-weight: 100;
        font-size: 1.4em;
        padding: 10px;
    }

    .form_input {
        padding: 6px 15px; 
    }

    input{
        width: 100%;
        box-sizing: border-box;
        padding: 6px 8px;
        border: none;
        border: 1px solid #666;
        box-shadow: 0px 0px 15px #0003;
        background-color: transparent;
        border-radius: 4px;
        color: #eee;
    }

    #submit{
        font-family: sans-serif;
        font-size: 14px;
        text-align: center;
    }

    #submit:hover{
        background-color: #ddd;  
        color: #000;
        box-shadow: 0 0 10px #444;
        transition-property: background-color, color, box-shadow;
        transition-duration: 0.3s;
    } 

</style>