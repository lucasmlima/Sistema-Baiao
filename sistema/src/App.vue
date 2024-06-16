<template>
  <nav-bar-component/>
  <router-view/>
</template>

<script>
import NavBarComponent from './components/NavBarComponent.vue';

export default {
  components: {
    NavBarComponent
  }
}
</script>

<style lang="scss">
/* Adicione seu estilo aqui */
</style>
