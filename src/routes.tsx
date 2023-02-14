import React from "react";
import { BrowserRouter } from "react-router-dom";

import HomeRoutes from "Pages/Home/routes";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <HomeRoutes />
    </BrowserRouter>
  );
};

export default Routes;
