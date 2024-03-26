import { render } from './core/jsx-runtime.js'
import { App } from '@/App.jsx'

const root = document.getElementById('root')

render(root, App())
