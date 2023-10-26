import "../CSS/App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Products, AddProduct } from "../pages";

import Nevbar from "./nevbar";

function App() {
  return (
    <div className="App">
      <Nevbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/product" Component={Products} />
        <Route exact path="/addProduct" Component={AddProduct} />
      </Routes>
    </div>
  );
}

export default App;
