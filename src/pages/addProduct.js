import styles from "../CSS/Addproduct.module.css";
function AddProduct() {
  return (
    <div className={styles.container}>
      <form className={styles.holder}>
        <label>
          Title
          <input placeholder="Title" />
        </label>
        <label>
          Discription
          <textarea placeholder="Discription " />
        </label>
        <label>
          Price
          <input placeholder="Price" />
        </label>
        <label>
          rating
          <input placeholder="Rating" />
        </label>

        <label>
          Image
          <input placeholder="Image Url" />
        </label>

        <button className={styles.addProduct}>Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
