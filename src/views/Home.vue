<template>
  <div class="flex justify-center">
    <img :src="PokemonImage" class="my-3 w-1/2">
  </div>
</template>

<script>
import PokemonImage from "../assets/pikachu.jpg"
export default {
  name: 'Home',
  data() {
    return {
      PokemonImage
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
