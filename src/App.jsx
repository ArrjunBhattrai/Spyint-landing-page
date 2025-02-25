import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header';

import LandingPage from './pages/LandingPage';

function App() {

  return (
    <Router>
      <Header/>
      <LandingPage/>
    </Router>
    
  )
}

export default App
