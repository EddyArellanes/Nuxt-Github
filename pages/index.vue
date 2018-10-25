<template>
  <h1>Hello World in Nuxt</h1>
</template>
<script>
import axios from 'axios'
import env from '../config/env'
export default {
  name: 'IndexPage',
  created(){
    axios.get(`${env.endpoint}/albums`).then(data=>{
      console.log(data)
    }).catch(err=>{

    }).finally(()=>{

    })
  }
}
</script>
<style scoped>

</style>


