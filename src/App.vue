<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import router from '../router'
export default {
  router,
  name: 'app',
  methods: {

  },
  mounted(){
    localStorage.removeItem('user')
    // if(localStorage.getItem('user')){
    //   console.log('User Exists')

    // }else{
    //   console.log("User Does Not Exist")
    //   this.$router.push('/login')
    // }
  }
}
</script>

<style>

</style>
