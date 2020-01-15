import React from "react";

function CartPromo({
  discountInput,
  isDiscounted,
  checkDiscount,
  discountInputRef
}) {
  let notify;
  if (isDiscounted) {
    notify = <p>Mã giảm giá đã được áp dụng</p>;
  } else {
    if (discountInput && discountInput !== "") {
      notify = <p>Rất tiếc mã giảm giá này không hợp lệ</p>;
    }
  }
  return (
    <div>
      <form className="promotion" onSubmit={e => checkDiscount(e)}>
        <label htmlFor="promo-code">Have A Promo Code?</label>
        <input type="text" id="promo-code" ref={discountInputRef} />
        <button type="submit" />
      </form>
      {notify}
    </div>
  );
}

export default CartPromo;
