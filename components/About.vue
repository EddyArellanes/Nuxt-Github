<template>
  <div class="row" id="AboutMe">
    <div class="col s12 m6">
      <h3 class="header subsubtitle">Acerca de Mí</h3>
      <div class="card horizontal">
        <div class="card-image">
          <img src="../assets/images/profile.jpg" height="400" class="hide-on-small-only" alt="profile">
        </div>
        <div class="card-stacked">
          <div class="card-content">
            <p>Mi nombre es Eddy Arellanes Bastida, actualmente tengo 23 años y soy Desarrollador de Software, enfocado principalmente en el Web y Mobile Development.</p>
            <p>Soy entusiasta de la Informática y estoy interesado en Data Science, IA, Seguridad Informática, Servidores, y mucho más.</p>
          </div>
          <div class="card-action">
            <a href="aboutme.html" class="black-text waves-effect">¡Conoce más sobre mí!</a>
          </div>
        </div>
      </div>
    </div>

    <div class="col s12 m6">
      <h3 class="header subsubtitle">Intereses</h3>
      <div class="card">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator hide-on-small-only" src="../assets/images/topics.jpg" height="290" alt="topics">
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">Sobre mi Carrera<i class="material-icons right">more_vert</i></span>
          <p><a href="aboutme.html">Otros Intereses</a></p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">Tópicos Principales<i class="material-icons right">close</i></span>
          <ul>
            <li><i class="material-icons">code</i>Desarrollo de Aplicaciones Web</li>
            <li><i class="material-icons">phone_android</i>Desarrollo de Aplicaciones Móviles</li>
            <li><i class="material-icons">videogame_asset</i>Desarrollo de Videojuegos</li>
            <li><i class="material-icons">security</i>Seguridad Informática y Pentesting</li>
            <li><i class="material-icons">cloud</i>Administración de Servidores</li>
            <li><i class="material-icons">storage</i>Ciencia de Datos</li>
            <li><i class="material-icons">blur_off</i>Inteligencia Artificial</li>
          </ul>
        </div>
      </div>			    
    </div>
  </div>
</template>
<script>
export default {
  name: 'AboutPage',
  props: {
    info: Object
  }
}
</script>

