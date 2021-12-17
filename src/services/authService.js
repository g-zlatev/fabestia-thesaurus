export const login = (username) => {
  localStorage.setItem("username", username);
};

export const getUser = () => {
  let username = localStorage.getItem("username");
  return username;
};

const isAuthenticated = () => {
    return Boolean(getUser());
}
