import "./sass/main.scss";
import { Navbar } from "./components/NavBar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import BankInfo from "./pages/BankInfo";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/bankinfo" element={<BankInfo />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
