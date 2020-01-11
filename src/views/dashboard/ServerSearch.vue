<template>
  <div>
    <b-row>
      <b-col>
        <ServerSearchInput />
      </b-col>
    </b-row>
    <b-row class="mt-4">
      <b-col>
        <ServerList />
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ServerList from '@/components/ServerList.vue';
import ServerSearchInput from '@/components/ServerSearchInput.vue';

export default Vue.extend({
  name: 'ServerSearch',
  components: {
    ServerList,
    ServerSearchInput,
  },
});
</script>

<style scoped></style>
