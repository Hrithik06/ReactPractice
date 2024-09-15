import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AccordionContainer from "./Accordion/AccordionContainer";
import Counter from "./Counter/Counter";
import GuessTheNumber from "./GuessTheNumber/GuessTheNumber";
import ImageGallery from "./Image Gallery/ImageGallery";
import StarRating from "./StarRating/StarRating";
import Home from "./components/Home.jsx";

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/counter", element: <Counter /> },
      { path: "/image-gallery", element: <ImageGallery /> },
      { path: "/accordion-container", element: <AccordionContainer /> },
      { path: "/guess-number", element: <GuessTheNumber /> },
      { path: "/star-rating", element: <StarRating /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRoute}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
