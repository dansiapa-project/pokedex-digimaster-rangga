<template>
  <spinner v-if="!pokemonData" :spacing="55" class="my-3" size="large" />
  <t-card v-else>
    <p class="text-2xl text-gray-600 font-mono text-center my-2">
      {{ pokemonData.name|capitals }}
    </p>
    <p class="text-xl text-red-600 font-mono text-center my-2">
      Height - {{ pokemonData.height }}, Weight - {{ pokemonData.weight }} lbs, Base Exp - {{ pokemonData.base_experience }}
    </p>
    <div class="flex justify-center my-2">
      <t-button type="button" @click="statsModalOpen = true">
        Show Stats
      </t-button>        
    </div>  
  <t-table
      :headers="['Name', 'Move Url', 'Move Learned At', 'Method', 'Action']"
      :data="pokemonData.moves"
    >
      <template slot="row" slot-scope="props">
        <tr class="text-center" :class="[props.trClass, props.rowIndex % 2 === 0 ? 'bg-gray-100' : '']">
          <td :class="props.tdClass" class="text-red-400 text-left">
            {{ props.row.move.name|capitals }}
          </td>
          <td :class="props.tdClass" class="text-left">
            <a>{{ props.row.move.url }}</a>
          </td>
          <td :class="props.tdClass" class="text-left">
            <a>{{ props.row.version_group_details[0].level_learned_at }}</a>
          </td>
          <td :class="props.tdClass" class="text-left">
            <a>{{ props.row.version_group_details[0].move_learn_method.name|capitals }}</a>
          </td>
          <td class="flex justify-left p-3">
            <t-button variant="secondary" @click="changeUrl(props.row.move.name)">View</t-button>
          </td>
        </tr>
      </template>
    </t-table>
    <t-modal ref="statsModal" v-model="statsModalOpen">
      <pokemon-stats-modal :pokemonStats="pokemonData.stats" />
      <template slot="header">
        <h2 class="text-center"> {{ pokemonData.name|capitals }} Stats</h2>
      </template>
      <template slot="footer">
        <div class="flex justify-around">
          <t-button variant="error" type="button" @click="$refs.statsModal.hide()">Cancel</t-button>
        </div>
      </template>
    </t-modal>
    <template v-slot:footer>
      <div class="flex justify-between">
        <t-button type="button" @click="navigateBack">
          Return
        </t-button>
      </div>
    </template>
  </t-card>
</template>
<script>
import Spinner from 'vue-simple-spinner';
import PokemonStatsModal from '../components/modals/pokemon-stats.vue';
export default {
  name: 'PokemonDetail',
  components: {
    Spinner,
    PokemonStatsModal,
  },
  data() {
    return {
      pokemonData: null,
      statsModalOpen: false,
    }
  },
  filters: {
    capitals(value) {
      if (value) {
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
    }
  },
  mounted() {
    this.getApiData();
  },
  methods: {
    async getApiData() {
      const url = `v2/pokemon/${this.$route.params.id}`;
      this.pokemonData = await this.$http.get(url);
    },
    changeUrl(move_name) {
      this.$router.push({ name: 'MoveDetail', params: { id: move_name } });
    },
    navigateBack() {
      this.$router.go(-1);
    },
  }
}
</script>

