import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./screens/Home";
import Cart from "./screens/Cart";
import PageNotFound from "./screens/PageNotFound";

const appRoutes = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "mylist",
    component: <Cart />,
  },
];

const AppNavigator = () => {
  return (
    <Routes>
      {appRoutes.map((item, key) => (
        <Route key={key} exact path={item.path} element={item.component} />
      ))}
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppNavigator;
