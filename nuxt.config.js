export default {
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Soy Eddy Arellanes Bastida y ésta es mi Página donde pueden ver mi trayectoria profesional así como mis habilidades, información y pasatiempos' },
      { hid: 'author', name: 'author', content: 'Eddy Arellanes Bastida' },
      { hid: 'owner', name: 'owner', content: 'Eddy Arellanes Bastida' },
      { hid: 'keywords', name: 'keywords', content: 'Eddy,Arellanes,Bastida' },
      { hid: 'robots', name: 'robots', content: 'index, follow' },
      { hid: 'title', name: 'title', content: 'Bienvenido - Eddy Arellanes Bastida' }

    ],
    script: [
      //{ src: "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js" }
    ],    
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'assets/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
    ]
  },
  css:[
    'materialize-css/dist/css/materialize.min.css',
    'material-icons/iconfont/material-icons.css'

  ],
  plugins: [
    { src: 'materialize-css', ssr: false}
  ],
  build: {
    
  }
}