// import logo from './logo.svg'; 
import './App.css';
import ActionAreaCard from './ActionAreaCard';
import ButtonUsage from './Button';
import {Arrow} from './Arrow';
import DataUsage from './dataUsage';
import Cup from './cup';
import Pure from './pure';
import Debounce from './debouncing';
// import SearchInput from './debouncing';

function App() {
  return (
    <div className="App">
      <h1>My fist React Project</h1>
      {/* <h1>guest re-render two times because it wrap under strictmode #{guest}</h1> */}
      <ButtonUsage />
      <ActionAreaCard />
      <Arrow />
      <DataUsage />
      <Cup />
      <Pure double={2} />
      <Debounce />
      {/* <SearchInput /> */}
    </div>
  );
}

export default App;
