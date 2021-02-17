<template>
  <div class="relative bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
      <div class="flex justify-start lg:w-0 lg:flex-1">
        <a href="#">
          <span class="sr-only">Workflow</span>
          <img class="h-8 w-auto sm:h-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/320px-International_Pok%C3%A9mon_logo.svg.png" alt="">
        </a>
      </div>
      <nav class="hidden md:flex space-x-10">
        <router-link :to="{ name: 'Home'}" class="text-base font-medium text-gray-500 hover:text-gray-900">
          Home
        </router-link>
        <router-link :to="{ name: 'PokemonList'}" class="text-base font-medium text-gray-500 hover:text-gray-900">
          Pokemon
        </router-link>
        
      </nav>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    msg: String
  }
}
</script>

