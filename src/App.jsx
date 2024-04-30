import Home from "./pages/home/Home";
import Navbar from "./pages/shared/Navbar";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="max-w-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
