<script>
export default {
  mounted() {
    const btnMobile = document.getElementById('btn-mobile');
    const nav = document.getElementById('nav');

    function toggleMenu(event) {
      if (event.type === 'touchstart') event.preventDefault();
      nav.classList.toggle('active');
      const active = nav.classList.contains('active');
      event.currentTarget.setAttribute('aria-expanded', active);
      if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
      } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
      }
    }

    btnMobile.addEventListener('click', toggleMenu);
    btnMobile.addEventListener('touchstart', toggleMenu);
  },
};
</script>

<template>
    <header id="header">
      <router-link class="bbc" to="/">BBC</router-link>
      <nav id="nav">
        <button
          aria-label="Abrir Menu"
          id="btn-mobile"
          aria-haspopup="true"
          aria-controls="menu"
          aria-expanded="false"
        >
          <span id="hamburger" aria-hidden="true"></span>
        </button>
        <ul id="menu" role="menu">
          <router-link class="botao" to="/loja">Loja</router-link>
          <router-link class="botao" to="/sobre">Sobre nós</router-link>
          <router-link class="botao" to="/contato">Contato</router-link>
          <router-link class="botao" to="/login">Login</router-link>
        </ul>
      </nav>
    </header>
    
  </template>
  

<style>
@import url('https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&display=swap');

body,
ul {
  margin: 0px;
  padding: 0px;
}

.bbc {
  color: white;
  text-decoration: none;
  font-family: 'Bruno Ace SC', cursive;
  font-size: 20px;
}

.botao {
  color: white;
  text-decoration: none;
  font-family: 'Bruno Ace SC', cursive;
  font-size: 20px;
  border: 2px;
  border-color: white;
  border-style: groove;
  margin-top: 15px;
  border-radius: 10px;
}

.botao:hover {
  background: white;
  color: black;
  transition: 0.7s;
}

#logo {
  font-size: 1.5rem;
  font-weight: bold;
}

#header {
  box-sizing: border-box;
  height: 70px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #000000;
}

#menu {
  display: flex;
  list-style: none;
  gap: 0.5rem;
}

#menu a {
  display: block;
  padding: 0.5rem;
}

#btn-mobile {
  display: none;
}

@media (max-width: 600px) {
  #menu {
    display: block;
    position: absolute;
    width: 100%;
    top: 70px;
    right: 0px;
    background: #000000;
    transition: 0.6s;
    z-index: 1000;
    height: 0px;
    visibility: hidden;
    overflow-y: hidden;
  }
  #nav.active #menu {
    height: calc(100vh - 70px);
    visibility: visible;
    overflow-y: auto;
  }
  #menu a {
    padding: 1rem 0;
    margin: 0 1rem;
    border-bottom: 2px solid rgba(255, 255, 255);
  }
  #btn-mobile {
    display: flex;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: none;
    background: none;
    cursor: pointer;
    gap: 0.5rem;
  }
  #hamburger {
    border-top: 2px solid;
    width: 20px;
    background-color: white;
  }
  #hamburger::after,
  #hamburger::before {
    content: '';
    display: block;
    width: 20px;
    height: 2px;
    background: currentColor;
    margin-top: 5px;
    transition: 0.3s;
    position: relative;
  }
  #nav.active #hamburger {
    border-top-color: transparent;
  }
  #nav.active #hamburger::before {
    transform: rotate(135deg);
  }
  #nav.active #hamburger::after {
    transform: rotate(-135deg);
    top: -7px;
  }
}
</style>
