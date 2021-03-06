import Promise from 'promise-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

// Top level component
import App from './App'

// Export top level component as JSX (for static rendering)
export default App

if (typeof window !== "undefined" && !window.Promise) {
  window.Promise = Promise;
}

// Render your app
if (typeof document !== 'undefined') {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render
  const render = Comp => {
    renderMethod(<Comp />, document.getElementById('root'))
  }

  // Render!
  render(App)
}
