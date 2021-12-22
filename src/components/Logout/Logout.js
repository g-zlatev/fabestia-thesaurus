import { Navigate } from "react-router-dom";
import * as authService from "../../services/authService";

const Logout = ({ onLogout }) => {
  authService
    .logout()
    .then(() => {
      console.log("logged out");
    })
    .catch((error) => {
      window.alert(error);
    });
  // onLogout();

  return <Navigate to={"/login"} replace={true} />;
};

export default Logout;
