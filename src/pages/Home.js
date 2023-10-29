import styles from "../CSS/home.module.css";

function Home(props) {
  const { item } = props;
  console.log(typeof item);

  return (
    <div className={styles.home}>
      {Array.isArray(item) ? (
        item.map((index) => (
          <div className={styles.allList} key={index.id}>
            <div className={styles.inner}>
              <p>{index.title}</p>
              <img src={index.images[0]} alt={item.brand} />
            </div>
          </div>
        ))
      ) : (
        <p>item is not an array</p>
      )}
    </div>
  );
}

export default Home;
