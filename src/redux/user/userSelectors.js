export const selectUserName = (state) => {
  return state.user.name;
};

export const selectUserEmail = (state) => {
  return state.user.email;
};

export const selectUserPhone = (state) => {
  return state.user.phone;
};

export const selectUserAdress = (state) => {
  return state.user.adress;
};

export const selectUserError = (state) => {
  return state.user.error;
};
