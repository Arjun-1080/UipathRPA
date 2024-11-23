import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import bod from './data/bod'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Events from './pages/Events'
import Board from './pages/Board'
import Navbar from './components/Navbar'
import Blogs from './pages/Blogs'

function App() {
  const [count, setCount] = useState(bod)

  return (
     <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/events' element={<Events/>}/>
          <Route path='/board' element={<Board/>}/>
          <Route path='/blogs' element={<Blogs/>}/>


        </Routes>
     </Router>
  )
}

export default App
