import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import SelectCity from './components/SelectCity';
import NavBar from './components/NavBar'
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from './components/HomePage'

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <HomePage />
      <div>
        <Routes>
        <Route path="/selectCity" element={<SelectCity />} />
        </Routes>
      </div>
    </BrowserRouter>
  </>
  );
}

export default App;
