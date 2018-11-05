<template>  
  <div class="parent">
    <Header />      
    	<div class="row" id="AboutMe">
			  <div class="col s12 m12">			    
			    <div class="card horizontal">
            <h3 class="header subsubtitle">Acerca de Mí</h3>            
			      <div class="card-image">
			        	
			      </div>
			      <div class="card-stacked">
			        <div class="card-content">
			          <p>Como ya habrás visto en mi página principal aka el index, sólo trato de mostrar la información escencial para no aburrirte.</p>
			          <p>En ésta sección hablo de mí más como persona que juega, que lee, etc. Lo dejo de una forma sencilla y entretenida, See you soon.</p>
			        </div>
			       
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
  data(){
    return {
      counter: 0
    }
  },
  created(){    
  },
  
}
</script>
<style scoped>  
</style>


