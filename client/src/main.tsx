import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

import LoginPage from "./pages/LoginPage";
import _404Page from "./pages/_404Page";
import AuthPage from "./pages/AuthPage";
import GNB from "./layouts/GNB";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <GNB />
      </>
    ),
    children: [
      {
        index: true,
        element: <div>홈</div>,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "auth",
        element: <AuthPage />,
      },
    ],
    errorElement: <_404Page />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CookiesProvider>
      <RouterProvider router={router} />
    </CookiesProvider>
  </React.StrictMode>
);
