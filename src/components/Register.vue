<template>
    <div class="register">
        <h1>Register Component</h1>
        <input type="text" placeholder="UserName" v-model="userName">
        <button @click="registerUser">Register</button>
        <h1>Prop value : {{title}}</h1>
    </div>
</template>

<script>
export default {
    props: ['title'],
    data(){
        return{
            userName: ''
        }
    },
    methods: {
        registerUser: function(){
            localStorage.setItem('User', this.userName);
        }
    }
}
</script>

<style>

</style>
