import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/molecules/Navbar";
import IndividualEvent from "./pages/IndividualEvent";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/countdown/:event_name"
            element={<IndividualEvent />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
