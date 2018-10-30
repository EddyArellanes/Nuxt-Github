<template>
  <div class="row" id="Skills">
    <div class="col s12 m12">
      <h3 class="header subsubtitle">Habilidades</h3>
      <div class="card horizontal">			    	
        <div class="card-stacked">
          <div class="card-content">
            <p>Mis habilidades principalmente están enfocadas a la rama de Informática y se dividen así:</p>			          	
            <ul class="collapsible popout">
              <li>
                <div class="collapsible-header"><i class="material-icons">code</i>Desarrollo Web</div>
                <div class="collapsible-body">
                  <ul>
                    <li>
                      <span>Frontend</span>
                    </li>
                    <li>							      							  		
                      <span>
                        <i class="devicon-html5-plain-wordmark colored devicon-size"></i>
                      </span>									      		
                    
                      <span>
                        <i class="devicon-css3-plain-wordmark colored devicon-size"></i>
                      </span>									      		
                      
                      <span>
                        <i class="devicon-javascript-plain colored devicon-size"></i>
                      </span>	
                      <span>
                        <i class="devicon-vuejs-plain-wordmark colored devicon-size"></i>
                      </span>	
                      <span>
                        <i class="devicon-react-original-wordmark colored devicon-size"></i>
                      </span>	
                    </li>
                    <li>
                      <span>Backend</span>
                    </li>
                    <li>
                      <span>
                        <i class="devicon-php-plain colored devicon-size"></i>
                      </span>								      									      		
                      <span>
                        <i class="devicon-codeigniter-plain-wordmark colored devicon-size"></i>
                      </span>							
                      <span>
                        <i class="devicon-python-plain-wordmark colored devicon-size"></i>      			
                      </span>
                      <span>
                        <i class="devicon-django-plain-wordmark colored devicon-size"></i>
                      </span>
                      <span>
                        <i class="devicon-mysql-plain-wordmark colored devicon-size"></i>
                      </span>								      		
                      <li>
                        <span>Project Managament</span>
                      </li>
                      <li>
                      <span>
                          <i class="devicon-git-plain-wordmark colored devicon-size"></i>
                      </span>							      		
                      <span>
                        <i class="devicon-github-plain-wordmark colored devicon-size"></i>
                      </span>							      		
                      <span>
                        <i class="devicon-gitlab-plain-wordmark colored devicon-size"></i>
                      </span>
                      <span>
                        <i class="devicon-trello-plain-wordmark colored devicon-size"></i>
                      </span>								      			
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div class="collapsible-header"><i class="material-icons">phone_android</i>Desarrollo Móvil</div>
                 <div class="collapsible-body">
                  <ul>
                    <li>
                      <span>Android</span>		
                    </li>
                    <li>
                      <span>
                        <i class="devicon-java-plain-wordmark colored devicon-size"></i>
                      </span>									      			
                    </li>
                    <li>
                      <span>iOS</span>		
                    </li>
                    <li>
                      <span>
                      <i class="devicon-swift-plain-wordmark colored devicon-size"></i>
                      </span>									      			
                    </li>                
                </ul>							      		
              </div>
            </li>
            <li>
              <div class="collapsible-header"><i class="material-icons">cloud</i>Administración 	de Servidores</div>
                <div class="collapsible-body">
                  <ul>
                    <li>
                      <span>IaaS Amazon Web Services <i class="devicon-amazonwebservices-original colored devicon-size"></i></span>		
                    </li>
                    <li>
                      <span>PaaS Heroku <i class="devicon-heroku-original colored 	devicon-size"></i></span>		
                    </li>
                    <li>
                      <span>Hosting Tradicional con Cpanel 
                      <i class="devicon-apache-plain-wordmark colored devicon-size"></i></span>		
                    </li>
                  </ul>		
                </div>
              </li>
            </ul>
          </div>            
        </div>
      </div>
    </div>
  </div>
</template>
<script>
if (process.client) {
  require('materialize-css')  
  console.log("Initializing Materialize-css")
  M.Collapsible.init(document.querySelectorAll('.collapsible') , {})
  
}

export default {
  name: 'Skills',
  updated(){
    
  },
  methods: {
    
  }
}
</script>

