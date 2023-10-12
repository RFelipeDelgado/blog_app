import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import Header from './components/Header/Header';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blog' element={<Blog/>} />
            <Route path='/about' element={<About/>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App;