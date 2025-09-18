import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'

const App = () => {
  return (
    <>
    <NavBar/>
   <main className="transform transition-transform duration-500"> 
    
    <Hero/>
    <cocktails/>
   </main>
   </>
  )
}

export default App