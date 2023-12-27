import { useState } from 'react'
import {Title} from './components/Title'
import NewYear from './assets/anonovo.jpg'
import './App.css'
import Contador from './components/Contador'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app' style={{backgroundImage:`url(${NewYear})`}}>
      <div className='container'>
        <Title title="Contagem Regressiva" />
        <div className='contagem-regressiva'>
          <Contador title="Dias" number={2}/>
          <Contador title="Horas" number={2}/>
          <Contador title="Minutos" number={2}/>
          <Contador title="Segundos" number={2}/>
        </div>
      </div>
    </div>
  )
}

export default App
