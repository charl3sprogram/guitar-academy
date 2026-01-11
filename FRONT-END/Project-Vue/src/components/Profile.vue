<template>
    <!-- MAIN PROFILE -->
    <main class="profile" id="profile">
        <div class="profile__wrapper">
            <div class="profile__img-container">
                <img src="../modules/Fenders.jpg" class="profile__img">
            </div>

            <!-- PROFILE SECTION -->
            <div class="profile__data-container">
                <div class="profile__data">
                    <div class="profile__description">
                        <h1> QUIEN SOY YO?</h1>
                        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores vel repudiandae adipisci dolorum eveniet. Hic voluptate nihil sunt cupiditate, adipisci quibusdam dolorem corporis iusto blanditiis quam deleniti quis itaque! Cupiditate!                           
                        </p>
                    </div>

                    <!-- SKILLS PART -->
                    <div class="profile__skills-container">
                        <h2>SKILLS</h2>
                        <ul>
                            <li class="profile__skill">
                                <div class="load-bar">
                                    <div class="load-bar__bar bar--60"> 60% </div>                                  
                                </div>
                                <span class="profile__skill-name">SQL</span>
                            </li>

                            <li class="profile__skill">
                                <div class="load-bar">
                                    <div class="load-bar__bar bar--90"> 90% </div>                                  
                                </div>
                                <span class="profile__skill-name">HTML</span>
                            </li>

                            <li class="profile__skill">
                                <div class="load-bar">
                                    <div class="load-bar__bar bar--90"> 90% </div>                                  
                                </div>
                                <span class="profile__skill-name">CSS</span>
                            </li>

                            <li class="profile__skill">
                                <div class="load-bar">
                                    <div class="load-bar__bar bar--80"> 80% </div>                                 
                                </div>
                                <span class="profile__skill-name">JAVASCRIPT</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> 
            <!--  PROFILE-SECTION ENDS -->      
        </div>
        <!--  PROFILE-WRAPPER ENDS -->
    </main>
</template>

<script setup>




</script>

<style scoped>

/* ----------- PROFILE SECTION ----------*/
.profile{
    container-name: profile;
    container-type: inline-size;

    /* ----- ANIMATION PART -----*/
    animation: aparecer 3s -.6s both;
}

.profile__wrapper{
    display:flex;
    flex-direction: column;
    justify-content: center;
    background-color: #fff;
    max-width: 1400px;
}

.profile__data-container{
    max-width: 600px;
    padding: 12px;
}

.profile__img-container{
    max-height: 500px;
    overflow: hidden;
}

.profile__img{
    max-width: 100%;
    width: 720px;
}

h1{
    color: #26e;
}

.profile__skills-container h2{
    color: #26e;
}

.profile__skill{
    list-style: none;
    display: flex;
    margin: 10px;
    max-width: 600px;
    margin-left: 0;
    align-items: center;
}

.load-bar{
    border: 2px solid #48e;
    border-radius: 8px;
    color: #fff;
    padding: 2px;
    font-size: 12px;
    width: 80%;
    margin:4px;

}

.profile__skill-name{
    color: #48e;
}

.load-bar__bar{
    background-color: #48e;
    border-radius:4px;
    padding: 4px 6px;
}

.bar--60{
    width: 60%;
}

.bar--80{
    width: 80%;
}

.bar--90{
    width: 90%;
}


/* --------PROFILE QUERIES -------*/

@container profile (min-width: 720px){
    .profile__wrapper{
        flex-direction: row;
        padding: 20px;
        background-color: transparent;
        height: 90vh;
        margin: auto;
    }
    
    h1{
        margin-top: 0;
        font-size: 3rem;
        text-wrap: balance;
    }
    

    .profile__data-container{
        background-color: #fff;
        display:flex;
        align-items: center;
        border-radius: 0px 25px 25px 0;
        box-shadow: 0px 0px 10px #0003;
    }

    .profile__data{
        max-width: 620px;
    }

    .profile__img-container{
         max-height: initial;
         border-radius: 25px 0 0 25px; 
    }

    .profile__img{
        height:100%;
        object-fit: cover;
        width: 620px;
        background-color: #fff;
    }
}

/* --------PROFILE ENDS -------*/

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