import React from "react";
import "./WithdrawBtn.css";
import { setWithdrawMoney, setNotifyModal } from "../actions";
import { store } from "../store";

export default ({ withdraw }) => {
  return (
    <button className="withdraw-btn" onClick={() => withdrawMoney(withdraw)}>
      Withdraw ${withdraw}
    </button>
  );
};

function withdrawMoney(withdraw) {
  let balace = store.getState().balance;
  if (balace < withdraw) {
    store.dispatch(setNotifyModal(true));
    setTimeout(() => store.dispatch(setNotifyModal(false)), 3000);
    return;
  }
  store.dispatch(setWithdrawMoney(withdraw));
}
