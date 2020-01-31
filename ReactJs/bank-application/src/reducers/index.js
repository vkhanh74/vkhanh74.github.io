export default (state, action) => {
  switch (action.type) {
    case "WITHDRAW_MONEY":
      return (state = {
        ...state,
        balance: state.balance - action.money
      });
    case "TOOGLE_MODAL":
      return (state = {
        ...state,
        modal: {
          isShowModal: action.isShow
        }
      });
    default:
      return state;
  }
};
