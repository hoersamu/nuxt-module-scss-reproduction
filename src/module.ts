import { defineNuxtModule, addPlugin, createResolver, addComponent } from '@nuxt/kit'

export interface ModuleOptions {
  addPlugin: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'my-module',
    configKey: 'myModule'
  },

  setup (options, nuxt) {
    if (options.addPlugin) {
      const { resolve } = createResolver(import.meta.url)

      nuxt.options.build.transpile.push(resolve('./runtime'))

      addComponent({ name: 'TestComponent', filePath: resolve('./runtime/component.vue') })
    }
  }
})
function fileURLToPath (arg0: URL) {
  throw new Error('Function not implemented.')
}
