import React from "react";
import AddToCart from "./AddToCart";
import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.cardContainer}>
      {/* <button onClick={() => console.log("CLick")}>Add to Cart</button> */}
      <AddToCart />
    </div>
  );
};

export default ProductCard;
