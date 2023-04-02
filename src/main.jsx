import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  RouterProvider,

} from "react-router-dom";
import RouterPath from "./routes/routes";
import TableView from "./pages/TableView";
import { Skeleton, Watermark } from "antd";
import LoginForm from "./pages/user/login/Login";
import RegisterForm from "./pages/user/login/Register";
import WatermarkView from "./pages/Watermark";
// import AppPost from './pages/Post';
// import './index.css'

const AppPost = lazy(() => import("./pages/Post"));
async function fetchProject(id) {
  // const token = await getUserToken();
  const response = await fetch(`/projects/${id}`, {
    // headers: { Authorization: `Bearer ${token}` },
  });

  if (response.status === 404) {
    throw new Response("Not Found", { status: 404 });
  }

  // the fetch failed
  if (!response.ok) {
    throw new Error("Could not fetch project");
  }
}

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Suspense fallback = {<Skeleton></Skeleton>}>
//     <Route path="/" element={<App />}>
      
//       <Route
//         path="post"
//         Component={AppPost}
//       />
//       {/* ... etc. */}
//     </Route>
//     </Suspense>
//   )
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={RouterPath} />
  </React.StrictMode>
);
