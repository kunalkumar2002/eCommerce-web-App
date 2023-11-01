import "../CSS/App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Products, AddProduct } from "../pages";
import { useState, useEffect } from "react";
import { API_ROOT } from "../utils/api";
import axios, { all } from "axios";

import Nevbar from "./nevbar";
import Loder from "./loder";

function App() {
  const [item, setItem] = useState([]);
  const [loding, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(API_ROOT);
      //console.log(data.products);
      setItem(data.products);
      setLoading(false);
    } catch (error) {
      console.log(`error in getting products `, error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loding) {
    return <Loder />;
  }

  return (
    <div className="App">
      <Nevbar />

      <Routes>
        <Route exact path="/" element={<Home item={item} />} />
        <Route exact path="/product" Component={Products} />
        <Route exact path="/addProduct" Component={AddProduct} />
      </Routes>
    </div>
  );
}

export default App;
