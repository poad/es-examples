<template>
  <v-container>
    <v-form ref="form" v-model="valid" :lazy-validation="lazy">
      <v-row>
        <v-col cols="24">
          <v-text-field
            id="displayName"
            v-model="displayName"
            label="user name"
            clearable="true"
            required
          />
          <v-text-field
            id="email"
            v-model="email"
            label="e-mail"
            clearable="true"
            required
          />
          <v-btn color="primary" @click="handler">
            登録
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="24" sm="12">
          <v-alert v-show="!!status" :type="status" light="true">
            {{ message }}
          </v-alert>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'vue-property-decorator'

@Component
export default class InputFormPage extends Vue {
  displayName: string = ''
  email: string = ''
  message: string = ''
  status: string = ''

  @Emit()
  handler() {
    const email = this.email
    const displayName = this.displayName

    this.message = 'email: ' + email + ' displayName: ' + displayName
    this.status = 'success'
  }
}
</script>
