<template>
  <div>
      <input type = "text" v-model = "name">
      <button @click="startUse">Begin</button>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
    data: function(){
        return {
            name: ""
        }

    },
    methods: {
        startUse: function(){
            this.$router.push("home/" + this.name)

        }

    }
}
</script>

<style>

</style>