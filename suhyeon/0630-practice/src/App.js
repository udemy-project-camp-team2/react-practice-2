import './App.css';
import CountReducer from './components/countReducer';
import Counter from './components/counter';
import ThemeSwicher from './components/toggleReducer';
import ToggleTimer from './components/toggleTimer';

function App() {
  return (
    <div className="App">
      <h4>components cycle 이해</h4>
      <ToggleTimer/>
      <Counter />
      <CountReducer />
      <ThemeSwicher />
    </div>
  );
}

export default App;
