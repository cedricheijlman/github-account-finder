import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
      </Routes>
    </div>
  );
}

export default App;
