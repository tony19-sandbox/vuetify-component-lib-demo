import Vuetify, {
  VApp,
  VContainer,
  VBtn,
  VTextField,
} from 'vuetify/lib'

export const vuetify = options => new Vuetify({ ...options })

export const plugin = {
  install(Vue, options) {
    Vue.use(Vuetify, {
      components: {
        VApp,
        VContainer,
        VBtn,
        VTextField
      },
      ...options
    })
  }
}
