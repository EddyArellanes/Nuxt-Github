<template>
  <div class="row">
    <div class="col l12 m12 s12">
      <div class="container">
        <div class="col l6 m6 s6">
          <h1>Eddy Arellanes</h1>
          {{counter}}
          <button @click="increment" class="btn waves-effect blue darken-3 white-text">Presiona aquí</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import env from '../config/env'
export default {
  name: 'IndexPage',
  data(){
    return {
      counter: 0
    }
  },
  created(){
    axios.get(`${env.endpoint}/albums`).then(data=>{
      console.log(data)
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


