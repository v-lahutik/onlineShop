import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Products from "./components/Products";
import AppLayout from "./components/AppLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "products",
          element: <Products />,
          loader: async () => {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            return data;
          },
        },
        {
          path: "shop",
          element: (
            <>
              <h1>Shop Component</h1>
            </>
          ),
        },
        {
          path: "contact",
          element: (
            <>
              <h1>Contact Page</h1>
            </>
          ),
        },
        {
          path: "about",
          element: (
            <>
              <h1>About Page</h1>
            </>
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
