import React from "react";
import "./styles.css";

//Redux
import { store } from "./store";
import { setWithdrawMoney } from "./actions";

//Components
import UserInfo from "./components/UserInfo";
import WithdrawBtn from "./components/WithdrawBtn";
import Alert from "./components/Alert";

function withdrawAllMoney() {
  store.dispatch(setWithdrawMoney(store.getState().balance));
}

export default function App() {
  return (
    <div className="App">
      {store.getState().modal.isShowModal ? (
        <Alert>"Your balance is not enough to do this action"</Alert>
      ) : null}
      <div className="bank-header">
        <div className="container">
          <UserInfo info={store.getState()} />
        </div>
      </div>
      <div className="bank-footer">
        <div className="container">
          <WithdrawBtn withdraw="5000" />
          <WithdrawBtn withdraw="10000" />
          <button className="withdraw-all-btn" onClick={withdrawAllMoney}>
            Give away all your cash to charity
          </button>
        </div>
      </div>
    </div>
  );
}
