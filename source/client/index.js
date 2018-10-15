import 'babel-polyfill'
import React from 'react'
import ReactDOM  from 'react-dom'
import AppRouter from './app/AppRouter'
import './styles/core.scss';

const development = module.hot && process.env.NODE_ENV === 'development'
const render = development ? ReactDOM.render : ReactDOM.hydrate

render(<AppRouter/>, document.getElementById('root'))

if (development) {
  module.hot.accept()
}
