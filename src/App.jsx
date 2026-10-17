import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar' /*fix navbar to Navbar*/
import Hero from './pages/Hero'
import Footer from './pages/Footer'
import Events from './pages/Events'
import About from './pages/About'
import Careers from './pages/Careers'
import Apply from './pages/Apply'
import Success from './pages/Success'

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
      <Navbar />
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