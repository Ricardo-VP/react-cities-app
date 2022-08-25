import React from "react";
import { Route } from "react-router-dom";

const PrivateRoute = ({ component, ...args }) => {
  <Route element={withAuthenticationRequired(component)} {...args} />;
};

export default PrivateRoute;
