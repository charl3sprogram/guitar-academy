<template>   
    <div class="classes__category__box">
        <img src="" alt="">
        <h2 class="classes__category-title">{{card__title}}</h2>
        <p class="classes__category__content">{{card__content}}</p>
        <button class="classes__category-button">BUY</button>
    </div>    
</template>

<script>
    export default{
        props: ['card__title','card__content']    
    } 

    /* export default{
        
        data(){
            return{
                AdvancedCards: [
                    {
                        card__title: "Steve Vai",
                        card__content: "Owesome tremolo bar lover, with techniques like sweep picking and tremolo bar effects"
                    },
                    {
                        card__title: "Joe Satriani",
                        card__content: "Inbelievable techniques and slides out of this world, master of spead"
                    },
                    {
                        card__title: "Joe Bonamassa",
                        card__content: "Master of blues, super fast pentatonic scales"
                    },
                    {
                        card__title: "Joe Perry",
                        card__content: "Guitarist of Aerosmith, a crazy guy with slide techniques, and a master of blues riffs and catchy rhythim parts"
                    }                     
                ]
            } 
        }
    } */

</script>

<style scoped>

.classes__category__box{
    border-radius: 8px;
    background-color: #10233f; 
    color: #fff;
    text-align: center;
    display: grid;
    min-height: 300px;
    box-sizing: border-box;
}


.classes__category__content{
    text-wrap: balance;
    
}

.classes__category-button{
    position:relative;


    width: 30%;
    padding: 10px 40px;
    color: #fff;
    background-color:transparent;   
    letter-spacing: 3px; 
    margin :auto;
    margin-bottom: 20px;
    z-index: 10;
    

    border: 1px solid #44e; 
    border-radius: 6px;  
    overflow: hidden;
}

.classes__category-button::before{
    content: '';
    background-color: #44e;
    display: block;
    height: 200%;
    width: 140%;
    position:absolute;
    z-index: -1;
    margin-top: 30%;
    transition: top .6s, left .6s;
    border-radius: 50%;
    top: 100%;
    left: 30%;
}

.classes__category-button:hover::before{
    top:-35%;
    left: -20%;
    margin-top: -10%;
}


</style>
