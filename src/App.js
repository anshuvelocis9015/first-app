// import logo from './logo.svg'; 
import './App.css';
import ActionAreaCard from './ActionAreaCard';
import ButtonUsage from './Button';
import {Arrow} from './Arrow';
import DataUsage from './dataUsage';

function App() {
  return (
    <div className="App">
      <h1>My fist React Project</h1>
      <ButtonUsage />
      <ActionAreaCard />
      <Arrow />
      <DataUsage />
    </div>
  );
}

export default App;
