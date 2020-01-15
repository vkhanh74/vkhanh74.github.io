import React from "react";

function CartItem(props) {
  let {
    updateQuantity,
    removeProduct,
    item,
    id,
    name,
    describe,
    price,
    quantity,
    image
  } = props;
  return (
    <>
      <div className="col left">
        <div className="thumbnail">
          <a href="https://www.google.com.vn/">
            <img src={image} alt="test" />
          </a>
        </div>
        <div className="detail">
          <div className="name">
            <a href="https://www.google.com.vn/">{name}</a>
          </div>
          <div className="description">{describe}</div>
          <div className="price">${price}</div>
        </div>
      </div>
      <div className="col right">
        <div className="quantity">
          <input
            type="number"
            className="quantity"
            step={1}
            value={quantity}
            onChange={e => updateQuantity(item, e)}
          />
        </div>
        <div className="remove">
          <svg
            version="1.1"
            className="close"
            xmlns="//www.w3.org/2000/svg"
            xmlnsXlink="//www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 60 60"
            enableBackground="new 0 0 60 60"
            xmlSpace="preserve"
            onClick={() => removeProduct(item)}
          >
            <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
          </svg>
        </div>
      </div>
    </>
  );
}

export default CartItem;
