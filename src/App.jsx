import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./ErrorPage";
import Aboutus from "./pages/Aboutus";
import Shop from "./pages/Shop";
import Community from "./pages/Community";
import Login from "./components/auth/Login";
import Layout from "./utils/Layout";
import "./App.css";


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route  element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="aboutus" element={<Aboutus />} />
          <Route path="shop" element={<Shop />} />
          <Route path="community" element={<Community />} />
          <Route path="login" element={<Login />} />

         

        </Route>
        <Route path="*" element={<ErrorPage />} />
      </>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
