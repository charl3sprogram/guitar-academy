<template>
    <!------ PORTFOLIO SECTION ------>
    <section class="portfolio" id="portfolio">
        <h2 class="portfolio__title">Inspiration</h2>
        <div class="portfolio__project-container">
            <div class="portfolio__project">
                <h2 class="portfolio__project-name">PROJECT</h2>
            </div>
            <div class="portfolio__project">
                <h2 class="portfolio__project-name">PROJECT</h2>
            </div>
            <div class="portfolio__project">
                <h2 class="portfolio__project-name">PROJECT</h2>
            </div>
            <div class="portfolio__project">
                <h2 class="portfolio__project-name">PROJECT</h2>
            </div>
            <div class="portfolio__project">
                <h2 class="portfolio__project-name">PROJECT</h2>
            </div>
            <div class="portfolio__project">
                <h2 class="portfolio__project-name">PROJECT</h2>
            </div>           
        </div>
    </section>

</template>

<script setup>


</script>

<style scoped>

/* --------PORTFOLIO SECTION -------*/

.portfolio{
    background-color: #18233f;
    color: #fff;
    min-height: 100vh;
    display:flex;
    flex-direction: column;
    text-align: center;
    container-name: portfolio;
    container-type: inline-size;
    justify-content: space-evenly;
    padding: 30px;
}

.portfolio__title{
    font-size: 3rem;
    margin-bottom: 0;
}

.portfolio__project-container{
    display: grid;
    grid-template-columns: 1fr;
    max-width: 1300px;
    margin:auto;    
    width: 100%;
    gap: 12px;
    padding: 12px; 
    min-height: 80vh;
}

.portfolio__project{
    background-image: linear-gradient(#0009,#0009), url("./IMAGES/Transgression.png");
    background-position: center;
    background-size: cover;
    display: grid;
    place-content: center;
    border-radius: 8px;

    /* ----- ANIMATION PART -----*/
    animation: aparecer both;
    animation-timeline: view();
    animation-range: cover 5% cover 40%;
}

.portfolio__project:hover{
    opacity: 0.74;
    outline: 2px solid #fff6;
}


/* --------PORTFOLIO QUERIES -------*/
/* 900 % 16 = 56.25 ----- 900px = 56.25 rem (MEDIDA COMÚN)----*/
@container portfolio (min-width: 56.25rem){
    .portfolio__project-container{
        grid-template-columns: repeat(auto-fill,minmax(420px,1fr));
    }

    .portfolio__project:first-child{
        grid-column: span 2;
    }

    .portfolio__project:nth-child(6){
        grid-column: span 2;
    }
}

/* 1300px = 82rem */
@container portfolio (min-width: 80.25rem){
    .portfolio__project-container{
       /*  EN EL MINMAX LO QUE CAMBIO ES EL PRIMERO */
        grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
    }

    .portfolio__project:first-child{
        grid-column: span 2;
        grid-row: span 2;
    }

    .portfolio__project:nth-child(6){
        grid-column: span 4;
    }
}

/* --------PORTFOLIO ENDS -------*/

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