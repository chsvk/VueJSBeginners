<template>
    <div class="loing">
        <h1>Login Component</h1>
        <input type="text" placeholder="name" v-model="userName">
        <button @click="loginUser">Login</button><br>
        <!-- <router-link to="/register">Register User</router-link> -->
        <register :title="userEnteredValue"></register>
        <input type="text" v-model="userEnteredValue">
    </div>
</template>

<script>
import router from '../../router'
import Register from './Register'
export default {
    router,
    data(){
        return{
            userName: '',
            userEnteredValue: ''
        }
    },
    components: {
        Register
    },
    methods: {
        loginUser: function(){
            localStorage.setItem('user', this.userName);
            this.$router.push('/')
        }
    },
    mounted(){
        console.log(localStorage.getItem('user'));
        if(localStorage.getItem('user')){
            this.$router.push('/');
        }
    }
}
</script>

