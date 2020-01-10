<template>
  <b-card>
    <h3 class="card-title">
      <img width="16px" :src="item.logoURL" />
      <a href="#">
        {{ item.hostID }}
      </a>
    </h3>
    <h6 class="card-subtitletext-muted">{{ item.pageTitle }}</h6>
    <p class="text-muted">
      <small> {{ item.lastVisited | timeAgo }}</small>
    </p>
  </b-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { RecentSearch } from '@/models/search.models';

export default Vue.extend({
  name: 'ServerListItem',
  props: {
    item: {
      type: Object as () => RecentSearch,
    },
  },
  filters: {
    timeAgo: function(time: string) {
      const now = new Date();
      const dateTime = new Date(time);
      let result = '';
      const timeFn: (
        delta: number,
        singularName: string,
        pluralName: string
      ) => string = (delta, singularName, pluralName) => {
        let msg = '';
        if (delta > 0) {
          msg =
            delta === 1
              ? `${delta} ${singularName}.`
              : `${delta} ${pluralName}.`;
          return `Última visita hace ${msg}`;
        }
        return '';
      };
      const deltaCalcs: {
        pluralName: string;
        singularName: string;
        deltaFn: () => number;
      }[] = [
        {
          pluralName: 'días',
          singularName: 'día',
          deltaFn: () => now.getDate() - dateTime.getDate(),
        },
        {
          pluralName: 'horas',
          singularName: 'hora',
          deltaFn: () => now.getHours() - dateTime.getHours(),
        },
        {
          pluralName: 'minutos',
          singularName: 'minuto',
          deltaFn: () => now.getMinutes() - dateTime.getMinutes(),
        },
        {
          pluralName: 'segundos',
          singularName: 'segundo',
          deltaFn: () => now.getSeconds() - dateTime.getSeconds(),
        },
      ];

      for (const calc of deltaCalcs) {
        result = timeFn(calc.deltaFn(), calc.singularName, calc.pluralName);
        if (result) {
          return result;
        }
      }
      return result;
    },
  },
});
</script>

<style scoped></style>
