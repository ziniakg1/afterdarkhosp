import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Events from './components/Events'
import About from './components/About'
import Careers from './components/Careers'
import Apply from './components/Apply'
import Success from './components/Success'

function Home() {
  return(
    <>
      <Hero />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/About" element={<About />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/Apply/:id" element={<Apply />} />
        <Route path="/Success" element={<Success />} />
        <Route path="*" element={<div className="min-h-screen flex items-center justify-center text-2xl font-bold">404 - Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;