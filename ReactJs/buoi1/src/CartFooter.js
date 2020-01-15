import React from "react";

import CartPromo from "./CartPromo";
import CartTotal from "./CartTotal";

function CartFooter({
  discountInput,
  isDiscounted,
  checkDiscount,
  subtotal,
  discountInputRef,
  codeValue
}) {
  return (
    <section className="container">
      <CartPromo
        discountInput={discountInput}
        isDiscounted={isDiscounted}
        checkDiscount={checkDiscount}
        discountInputRef={discountInputRef}
      />
      <CartTotal subtotal={subtotal} codeValue={codeValue} />
    </section>
  );
}

export default CartFooter;
