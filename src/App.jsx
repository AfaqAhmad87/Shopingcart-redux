import "./index.css";
import Products from "./pages/Products";
import Items from "./pages/Items";
import Nav from "./pages/Nav";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <br />
        <br />
        <br />
        <br />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/items" element={<Items />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
