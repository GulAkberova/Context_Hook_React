import './App.css';
import Interval from './components/Interval';
import WindowSize from './components/WindowSize';

function App() {

  return (
    <>
      <h1>Open Console</h1>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <Interval />
        </div>
        <div style={{ width: "50%" }} >
          <WindowSize />
        </div>
      </div>
    </>
  );
}

export default App;
