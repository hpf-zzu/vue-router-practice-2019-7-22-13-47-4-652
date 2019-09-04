<template>
  <div>
      <button @click="goback">return</button>
      <span class="namespan">{{name}}</span>
        <br>
        <router-link :to ="{path: '/home/' + name + '/list'}">go to list </router-link>
        <router-link :to ="{path: '/home/' + name + '/my' + name}">My</router-link>
        <router-view></router-view>
  </div>
</template>

<script>
export default {
    props:['name'],
    methods:{
        goback: function(){
            if(confirm("go?")){
                this.$router.push("/");
            }
        }

    }
}
</script>

<style>

</style>