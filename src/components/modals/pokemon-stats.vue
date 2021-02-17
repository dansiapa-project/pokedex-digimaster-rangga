<template>
  <div class="container">
    <div v-for="(item, index) in pokemonStats" :key="index" class="bg-gray-50 p-2 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
        <dd class="mt-1 text-center text-lg text-gray-700">
        {{ item.stat.name }} - {{ item.base_stat }}
        </dd>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ConfirmModal',
  props: {
    pokemonStats: {
      type: Array,
      required: true,
    },
  },
};
</script>
