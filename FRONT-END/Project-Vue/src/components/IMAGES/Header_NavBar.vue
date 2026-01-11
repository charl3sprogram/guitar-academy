<template>
  <!-- BARA DE NAVEGACION (MENU) -->
    
    <header class="header">
        <div class="header_overlay"> 



        </div>

        <div class="header_item-container">
            
            <div class="introduction_page">
                <h1 class="introduction"> The best page dedicated to rock and guitar you have ever seen </h1>
                <p class="text_introduction"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fuga deleniti corporis, aliquid iure laudantium quaerat odio tempore quo doloribus sapiente voluptatum eius explicabo tenetur magni expedita dicta hic similique? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fuga deleniti corporis, aliquid iure laudantium quaerat odio tempore quo doloribus sapiente voluptatum eius explicabo tenetur magni expedita dicta hic similique?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fuga deleniti corporis, aliquid iure laudantium quaerat odio tempore quo doloribus sapiente voluptatum eius explicabo tenetur magni expedita dicta hic similique?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fuga deleniti corporis, aliquid iure laudantium quaerat odio tempore quo doloribus sapiente voluptatum eius explicabo tenetur magni expedita dicta hic similique?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fuga deleniti corporis, aliquid iure laudantium quaerat odio tempore quo doloribus sapiente voluptatum eius explicabo tenetur magni expedita dicta hic similique?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fuga deleniti corporis, aliquid iure laudantium quaerat odio tempore quo doloribus sapiente voluptatum eius explicabo tenetur magni expedita dicta hic similique?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fuga deleniti corporis, aliquid iure laudantium quaerat odio tempore quo doloribus sapiente voluptatum eius explicabo tenetur magni expedita dicta hic similique?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fuga deleniti corporis, aliquid iure laudantium quaerat odio tempore quo doloribus sapiente voluptatum eius explicabo tenetur magni expedita dicta hic similique?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fuga deleniti corporis, aliquid iure laudantium quaerat odio tempore quo doloribus sapiente voluptatum eius explicabo tenetur magni expedita dicta hic similique?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fuga deleniti corporis, aliquid iure laudantium quaerat odio tempore quo doloribus sapiente voluptatum eius explicabo tenetur magni expedita dicta hic similique?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fuga deleniti corporis, aliquid iure laudantium quaerat odio tempore quo doloribus sapiente voluptatum eius explicabo tenetur magni expedita dicta hic similique?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fuga deleniti corporis, aliquid iure laudantium quaerat odio tempore quo doloribus sapiente voluptatum eius explicabo tenetur magni expedita dicta hic similique?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fuga deleniti corporis, aliquid iure laudantium quaerat odio tempore quo doloribus sapiente voluptatum eius explicabo tenetur magni expedita dicta hic similique?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fuga deleniti corporis, </p>
            </div>
            <div class="download_btn_container">
                <div class="download_btn_background">
                    <a class="download_btn" href="#">Download classes pdf here</a>
                </div>
            </div>
        </div> 
        

        <div class="img-background"></div> 

        <nav class="nav">
            <ul class="nav__list">          
                <li class="nav__item">                 
                    <a href="" class="nav__link "> About us  </a>  
                </li>
                <li class="nav__item">  
                    <a href="" class="nav__link"> Guitar Teachers </a>  
                </li>
                <li class="nav__item">  
                    <a href="" class="nav__link"> Curses </a>  
                </li>
                <li class="nav__item">  
                    <a href="" class="nav__link"> Tone And Effects Advising  </a>  
                </li>
                <li class="nav__item">  
                    <router-link to = "/login" class = "nav_link" id="login--button">
                        Log In 
                    </router-link>                  
                 </li>
            </ul>
        </nav>        
    </header>  

    <router-view> </router-view>

</template>

<script setup>

    
</script>

<style scoped>

/* HEADER */
.header{   
    box-sizing: border-box; 
} 

.header_overlay{
    height: 100vh;
    width: 100vw;
    background-color: #222b;
    position: absolute;
    z-index: 1; 
}

.header_item-container{
    position:relative;
    z-index: 20; 
}   
/* HEADER- INTRODUCTION & DOWNLOAD */
.introduction_page{
    padding-top: 100px; 
    text-align:center;  
    color:#08f;  
}

.text_introduction{
    font-size:16px;
    color: #09f;
}
 
.download_btn_background{
    display:flex;        
} 
.download_btn{ 
    margin: auto;
    border-radius: 10px;
    padding: 20px 30px;  
    text-decoration: none;
    color: #fff;  
    background-color: #05b;   
    font-size: 20px;         
    text-align: center;      
    transition-duration: 0.3s; 
    transition-property: color, background-color;
}

.download_btn:hover{
    color: #000;
    background-color: #04f;
    box-shadow: 0 0 15px #04f;
}

/* NAVBAR */
.nav{
    position: fixed;
    top: 0;
    z-index: 20;
    box-sizing:border-box;
    width: 100vw;
    background-color: #111b;
    box-shadow: 0 0 15px #111;
}

.nav__list{   
    /* display: flex;  */
    margin:0;
    padding: 3px 0;
    box-sizing: border-box;     
    text-align: center;
    font-size: 14px;
}

.nav__item{
    display:inline-block; 
    padding: 8px;   
}

.nav__link{
    display: inline-block;
    color: #fff;
    text-decoration: none;
    padding: 12px 14px;
    transition-property: background-color, color, box-shadow;
    transition-duration: 0.2s; 
    transition-timing-function: ease-out;
    background: linear-gradient(to bottom, #222, #444);
    box-shadow: 0 0 7px #545;
    border-radius: 6px;

}

.nav__link:hover{
    background: #eee;
    color: #111;
    box-shadow: 0 0 10px #999;
}

#login--button{  
    transition-duration: 0.2s; 
    transition-timing-function: ease-out;
    background: linear-gradient(to bottom, #222, #444);
    border-radius: 6px;
    
    text-decoration: none;   
    border: 1px solid #fff;
    background: linear-gradient(to bottom,#252525, #444);
    padding: 10px 15px;
    color: #fff;
    margin-left: 30px; 
    font-size: 14px;
}

#login--button:hover{
    background: #eee;
    color: #111;
    box-shadow: 0 0 10px #999;
}

   /* @keyframes aparecer{
    0% {
        opacity: 0;
        display: flex;
    }
    100% {
        opacity: 1;
        display: flex;
    }
} 

.green{
    color: #3f3
}

.red{
    color: #d00
} */

</style>