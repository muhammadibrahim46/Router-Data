import React from 'react'
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'
import Error from './components/error'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
{
  
}
function App() {``
  return (
    <Router>
      
    <>
    <h1>start</h1>
    <Link to={'/'} >Home</Link>
    <Link to={'/About'} >About</Link>
    <Link to={'/Contact'} >contact</Link>
  
  
    <Routes>
      <Route path='/' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='*' element={<Error/>}/>
    {/* <Route path='*' element={<Error/>}/> */}
  
</Routes>
    </>

</Router>
  )
}

export default App