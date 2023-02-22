import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Article from "./components/Article";
import Articles from "./components/Articles";
import { Provider } from "react-redux";
import store from "./app/store";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Root from "./routes/root";
import { CommentPost } from "./components/CommentPost";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "article/:articleId",
        element: <Article />,
      },
      {
        path: "topic/:topic",
        element: <Articles />,
      },
      {
        path: "/",
        element: <Articles />,
      },

    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  </ChakraProvider>
);
