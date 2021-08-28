import React from "react";
import styles from "./product.module.css";
function Products({ title, price ,onIncreament,onDecreament,ChangeInput,quantity,onDelete}) {
  return (
    <div className={styles.parent}>
      <h5>{title}</h5>
      <h5>{price}</h5>
      <input  onChange={ChangeInput} type="text" value={title}/>
      <span className={styles.value}>{quantity}</span>
      <div>
        <button onClick={onDecreament} className={`${styles.btn} ${styles.oneColor}`}> -</button>
        <button onClick={onIncreament}  className={styles.btn}>+</button>
        <button onClick={onDelete} className={styles.btnRemove}> delete</button>
      </div>
    </div>
  );
}

export default Products;
