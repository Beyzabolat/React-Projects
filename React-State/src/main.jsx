import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'

//import Counter from './components/Counter.jsx'
import InputExample from './components/InputExample.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InputExample />
  </StrictMode>,
)