<template>
  <v-app id="app">
    <v-container>
      <form @submit.prevent="greet">
        <v-text-field v-model="name" label="First name"></v-text-field>
        <v-btn type="submit">Greet</v-btn>
      </form>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      name: '',
    }
  },
  methods: {
    greet() {
      alert(`Hi ${this.name.trim() || 'there'}!`)
    }
  }
}
</script>