import { useState } from 'react'
import {Title} from './components/Title'
import NewYear from './assets/anonovo.jpg'
import './App.css'
import Contador from './components/Contador'
import useCount from './hooks/userCountDown'


function App() {
  const [day,hour,min,sec] = useCount('Jan 1, 2024 00:00:00')

  return (
    <div className='app' style={{backgroundImage:`url(${NewYear})`}}>
      <div className='container'>
        <Title title="Contagem Regressiva" />
        <div className='contagem-regressiva'>
          <Contador title="Dias" number={day}/>
          <Contador title="Horas" number={hour}/>
          <Contador title="Minutos" number={min}/>
          <Contador title="Segundos" number={sec}/>
        </div>
      </div>
    </div>
  )
}

export default App
