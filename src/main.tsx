// Import necessary dependencies and components
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Details from "./routes/details";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    element: <Root />,
  },
  {
    path: "/details/:userId",
    index: true,
    element: <Details />,
  },
]);

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <RouterProvider router={router} />
      <ReactQueryDevtools position="bottom-right" />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
