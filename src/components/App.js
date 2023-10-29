import "../CSS/App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Products, AddProduct } from "../pages";
import { useState, useEffect } from "react";

import Nevbar from "./nevbar";
import Loder from "./loder";

function App() {
  const [item, setItem] = useState("");
  const [loding, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100") // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setItem(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loding) {
    return <Loder />;
  }

  return (
    <div className="App">
      <Nevbar />
      <button>Sort-By</button>
      <Routes>
        <Route exact path="/" element={<Home item={item.products} />} />
        <Route exact path="/product" Component={Products} />
        <Route exact path="/addProduct" Component={AddProduct} />
      </Routes>
    </div>
  );
}

export default App;
