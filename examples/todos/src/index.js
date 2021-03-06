import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'

import { navigate } from './actions'
import { Router } from 'state-encode-router'
import * as routerPresetPako from 'state-encode-router-preset-pako'
import * as routerPresetSchemapack from 'state-encode-router-preset-schemapack'

const store = createStore(reducer)

// Tutorial step 3: initialize the router and listen to navigation
const router = new Router(
  routerPresetPako.withOptions({
    decompress: {
      to: '' // Decompress to byte array for schemapack
    }
  }),
  routerPresetSchemapack.withSchema(
    {
      todos: [{
        id: 'uint32',
        text: 'string',
        completed: 'boolean'
      }],
      visibilityFilter: 'enum:visibilityFilter'
    },
    {
      enumTypes: {
        visibilityFilter: ['SHOW_ALL', 'SHOW_ACTIVE', 'SHOW_COMPLETED']
      }
    }
)).addStateChangeListener((state) => {
  store.dispatch(navigate(state))
}).start()

// Tutorial step 4: subscribe to store state change and perform navigation
store.subscribe(() => {
  router.navigate(store.getState());
})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
