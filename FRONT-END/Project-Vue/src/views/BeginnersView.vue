<template>
    <main class="classes" id="main__classes">
        <h1 class="classes__title">Beginners</h1>
        <div class="classes__category-container">       
            <BeginnersCards></BeginnersCards>
            <BeginnersCards></BeginnersCards>
        </div>
    </main>


</template>

<script setup>
import BeginnersCards from '@/components/BeginnersCards.vue'



</script>

<style scoped>

.classes{
    margin-top: 50px;
    container-name: classes;
    container-type: inline-size;
}

.classes__title{
    text-align: center;
    color: #fff;
}

.classes__category-container{
    display: grid;
    grid-template-columns: 1fr; 
    max-width: 1300px;
    margin:auto;    
    width: 100%;
    gap: 20px;
    padding: 20px;   
    min-height: 80vh;
}



@container classes (min-width: 50.25rem){
    .classes__category-container{
        grid-template-columns: repeat(auto-fill,minmax(420px,1fr));
    }

    .portfolio__project:first-child{
        grid-column: span 2;
    }

    .portfolio__project:nth-child(6){
        grid-column: span 2;
    }

    
}

@container classes (min-width: 80.25rem){
    .classes__category-container{
        grid-template-columns: repeat(auto-fill,minmax(350px,1fr));
    }

    .portfolio__project:first-child{
        grid-column: span 2;
        grid-row: span 2;
    }

    .portfolio__project:nth-child(6){
        grid-column: span 4;
    }
}


</style>