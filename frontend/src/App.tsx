import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> }/>
      <Route path="/create" element={ <p>teste</p> } />
    </Routes>
  )
}

export default App;
