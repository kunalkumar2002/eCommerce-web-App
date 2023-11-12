import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductsFromDB,
  productSelector,
} from "../redux/reducers/productsReducer";
import { Products } from "../components/ProductComp.js";
import { authSelector } from "../redux/reducers/authReducer.js";

export const Home = () => {
  const dispatch = useDispatch();
  let { products, isLoading } = useSelector(productSelector);
  const { isLoggedIn } = useSelector(authSelector);
  const [enable, setEnable] = useState(false);
  const [item, setItem] = useState([]);
  useEffect(() => {
    dispatch(getProductsFromDB());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch();
  // }, []);

  const handleSort = (e) => {
    e.preventDefault();
    // console.log(products);
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => a.price - b.price);
    // products = [...sortedProducts];
    products = sortedProducts;
    setItem(products);
    setEnable(!enable);
    //console.log(item);
    console.log(products);
  };
  const handleUnsort = (e) => {
    e.preventDefault();
    setEnable(!enable);
  };

  return isLoading ? (
    <h2>Loading Products... </h2>
  ) : (
    <div>
      {!enable && (
        <button style={styles.sort} onClick={handleSort}>
          sort By
        </button>
      )}
      {enable && (
        <button style={styles.sort} onClick={handleUnsort}>
          <span>Close</span>
        </button>
      )}
      <div className="homePage" style={styles.homePage}>
        {!isLoggedIn ? <h3>Login to Add products into your cart</h3> : <></>}
        <div style={styles.homePageProductPart}>
          {item.length !== 0 &&
            item.map((currProd, index) => {
              return <Products currProd={currProd} key={index} />;
            })}
          {item.length === 0 &&
            products.map((currProd, index) => {
              return <Products currProd={currProd} key={index} />;
            })}
        </div>
      </div>
    </div>
  );
};
const styles = {
  sort: {
    marginLeft: 20,
    marginTop: 20,
    backgroundColor: "green",
    border: "2px solid black",
    borderRadius: 5,
    color: "white",
    fontWeight: "bold",
  },
  homePage: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: "20px",
    marginBottom: "20px",
  },
  homePageProductPart: {
    display: "flex",

    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "contain",
  },
};
