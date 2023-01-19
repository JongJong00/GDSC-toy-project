import './App.css';
import Detail from './Components/Detail';
import { Routes, Route } from 'react-router-dom';
import Survey from './Components/Survey';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Detail />} />
        <Route path="/survey" element={<Survey />} />
      </Routes>
    </div>
  );
}

export default App;
