<template>
  <div>
    <h3 class="mb-5">Información del dominio</h3>
    <div v-if="isLoadingModel" class="ml-2">
      <LoadingSpinner />
    </div>
    <div v-if="!isLoadingModel && domainInfo">
      <b-row>
        <b-col cols="12" md="4" sm="10">
          <DomainInfoDetail :detail="domainInfo" />
        </b-col>
        <b-col cols="12" md="8" sm="12">
          <h5 class="pt-4">
            <font-awesome-icon icon="server" />
            Listado de servidores
          </h5>
          <div
            class="m-2 my-4"
            v-for="server in domainInfo.servers"
            :key="server.address"
          >
            <DomainServerDetail :detail="server" />
          </div>
          <div
            v-if="!domainInfo.servers || domainInfo.servers.length === 0"
            class="m-2 my-4"
          >
            <p class="mb-0 text-muted">No se encontraron servidores. 😔</p>
          </div>
        </b-col>
      </b-row>
    </div>
    <div v-if="domainInfoErrMsg" class="alert alert-danger">
      {{ domainInfoErrMsg }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { DomainInfoModel } from '@/models/domain.models';
import { domainInfoService } from '@/shared';
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import DomainInfoDetail from '@/components/DomainInfoDetail.vue';
import DomainServerDetail from '@/components/DomainServerDetail.vue';

export default Vue.extend({
  name: 'DomainInfo',
  components: {
    LoadingSpinner,
    DomainInfoDetail,
    DomainServerDetail,
  },
  props: {
    uri: {
      type: String,
    },
  },
  data() {
    return {
      domainInfo: {} as DomainInfoModel,
      isLoadingModel: true,
      domainInfoErrMsg: '',
    };
  },
  created() {
    domainInfoService.getInfo(this.uri).subscribe(
      di => {
        this.domainInfo = di;
        this.isLoadingModel = false;
        this.domainInfoErrMsg = '';
      },
      err => {
        this.domainInfoErrMsg = err;
        this.isLoadingModel = false;
      }
    );
  },
});
</script>

<style scoped></style>
