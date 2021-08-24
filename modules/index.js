/*
Modules must always be created with the pattern:
  [moduleName]/
    |-- index.js
    |-- state.js
    |-- getters.js
    |-- actions.js
    |-- mutations.js
    |-- mutations.types.js

The index.js file must import and export what is needed for the vuex module to work properly:
  export default {
    namespaced: true,
    state: state,
    mutations: mutations,
    getters: getters,
    actions: actions
  }
*/

// auto import modules

const modules = {}
const requiredModules = require.context(`.`, true, /([a-z]+)\/index\.js/)
const moduleNameRegExp = /\.\/([a-z]+)\/index.js$/i

requiredModules.keys().forEach(filename => {
    // eslint-disable-next-line no-unused-vars
    const [_, moduleName] = filename.match(moduleNameRegExp)
    modules[moduleName] = requiredModules(filename).default || requiredModules(filename)
})

export default modules
