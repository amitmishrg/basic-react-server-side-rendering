import qs from 'qs' // Add this at the top of the file
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'

import { fetchCounter } from '../api/counter'
import counterApp from '../containers/reducers'
import App from '../containers/app'

let handleRender = (req, res) => {
  // Query our mock API asynchronously
  fetchCounter(apiResult => {
     // Read the counter from the request, if provided
     const params = qs.parse(req.query)
     const counter = parseInt(params.counter, 10) || apiResult || 0

     // Compile an initial state
      let preloadedState = { counter }

      // Create a new Redux store instance
      const store = createStore(counterApp, preloadedState)

      // Render the component to a string
      const html = renderToString(
        <Provider store={store}>
          <App />
        </Provider>
      )

      // Grab the initial state from our Redux store
      const finalState = store.getState()

      // Send the rendered page back to the client
      res.render('index', {html, finalState})
    })
}

module.exports = handleRender;
