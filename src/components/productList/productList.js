/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import Products from "../products/Products";
import { productsData } from "../data";
//import data

function productList() {
  // use state for hook
  const [product, setProduct] = useState(productsData);
  // const [input, setInput] = useState();
 // function handleDelete get id
 const onDelete = (id) => {
  // use clone product. COPY products on [] for use methods array
  const productsClone = [...product];
  // use method find for Array
  // Array.find((p)=>p.id===id)  was equal
  const filterProducts = productsClone.filter((p) => p.id !== id);
  setProduct(filterProducts);
};
  // function increament (ID)
  const increamentHandler = (id) => {
    // 1.id=>ok
    // 2.find selected item
    // 3. add one to item quantity
    // 4.setStat

    // use clone product. COPY products on [] for use methods array
    const productsClone = [...product];
    // use method find for Array
    // Array.find((p)=>p.id===id)  was equal
    const selectItem = productsClone.find((p) => p.id === id);
    // selectItem.quantity++; or
    selectItem.quantity = selectItem.quantity + 1;
    // setState
    setProduct(productsClone);
  };

  // function decreament by get (ID)
  const decreamentHandler = (id) => {
    // use clone product. COPY products on [] for use methods array
    const productsClone = [...product];
    // use method find for Array
    // Array.find((p)=>p.id===id)  was equal
    const selectItem = productsClone.find((p) => p.id === id);
    // condition on quantity
    if (selectItem.quantity === 1) {
      const filterProducts = productsClone.filter((g) => g.id !== id);
      // setState Filter
      setProduct(filterProducts);
    } else {
      // selectItem.quantity++; or
      selectItem.quantity = selectItem.quantity - 1;
      // console.log(productsClone);
      // setState
      setProduct(productsClone);
    }
  };

  // function handleChange get event &id
  const handleChangeInput = (e, id) => {
    // use clone product. COPY products on [] for use methods array
    const productsClone = [...product];
    // use method find for Array
    // Array.find((p)=>p.id===id)  was equal
    const selectItem = productsClone.find((p) => p.id === id);
    selectItem.title = e.target.value;
    setProduct(productsClone);
  };

 

  return (
    <div>
      {product.map((n) => {
        return (
          <Products
            key={n.id}
            title={n.title}
            price={n.price}
            quantity={n.quantity}
            onIncreament={() => increamentHandler(n.id)}
            onDecreament={() => decreamentHandler(n.id)}
            onDelete={() => onDelete(n.id)}
            ChangeInput={(e) => handleChangeInput(e, n.id)}
          />
        );
      })}
    </div>
  );
}

export default productList;
