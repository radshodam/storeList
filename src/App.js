import React from "react";
import ProductList from "./components/productList/productList";
import styles from "./app.module.css";
function App() {
  return (
    <div>dcdc
      <nav>
        <h3>shopping carts</h3>
        <div className={styles.carts}>
          <span>carts</span>
          <span className={styles.number}>52</span>
        </div>
      </nav>
      <ProductList />
    </div>
  );
}

export default App;
