import example from './images/agave-color.png'
import logo from './images/logo.svg'
import './styles/main.scss'

console.log('Interesting!')
// Create heading node
const heading = document.createElement('h1')
heading.textContent = 'Interesting! HmR'

// Append heading node to the DOM
const app = document.querySelector('#root')
app.append(heading)

