import React from "react";
import CartItem from "./CartItem";

function CartBody(props) {
  let { items, removeProduct, updateQuantity } = props;
  return (
    <section className="container">
      <ul className="products">
        {items.map(item => (
          <li className="row" key={item.id}>
            <CartItem
              removeProduct={removeProduct}
              updateQuantity={updateQuantity}
              item={item}
              id={item.id}
              name={item.name}
              describe={item.describe}
              price={item.price}
              quantity={item.quantity}
              image={item.image}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CartBody;
