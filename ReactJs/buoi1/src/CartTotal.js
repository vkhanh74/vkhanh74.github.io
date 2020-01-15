import React from "react";

function CartTotal({ subtotal, discountInputRef, codeValue }) {
  function formatCurency(num) {
    return num.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
  }

  let tax = subtotal * 0.1;
  let total = subtotal + tax;
  let discont = subtotal * codeValue;
  let discountRender = "";
  console.log(formatCurency(total.toFixed(2)));
  if (codeValue) {
    discountRender = [
      <li className="discount">
        Discount
        <span>- ${formatCurency(discont.toFixed(2))}</span>
      </li>,
      <li className="total">
        Total
        <span>${formatCurency((total - discont).toFixed(2))}</span>
      </li>
    ];
  } else {
    discountRender = (
      <li className="total">
        Total
        <span>${formatCurency(total.toFixed(2))}</span>
      </li>
    );
  }
  return (
    <>
      <div className="summary">
        <ul>
          <li>
            Subtotal
            <span>${formatCurency(subtotal.toFixed(2))}</span>
          </li>
          <li>
            Tax
            <span>${formatCurency(tax.toFixed(2))}</span>
          </li>
          {discountRender}
        </ul>
      </div>
      <div className="checkout">
        <button type="button">Check Out</button>
      </div>
    </>
  );
}

export default CartTotal;
