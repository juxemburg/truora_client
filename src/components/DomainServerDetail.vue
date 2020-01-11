<template>
  <b-card>
    <div class="d-flex justify-content-between">
      <h5 class="card-title">
        <font-awesome-icon icon="cloud" />
        {{ detail.address }}
      </h5>
      <p class="text-muted">
        <small>
          <strong>
            <font-awesome-icon icon="shield-alt" />
            Grado SSL:
          </strong>
          {{ detail.sslGrade }}
        </small>
      </p>
    </div>
    <hr />
    <div class="d-flex justify-content-start">
      <div class="mx-2">
        <p class="mb-0"><strong>País: </strong>{{ detail.country }}</p>
      </div>
      <div class="mx-2">
        <p class="mb-0"><strong>Dueño: </strong>{{ detail.owner }}</p>
      </div>
    </div>
  </b-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { DomainServer } from '@/models/domain.models';

export default Vue.extend({
  name: 'DomainServerDetail',
  props: {
    detail: {
      type: Object as () => DomainServer,
    },
  },
});
</script>

<style scoped></style>
