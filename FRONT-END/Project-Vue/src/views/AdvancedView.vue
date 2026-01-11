<template>
    <main class="classes" id="main__classes">
        <h1 class="classes__title">Advanced</h1>
        <div class="classes__category-container">       
            <AdvancedCards card__title= "Steve Vai" card__content="Master efggerof whammy bar, god of speed and feeling, super shreding guitarist"></AdvancedCards>
            <AdvancedCards card__title= "Steve Vai" card__content="Master of wtreterhammy bar, god of speed and feeling, super shreding guitarist"></AdvancedCards>
            <AdvancedCards card__title= "Steve Vai" card__content="Master of treterwhammy bar, god of speed and feeling, super shreding guitarist"></AdvancedCards>
            <AdvancedCards card__title= "Steve Vai" card__content="Master of treter bar, god of speed and feeling, super shreding guitarist"></AdvancedCards>
            <AdvancedCards card__title= "Steve Vai" card__content="Master of terter bar, god of speed and feeling, super shreding guitarist"></AdvancedCards>
            <AdvancedCards card__title= "Steve Vai" card__content="Master of ter bar, goed of speed and feeling, super shreding guitarist"></AdvancedCards>
        </div>
    </main>

</template>

<script setup>
    import AdvancedCards from '@/components/AdvancedCards.vue'
  
</script>

<style scoped>

.classes{
    margin-top: 50px;
    container-name: classes;
    container-type: inline-size;
}

.classes__title{
    text-align: center;
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