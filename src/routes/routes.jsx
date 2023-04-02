import App from "../App";
import React, { Suspense, lazy } from "react";
import TableView from "../pages/TableView";
import LoginForm from "../pages/user/login/Login";
import RegisterForm from "../pages/user/login/Register";
import WatermarkView from "../pages/Watermark";
const AppPost = lazy(() => import("../pages/Post"));

import { createBrowserRouter } from "react-router-dom";
import DashBoardFarmOverview from "../pages/dashboard/farm/main/Dashboard.Farm.Overview";
import SideBarFarm from "../layout/sideBar/SideBarFarm";
import LivestockLandingPage from "../pages/landing.page/Landing.Page";
import LivestockTable from "../pages/cattle/LivestockTable";
import LivestockOverview from "../pages/cattle/LivestockOverview";
import DashboardOverview from "../pages/dashboard/farm/main/Dashboard.Overview";

const RouterPath = createBrowserRouter([
  {
    path: "/",
    element: <LivestockLandingPage></LivestockLandingPage>,
    children: [
      {
        path: "form",
        element: <TableView />,
      },
      {
        path: "post",
        element: (
          <Suspense>
            {" "}
            <AppPost></AppPost>{" "}
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "login",
    element: <LoginForm></LoginForm>,
  },
  {
    path: "register",
    element: <RegisterForm></RegisterForm>,
  },
  {
    path: "demo",
    element: <WatermarkView></WatermarkView>,
  },
  {
    path: "farm",
    element: <SideBarFarm></SideBarFarm>,
    children: [
      {
        path: "overview",
        // element: <DashBoardFarmOverview></DashBoardFarmOverview>,
        element: <DashboardOverview></DashboardOverview>,
      },
      {
        path: "overview2",
        element: <DashBoardFarmOverview></DashBoardFarmOverview>,
      },
      {
        path: "cattle",
        children: [
          {
            path: "overview",
            element:<LivestockOverview></LivestockOverview>
          },
          {
            path: "list",
            element: <LivestockTable></LivestockTable>,
          },
        ],
      },
    ],
  },
]);

export default RouterPath;
