import logo from './logo.svg';
import './App.css';
import Weather from './components/Weather';

function App() {
  return (
    <div className="App">
      <Weather query="London"/>
    </div>
  );
}

export default App;
