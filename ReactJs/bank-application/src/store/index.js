import { createStore } from "redux";
import reducer from "../reducers";

const intitalState = {
  name: "Adam",
  balance: 8089,
  modal: {
    isShowModal: false,
    content: "modal content"
  }
};

export const store = createStore(reducer, intitalState);
