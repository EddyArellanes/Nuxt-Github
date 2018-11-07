<template>  
  <div class="parent">
    <Header />      
    <div id="Random" class="row">     
      <div class="col l6 m6 s12">   
        <div class="card">
          <div class="card-image">
            <img  src="https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&h=650&w=940">
            <span class="card-title">¿Qué es esto?</span>
          </div>
          <div class="card-content">
            <p>
              Es un entorno de Testing de los módulos que usa el proyecto de  Superboletos para hacer diversas cosas como conversión de texto a fechas,
              Similitud entre textos y acciones de las Instants Apps
            </p>
          </div>
          <div class="card-action">
            
          </div>
        </div>
      </div>
      <div class="col l6 m6 s12">
        <div class="col s12 m12 l12">          
          <div class="card nuxt-slider height-150">                                    
            <h1 class="center">Stack Favorito</h1>
            <div class="nuxt-slider-container">
              <div class="col s12 m6 l4" v-for="(element, index) in technologies" v-bind:key="index">
                 <div class="card">
                  <div class="card-image element-card">
                    <img class="" v-bind:src="element.image">
                    <span class="card-title black-text">{{element.name}}</span>
                  </div>
                  <div class="card-content">                    
                  </div>
                  <div class="card-action"></div>
                </div>
              </div>
            </div>
          </div>
        </div>        
        <div class="col l12">
          <div class="card">
            <div class="card-image">
              <img class="height-150" src="https://images.pexels.com/photos/4827/nature-forest-trees-fog.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
              <span class="card-title">Trabajando</span>
            </div>
            <div class="card-content">
              

            </div>
            <div class="card-action"></div>
          </div>
        </div>        
      </div>      
  </div>		
  <Footer />
  </div>
  
</template>
<script>

//Components Registry
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default {
  name: 'IndexPage',
  components: {
    Header,    
    Footer
  },
   head () {
    return {
      meta: [
    
        { hid: 'description', name: 'description', content: 'Más información tanto personal como profesional - Eddy Arellanes Bastida' },     
        { hid: 'keywords', name: 'keywords', content: 'Eddy,Arellanes,Bastida,Carrera,Informacion,Programador' },      
        { hid: 'title', name: 'title', content: 'Acerca de mí - Eddy Arellanes Bastida' }
      ],
      title: 'Acerca de mí - Eddy Arellanes Bastida'
    }
  },
  data(){
    return {
      counter: 0,
      technologies: [
        { name: 'Javascript', image: 'data:image/png;base64,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'},
        { name: 'VueJs', image: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fdwglogo.com%2Fwp-content%2Fuploads%2F2017%2F09%2FVue_js_logo.png&f=1'},
        { name: 'NodeJs', image: 'https://miro.medium.com/max/730/1*d2zLEjERsrs1Rzk_95QU9A.png'},

      ],
    }
  },
  created(){    
  },
  
}
</script>
<style scoped>  
h1{
  font-size: 24px!important;
  margin-top: 0;
}
.height-150{
  height: 180px!important;
}
.element-card span{
  margin: 0 auto;
  padding: 0;
  font-size: 16px!important;
  bottom: auto!important;
  
}
.element-card img{
  margin: 0 auto;
  max-width: 115px;
  max-height: 63px;
}
</style>


