import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Createpost from './pages/Createpost'
import logo from './assets/logo.svg'
const App = () => {
  return (
    <BrowserRouter>
    <header className='w-full flex items-center justify-between bg-gray-50 border-b-2 shadow-md px-3' >
            <Link to={'/'}>
            <img src={logo} className='h-20 w-20 object-contain'/>
           
            </Link>
            <Link to={'/create'} className=' hover:bg-blue-400 bg-blue-700 px-3 py-1 rounded-md text-white '>Create Post</Link>
        </header>
           
      <main className='p-3'>
        <Routes>
          <Route path='/' element={<Home/>} />
        <Route path='/create' element={<Createpost/>} />
      </Routes> </main>
   
    </BrowserRouter>
  )
}

export default App 