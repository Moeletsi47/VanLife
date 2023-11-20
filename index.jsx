import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/about" element={<About />}/>
     </Routes>
    </BrowserRouter>
  )
}

function Home(){
  return(
    <>
    <nav>
      <Link to="/"><h2>#VANLIFE</h2></Link>
      <Link to="/about"><p>About</p></Link>
    </nav>
    <p>Home Page</p>
    </>
  )
}

function About(){
  return(
    <>
    <nav>
      <Link to="/"><h2>#VANLIFE</h2></Link>
      <Link to="/about"><p>About</p></Link>
    </nav>
    <p>About Page</p>
    </>
  )
}
ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);