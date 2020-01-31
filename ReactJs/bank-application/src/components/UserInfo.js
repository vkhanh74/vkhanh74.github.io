import React from "react";
import "./UserInfo.css";

function formatCurrency(currency) {
  return currency.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

export default ({ info }) => {
  return (
    <div className="user-infomation">
      <img
        src="https://avatarfiles.alphacoders.com/129/thumb-129844.jpg"
        alt="avatar"
      />
      <h3>Hello, {info.name} !</h3>
      <div className="bank-balance-box">
        <h1>${formatCurrency(info.balance)}</h1>
        <h5>Total Amount </h5>
      </div>
    </div>
  );
};
