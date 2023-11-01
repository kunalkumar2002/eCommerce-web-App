import styles from "../CSS/home.module.css";

function Home(props) {
  const { item } = props;
  // console.log(typeof item);

  const handleSort = (e) => {
    e.preventDefault();
    //console.log("sort");
    const sorted = item.sort((a, b) => a.price - b.price);
    //  toast.success(`Applied Low to High`);
    console.log("sort");
  };

  return (
    <div className={styles.container}>
      <button onClick={handleSort}>Sort-By</button>
      <div className={styles.home}>
        {Array.isArray(item) ? (
          item.map((index) => (
            <div className={styles.allList} key={index.id}>
              <div className={styles.inner}>
                <p>{index.title}</p>
                <img src={index.images[0]} alt={item.brand} />
                <p>Rs {index.price} </p>
                <div className={styles.discripttion}>{index.description} </div>
                <button>Add to Cart</button>
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
