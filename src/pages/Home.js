import styles from "../CSS/home.module.css";
import Ratings from "../components/rating";
import { useState } from "react";
import sideImg from "../image/more.png";
import Sidebar from "./sidebar";

function Home(props) {
  const { item, setItem } = props;
  const [isSorting, setSorting] = useState(false);
  const [open, setOpen] = useState(false);
  const [openItemId, setOpenItemId] = useState(null);
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

  const handleUnsort = () => {
    setSorting(!isSorting);
    const sortedItems = [...item];
    sortedItems?.sort((a, b) => a.id - b.id);
    setItem(sortedItems);
  };

  const handleOpen = (itemId) => {
    setOpen(!open);
    setOpenItemId(itemId);
  };

  const handleDeleteItom = (itemToDelete) => {
    const updatedItems = item.filter((i) => i.id !== itemToDelete.id);
    setItem(updatedItems);
  };

  return (
    <div className={styles.container}>
      {!isSorting && (
        <button className={styles.sort} onClick={handleSort}>
          Sort by Price
        </button>
      )}
      {isSorting && (
        <button className={styles.sort} onClick={handleUnsort}>
          <span>Close</span>
        </button>
      )}
      <div className={styles.home}>
        {Array.isArray(item) ? (
          item.map((index) => (
            <div className={styles.allList} key={index.id}>
              <div className={styles.inner}>
                <div className={styles.uper}>
                  <p>{index.title}</p>
                  {open && openItemId === index.id && (
                    <Sidebar element={index} onDelete={handleDeleteItom} />
                  )}

                  <img
                    onClick={() => handleOpen(index.id)}
                    src={sideImg}
                    alt="sidebar"
                  />
                </div>

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
