<template>  
  <div class="parent">
    <Header />  
    <About />
    <Skills />
    <Briefcase />
    <Footer />
  </div>
  
</template>
<script>
import axios from 'axios'
import env from '../config/env'

//Components Registry
import Header from '../components/Header'
import About from '../components/About'
import Skills from '../components/Skills'
import Briefcase from '../components/Briefcase'
import Footer from '../components/Footer'

export default {
  name: 'IndexPage',
  components: {
    Header,
    About,
    Skills,
    Briefcase,
    Footer
  },
  data(){
    return {
      counter: 0
    }
  },
  created(){
    axios.get(`${env.endpoint}/albums`).then(data=>{
      //console.log(data)
    }).catch(err=>{

    }).finally(()=>{

    })
  },
  methods: {
    increment(){
      this.counter = this.counter + 1
    }
  }
  
}
</script>
<style scoped>  
</style>


