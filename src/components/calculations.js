export const openingBalanceTotal = (data) => {
  const {
    commonwealthBalance,
    careRecipientBalance,
    pre2015Balance,
    hcaBalance,
  } = data;
  debugger;
  return (
    (commonwealthBalance || 0)
    + (careRecipientBalance || 0)
    + (pre2015Balance || 0)
    + (hcaBalance || 0)
  );
};

export const adam = 0;
