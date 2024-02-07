import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About, Contact, HomeLayout, Landing, Projects } from "./pages";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <main className="h-screen bg-slate-300/20">
      <RouterProvider router={router} />;
      <ToastContainer />
    </main>
  );
}

export default App;
