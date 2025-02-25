import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from '@/components/Header';

import LandingPage from '@/pages/LandingPage';

function App() {

  return (
    <Router>
      <Header/>
      <LandingPage/>
    </Router>
    
  )
}

export default App
