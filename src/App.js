import './App.css';
import { Route, Routes } from 'react-router-dom'
import Main from './components/Main'
import Header from './components/Header/Header';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/header" element={<Header />} />
    </Routes>
  )
}

export default App;
