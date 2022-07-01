import './App.css';
import SelectCity from './components/SelectCity';
import NavBar from './components/NavBar'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
     <NavBar />
      <SelectCity />
      
    </div>
  );
}

export default App;
