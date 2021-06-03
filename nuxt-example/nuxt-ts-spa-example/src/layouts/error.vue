<template>
  <v-app dark>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/">
Home page
</NuxtLink>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';

export interface Error {
  statusCode: number;
}

@Component({
  layout: 'empty',
})
export default class NuxtTypeScriptExampleErrorLayout extends Vue {
  @Prop({ type: Object, required: true }) readonly error!: Error;

  pageNotFound: string = '404 Not Found';
  otherError: string = 'An error occurred';

  @Emit()
  head() {
    const title: string =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return { title }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
