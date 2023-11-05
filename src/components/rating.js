import styles from "../CSS/rating.module.css";
import Rating from "@mui/material/Rating";
import { useState } from "react";
const Ratings = (props) => {
  const { rating } = props;
  const [value, setValue] = useState(rating);
  return (
    <div className={styles.rating}>
      <Rating
        name="simple-controlled"
        value={value}
        precision={0.5}
        readOnly
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </div>
  );
};
export default Ratings;
