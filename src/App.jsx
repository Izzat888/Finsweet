import React from 'react'
import "./main.css"
import "./App.css"
import Layout from './assets/components/Layout/Layout'
import Home from './assets/components/Pages/Home/Home' 
import About from './assets/components/Pages/About/About'
import Careers from './assets/components/Pages/Careers/Careers'
import Servic from './assets/components/Pages/Services/Servic'
import Blog from './assets/components/Pages/Blog/Blog'
import Contact from './assets/components/Pages/Contact/Contact'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            {/* Asosiy sahifa - Home */}
            <Route index element={<Home/>} />
            
            {/* Boshqa sahifalar */}
            <Route path='home' element={<Home/>} />
            <Route path='about' element={<About/>}/>
            <Route path='careers' element={<Careers/>}/>
            <Route path='servic' element={<Servic/>}/>
            <Route path='blog' element={<Blog/>}/>
            <Route path='contact' element={<Contact/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App