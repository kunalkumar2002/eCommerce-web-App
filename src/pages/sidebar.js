import styles from "../CSS/sidebar.module.css";
const Sidebar = (props) => {
  const { element, onDelete } = props;
  const handleDelete = () => {
    onDelete(element);
  };
  console.log(element);
  return (
    <div className={styles.container}>
      <div className={styles.in}>Update</div>
      <div className={styles.in} onClick={handleDelete}>
        Delete
      </div>
    </div>
  );
};

export default Sidebar;
