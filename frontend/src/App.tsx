import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import CreateNewDeck from "./pages/CreateNewDeck";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route element={ <Layout /> }>
        <Route path="/" element={ <Home /> }/>
        <Route path="/create" element={ <CreateNewDeck /> } />
      </Route>
    </Routes>
  )
}

export default App;
