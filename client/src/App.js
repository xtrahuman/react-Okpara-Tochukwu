import Navbar from "./component/Navbar";
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <h1>App</h1>
     <Navbar />
     <Routes>
      <Route path="/" element={<p>great</p>} exact/>
      <Route path="/clothes" element={<p>great1</p>} exact/>
      <Route path="/tech" element={<p>great2</p>} exact/>
     </Routes>
    </div>
  );
}

export default App;
