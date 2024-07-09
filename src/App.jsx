import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Homepage from './Pages/Homepage/Homepage'
import Branchpage from './Pages/Branchpage/Branchpage/'
import Ourpage from './Pages/Ourpage/Ourpage'
import Contactpage from './Pages/Contactpage/Contactpage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Homepage/>}/>
        <Route path={"/branch"} element={<Branchpage/>}/>
        <Route path={"/our"} element={<Ourpage/>}/>
        <Route path={"/contact"} element={<Contactpage/>}/>
      </Routes>
    </div>
  )
}

export default App