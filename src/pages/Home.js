import styles from "../CSS/home.module.css";
import Ratings from "../components/rating";
import { useState } from "react";

function Home(props) {
  const { item, setItem } = props;
  const [isSorting, setSorting] = useState(false);
  // console.log(typeof item);

  const handleSort = (e) => {
    e.preventDefault();
    //console.log("sort");
    setSorting(!isSorting);
    const sortedItems = [...item]; // Create a copy of the original array
    sortedItems.sort((a, b) => a.price - b.price);
    setItem(sortedItems);
    console.log("Sorted:", sortedItems);
  };

  const handleClose = () => {
    setSorting(!isSorting);
    const sortedItems = [...item];
    sortedItems?.sort((a, b) => a.id - b.id);
    setItem(sortedItems);
  };

  return (
    <div className={styles.container}>
      {!isSorting && (
        <button className="btn btn-danger mx-2" onClick={handleSort}>
          Sort by Price
        </button>
      )}
      {isSorting && (
        <button
          className="btn btn-dark d-flex align-items-center mx-2"
          onClick={handleClose}
        >
          <span>Close</span>
        </button>
      )}
      <div className={styles.home}>
        {Array.isArray(item) ? (
          item.map((index) => (
            <div className={styles.allList} key={index.id}>
              <div className={styles.inner}>
                <p>{index.title}</p>
                <img src={index.images[0]} alt={item.brand} />
                <p>Rs {index.price} </p>
                <div>
                  <Ratings rating={index.rating} />
                </div>
                <div className={styles.discripttion}>{index.description} </div>
                <button className={styles.addTocart}>Add to Cart</button>
              </div>
            </div>
          ))
        ) : (
          <p>item is not an array</p>
        )}
      </div>
    </div>
  );
}

export default Home;
