import logo from './logo.svg';
import './App.css';
import Client from './Components/Client'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Client />
      </BrowserRouter>
    </div>
  );
}

export default App;
