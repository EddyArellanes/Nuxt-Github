<template>
  <div>
    <header class="white-text header-background Home">
		  <h1 class="title">Eddy Arellanes Bastida</h1>
		  <h2 class="subtitle">¡Bienvenido a mi pequeño espacio!</h2>
	  </header>
	  <nav class="black">
      <div class="nav-wrapper">
        <a href="#!" class="brand-logo"><i class="large material-icons white-text">wb_sunny</i></a>
        <ul class="right hide-on-med-and-down side-nav" id="mobile-demo">
          <li class="waves-effect"><nuxt-link to="/#home"><i class="material-icons left">home</i>Inicio</nuxt-link></li>
          <li class="waves-effect"><nuxt-link to="/about"><i class="material-icons left">face</i>Acerca de Mí</nuxt-link></li>
          <li class="waves-effect"><nuxt-link to="/#Skills"><i class="material-icons left">insert_chart</i>Habilidades</nuxt-link></li>
          <li class="waves-effect"><nuxt-link to="/#Projects"><i class="material-icons left">work</i>Proyectos</nuxt-link></li>
          <li class="waves-effect"><nuxt-link to="/blog"><i class="material-icons left">note</i>Blog</nuxt-link></li>
        </ul>
        <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        <ul id="slide-out" class="sidenav">
          <li class="waves-effect"><nuxt-link to="/#Home" class="waves-effect hamburguer"><i class="material-icons left">home</i>Inicio</nuxt-link></li>    				
          <li class="waves-effect"><nuxt-link to="/about" class="waves-effect "><i class="material-icons left">face</i>Acerca de Mí</nuxt-link></li>
          <li class="waves-effect"><nuxt-link to="/#Skills" class="waves-effect hamburguer"><i class="material-icons left">insert_chart</i>Habilidades</nuxt-link></li>    			    				
          <li class="waves-effect"><nuxt-link to="/#Projects" class="waves-effect hamburguer"><i class="material-icons left">work</i>Proyectos</nuxt-link></li>    		
          <li class="waves-effect"><nuxt-link to="/blog"><i class="material-icons left">note</i>Blog</nuxt-link></li>    				
        </ul>
      </div>
  	</nav>
  </div>
</template>
<script>
  if (process.client) {
    require('materialize-css')      
  	let sidenavComponent = M.Sidenav.init(document.querySelector('.sidenav'), {accordion:false})
  	let hamburguerElements = document.getElementsByClassName("hamburguer")
  	for(let counter = 0; counter<hamburguerElements.length; counter++){
        hamburguerElements[counter].addEventListener("click", ()=> sidenavComponent.close())
    }
    
  }
	
export default {
  name: 'Header'
}
</script>

