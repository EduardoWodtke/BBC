<script setup>
    class MobileNavbar{
        constructor(mobileMenu, navlist, navLinks){
            this.mobileMenu = document.querySelector(mobileMenu);
            this.navlist = document.querySelector(navlist);
            this.navLinks = document.querySelectorAll(navLinks);
            this.activeClass = "active"
        }
        handleClick(){
            
        }
        addClickEvent(){
            this.mobileMenu.addEventListener("click", this.handleClick);
        }
        init(){
            if(this.mobileMenu){
                this.addClickEvent();
            }
            return this;
        }
    }
    const mobileNavbar = new MobileNavbar(
        ".mobile-menu",
        ".nav-list",
        ".nav-list li",
    );
    mobileNavbar.init();
</script>

<template>
    <header>
        <nav>
            <a class="logo" href="">BBC</a>
            <div class="mobile-menu">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
            <ul class="nav-list">
                <li><a href="">Início</a></li>
                <li><a href="">Loja</a></li>
                <li><a href="">Sobre nós</a></li>
                <li><a href="">Contato</a></li>
            </ul>
        </nav>
    </header>
    <main></main>
</template>

<style scoped>
* {
    margin: 0px;
    padding: 0px;
}

a {
    color: #fff;
    text-decoration: none;
    transition: 0.3s;
}

a:hover {
    opacity: 0.7;
}

.logo {
    font-size: 24px;
    text-transform: uppercase;
    letter-spacing: 4px;
}

nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #23232e;
    height: 8vh;
}

main {
    background: url("https://media.istockphoto.com/id/168498736/pt/foto/esticar-limousina-isolado-a-branco.jpg?s=612x612&w=0&k=20&c=w4mjYJJxiuhydhqmSDZwpesulfzgMDWYtuEvwSgipjo=") no-repeat center center;
    background-size: cover;
    height: 92vh;
}

.nav-list {
    list-style: none;
    display: flex;
}

.nav-list li{
    letter-spacing: 3px;
    margin-left: 32px;
}

.mobile-menu{
    display: none;
    cursor: pointer;
}
.mobile-menu div{
    width: 32px;
    height: 2px;
    background: #fff;
    margin: 8px;
}

@media (max-width: 999px){
    body{
        overflow-x: hidden;
    }
    .nav-list{
        position: absolute;
        top: 8vh;
        right:0;
        width: 50vw;
        height: 92vh;
        background: #23232e;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        transform: translateX(100%);
    }
    .nav-list li{
        margin-left: 0;
        opacity: 0;
    }
    .mobile-menu{
        display: block;
    }
    .nav-list.active{
        transform: translateX(0);
    }
}
</style>
