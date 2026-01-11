<template>
    <!-- COMPONENTE HEADER -->
    <header class="header">
        <nav class="main-navbar">
            <ul>
                <li><a href="#"> Home </a></li>
                <li><a href="#"> About us </a></li>
                <li><a href="#"> Login </a></li>
                <li><a href="#"> Register </a></li>
            </ul>
        </nav>
    </header>
    
    <div class="main-wrapper">
        <!-- COMPONENTE ASIDE1 (COLUMNA 1) -->
        <aside class="secondary-navbar-background">
            <nav class="secondary-navbar">
                <ul>
                    <li><a href="#"> ITEM1 </a></li>
                    <li><a href="#"> ITEM2 </a></li>
                    <li><a href="#"> ITEM3 </a></li>
                    <li><a href="#"> ITEM4 </a></li>
                </ul>
            </nav>   

        </aside>

        <!-- COMPONENTE MAIN (COLUMNA 2) -->
         <main>
            <h1>TITULO PRINCIPAL</h1>
            <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, exercitationem. Laboriosam placeat error qui similique ea dolorum optio, quibusdam veritatis nam voluptatum omnis deserunt ab quod, porro voluptatem deleniti earum.orem  omnis deserunt ab quod, porro voluptatem deleniti earum.onsectetur adipisicing elit. ro voluptatem deleniti earum.orem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, exercitationem. Laboriosam placeat error qui similique ea dolorum optio, quibusdam veritatis nam voluptatum omnis deserunt ab quod, porro </p>

         </main>

         <!-- COMPONENTE ASIDE2 (COLUMNA 3)-->
         <aside>
            <h2>TITULO RANDOM</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, exercitationem. Laboriosam placeat error qui similique ea dolorum optio, quibusdam veritatis nam voluptatum omnis deserunt ab quod, porro voluptatem deleniti earum.orem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, exercitationem. Laboriosam placeat error qui similique ea dolorum optio, quibusdam veritatis nam voluptatum omnis deserunt ab quod, porro voluptatem deleniti earum.orem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, exercitationem. Laboriosam placeat error qui similique ea dolorum optio, quibusdam veritatis nam voluptatum omnis deserunt ab quod, porro voluptatem deleniti earum.</p>
         </aside>

    </div>
    
    <footer> Charles Carmichael instagram: @carwinchester</footer>
 
    
</template>



<script setup>


</script>

<style scoped>   

 div, footer, header,nav,ul{
     box-sizing: border-box; 
} 

.main-wrapper, header, footer{
    width:100%;
}

/* LOGICA DE HEADER (MAIN-NAVBAR) */
.header{
    background-color: #44e;
}

.main-navbar ul{
    display: flex;
    padding: 0;
    margin: 0;
    justify-content: center;
}

.main-navbar li{
    list-style:none;
    margin: 6px;
}

.main-navbar a{
    color: #fff;
    display: inline-block;
    padding: 10px 14px;
}

nav a {
    text-decoration: none;
}

/* MAIN SECTION */
.main-wrapper{
    display:flex;
    flex-grow: 1;
    max-width: 1024px;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
}

.main-wrapper aside{
    flex-grow:1;
}
aside, main{
    flex-basis: 0;
    padding: 10px 20px;
    background-color: #fff;
}
main{
    min-width: 300px;
    flex-grow: 2;
}
.secondary-navbar-background{
    min-width: 10rem;
    text-align: center;
}

.secondary-navbar-background ul{
    padding: 0;
}

.secondary-navbar-background li{
    list-style:none;
}

.secondary-navbar-background a{
    color: #48e;
    display:inline-block;
    padding: 6px 10px;
}

a:hover{
    opacity: 0.5;

}

h1,h2,h3,h4{
    text-wrap: balance;
}

p{
    text-wrap: pretty;
}
/* FOOTER */
footer{
    margin-top:auto;
    border: 1px solid #e00;
    background-color: #333;
    color: #fff;
    padding: 40px;
    font-weight: bold;
    text-align: center;
}

@media screen and (max-width: 800px){
    aside:last-child{
        display:none;
    }
}

@media screen and (max-width: 520px){
    .main-wrapper{
        flex-direction: column;
    }
}


</style>
