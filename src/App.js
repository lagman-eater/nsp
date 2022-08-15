import './App.css';
import { Route, Routes } from 'react-router-dom'
import Main from './components/Main'
import Services from './components/Services/Services';
import VPS from './components/VPS/VPS'
import Projects from './components/Projects/Projects';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/services" element={<Services />} />
      <Route path="/vps" element={<VPS />} />
      <Route path="/projects" element={<Projects />}/>
    </Routes>
  )
}

export default App;
