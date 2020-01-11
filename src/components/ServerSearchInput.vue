<template>
  <div>
    <h4>
      <font-awesome-icon icon="globe-africa" />
      <span class="ml-1">
        Búsqueda de dominios
      </span>
    </h4>
    <div
      class="d-flex p-2 bd-highlight justify-content-between align-items-end"
    >
      <b-form-group id="input-group-2" class="mx-2 mb-0 flex-fill">
        <label for="input-2">
          Ingresa el nombre del dominio que deseas buscar:
        </label>
        <b-form-input
          v-model="domainName"
          required
          placeholder="example.com"
        ></b-form-input>
      </b-form-group>
      <div>
        <b-button
          @click="domainSearch()"
          type="button"
          variant="primary"
          :disable="!domainName"
        >
          Buscar servidor
          <font-awesome-icon icon="search" />
        </b-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ServerSearchInput',
  data() {
    return {
      domainName: '',
    };
  },
  methods: {
    domainSearch(): void {
      if (!this.domainName) {
        return;
      }
      this.$router.push({
        name: 'domainInfo',
        params: { uri: this.domainName },
      });
    },
  },
});
</script>

<style scoped></style>
