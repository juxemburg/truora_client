<template>
  <div>
    <h4 class="mb-4">
      <font-awesome-icon icon="history" />
      Búsquedas recientes
    </h4>
    <div v-if="loadingSearchList" class="ml-2">
      <LoadingSpinner />
    </div>
    <b-row>
      <b-col v-for="search in recentSearches" :key="search.hostID">
        <ServerListItem :item="search" />
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import ServerListItem from '@/components/ServerListItem.vue';

import { mapState, mapActions } from 'vuex';

export default Vue.extend({
  name: 'ServerList',
  components: {
    LoadingSpinner,
    ServerListItem,
  },
  async created() {
    await this.retrieveRecentSearchesAction();
  },
  computed: {
    ...mapState(['recentSearches', 'loadingSearchList']),
  },
  methods: {
    ...mapActions(['retrieveRecentSearchesAction']),
  },
});
</script>

<style scoped></style>
