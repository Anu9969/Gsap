import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/home/HomeBottom'
import 
import Agence from './components/agence/agence'
import Projects from './components/projects/Projects'

const App = () => {
  return (
    <div className='flex flex-col gap-20 items-center justify-center h-screen'>
      {/* <Link className="text-8xl text-white" to='/'>Home</Link>
      <Link className="text-8xl text-white" to='/agence'>Agence</Link>
      <Link className="text-8xl text-white" to='/projects'>Projects</Link> */}
      
      
      <Routes>
      <Route path='/' element= { <Home/>}/>
      <Route path='/agence' element= { <Agence/>}/>
      <Route path='/projects' element= { <Projects/> }/>
      </Routes>    

      
    </div>
  )
}

export default App