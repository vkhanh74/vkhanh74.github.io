export const setWithdrawMoney = money => ({
  type: "WITHDRAW_MONEY",
  money
});

export const setNotifyModal = isShow => ({
  type: "TOOGLE_MODAL",
  isShow
});
