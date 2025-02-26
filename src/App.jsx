import { useState } from 'react'
import Navbar from './components/Navbar'
import Introduce from './components/Introduce'
import Skills from './components/Skills'
import Profile from './components/Profile'
import { LanguageContexts } from './context/LanguageContexts'

function App() {
 

  return (
    <>
    <LanguageContexts>
     <Navbar/>
     <Introduce/>
     <Skills/>
     <Profile/>
     </LanguageContexts>
   
    </>
  )
}

export default App