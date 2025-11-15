import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login'; 
import Footer from './components/Footer'

function App() {

  return (
     <Router>
      <Header />
      <Routes>
        <Route path="/administracion" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App