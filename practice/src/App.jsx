
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
