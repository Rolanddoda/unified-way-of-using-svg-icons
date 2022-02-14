/* With import.meta.glob */
// import { defineAsyncComponent } from 'vue'
// import { app } from './main-app'
//
// const globalComponentsPaths = import.meta.glob('/src/components/global/**/*.vue')
//
// Object.entries(globalComponentsPaths).forEach(([path, module]) => {
//   // "./components/SvgIcon.vue" -> "SvgIcon"
//   const componentName = path
//     .split('/')
//     .pop()
//     .replace(/\.vue$/, '')
//
//   app.component(componentName, defineAsyncComponent(module))
// })

/* With import.meta.globEager */
import { app } from './main-app'

const globalComponentsPaths = import.meta.globEager('/src/components/global/**/*.vue')

Object.entries(globalComponentsPaths).forEach(([path, module]) => {
  // "./components/SvgIcon.vue" -> "SvgIcon"
  const componentName = path
    .split('/')
    .pop()
    .replace(/\.vue$/, '')

  app.component(componentName, module.default)
})
