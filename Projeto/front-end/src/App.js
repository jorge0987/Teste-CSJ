import './App.css';
import { BrowserRouter } from "react-router-dom";
import RoutesList from "../src/services/routes";
import "./App.css";
import Header from './components/header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RoutesList />
    </BrowserRouter>
  );
}

export default App;
