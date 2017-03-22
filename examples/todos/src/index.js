import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'

import { navigate } from './actions'
import { HashRouter } from 'state-encode-router'
import * as routerPresetPako from 'state-encode-router-preset-pako'

const store = createStore(reducer)

// Tutorial step 3: initialize the router and listen to navigation
const router = new HashRouter(routerPresetPako).addNavigationListener((state) => {
  store.dispatch(navigate(state));
}).start();

// Tutorial step 4: subscribe to state change and perform navigation
store.subscribe(() => {
  router.navigate(store.getState());
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
