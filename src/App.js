/** @format */

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Result from "./pages/Result";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/result" element={<Result />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Welcome />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;

/**
 * 
 *       <Route path="/home" element={<Home/>} /> right way
        <Route path="/" element={Welcome} /> wrong way which belongs to react native
 */

/* 
        <nav>
        <ul
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <li>
            <Link to="/">welcome</Link>
          </li>
          <li>
            <Link to="/home">home</Link>
          </li>
          <li>
            <Link to="/result">result</Link>
          </li>
        </ul>
      </nav> */
