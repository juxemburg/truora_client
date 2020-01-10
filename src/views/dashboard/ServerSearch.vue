<template>
  <div>
    <b-row>
      <b-col>
        <h4>
          <font-awesome-icon icon="globe-africa" />
          <span class="ml-1">
            Búsqueda de dominios
          </span>
        </h4>
        <b-form-group id="input-group-2" class="ml-2">
          <label for="input-2">
            Ingresa el nombre del dominio que deseas buscar:
          </label>
          <b-form-input
            id="input-2"
            required
            placeholder="example.com"
          ></b-form-input> </b-form-group
      ></b-col>
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

export default Vue.extend({
  name: 'ServerSearch',
  components: {
    ServerList,
  },
});
</script>

<style scoped></style>
