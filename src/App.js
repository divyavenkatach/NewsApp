import React from 'react'
import NewsList from './components/NewsList'
import CardSlider from './components/CardSlider'
import Sidebar from './components/Sidebar'
import Home from './components/Home'

function App() {
  
  return (
<>
<Home/>
<Sidebar/>

  <CardSlider/>
  
  {/* <Sidebar/> */}
  <NewsList/>
</>
   
  )
}

export default App
