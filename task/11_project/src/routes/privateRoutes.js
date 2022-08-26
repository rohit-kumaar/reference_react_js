const { Navigate } = require("react-router-dom");
const { isLoggedIn, isAdmin } = require("services/service");
const { ROUTE_PATH } = require("./publicRoutes");

export const ProtectRoute = ({ children }) => {
  const auth = isLoggedIn();
  return auth ? children : <Navigate to={ROUTE_PATH.SignUp} />;
};

export const ProtectAdminRoute = ({ children }) => {
  const auth = isLoggedIn();
  const adminAuth = isAdmin();
  return auth && adminAuth ? children : <Navigate to={ROUTE_PATH.SignUp} />;
};
