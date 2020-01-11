<template>
  <b-card>
    <h4 class="card-title">
      <img width="16px" :src="detail.logo" />
      {{ detail.host }}
    </h4>
    <div class="px-4">
      <h6 class="card-subtitletext-muted">{{ detail.title }}</h6>
      <div class="text-success" v-if="!detail.isDown">
        <p class="mb-0">
          <font-awesome-icon icon="check-circle" /> El servidor está arriba
        </p>
      </div>
      <div v-else class="text-danger">
        <p class="mb-0">
          <font-awesome-icon icon="times-circle" />
          El servidor está fuera de servicio
        </p>
      </div>
      <hr />
      <p class="m-0">
        <strong>Grado SSL:</strong>
        <span
          v-if="detail.previousSslGrade && detail.previousSslGrade != 'unknown'"
        >
          {{ detail.previousSslGrade }}
          <font-awesome-icon icon="arrow-right" />
        </span>
        <span>
          {{ detail.sslGrade }}
        </span>
      </p>
      <p class="text-muted mb-0">
        <span v-if="detail.serversChanged">
          Se detectaron cambios en los servidores.
        </span>
        <span v-else>
          No se han detectado cambios en los servidores.
        </span>
      </p>
    </div>
  </b-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { DomainInfoModel } from '@/models/domain.models';

export default Vue.extend({
  name: 'DomainInfoDetail.vue',
  props: {
    detail: {
      type: Object as () => DomainInfoModel,
    },
  },
});
</script>

<style scoped></style>
