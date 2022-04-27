import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Pages/Share/Footer/Footer";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Share/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login/Login";
import ServiceDetail from "./ServiceDetail/ServiceDetail";
import NotFound from "./Pages/Share/NotFound/NotFound";
import Register from "./Login/Register/Register";
import RequirAuth from "./RequirAuth/RequirAuth";
import CheckOut from "./Pages/CheckOut/CheckOut";
import AddService from "./Pages/AddService/AddService";
import ManageServices from "./Pages/MangeServices/ManageServices";
import { ToastContainer } from "react-toastify";
import Order from "./Pages/Orders/Order";
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/service/:serviceId"
          element={<ServiceDetail></ServiceDetail>}
        ></Route>

        <Route
          path="/checkout/:serviceId"
          element={
            <RequirAuth>
              <CheckOut></CheckOut>
            </RequirAuth>
          }
        ></Route>
        <Route
          path="/addservice"
          element={
            <RequirAuth>
              <AddService></AddService>
            </RequirAuth>
          }
        ></Route>
        <Route
          path="/manage"
          element={
            <RequirAuth>
              <ManageServices></ManageServices>
            </RequirAuth>
          }
        ></Route>
        <Route
          path="/orders"
          element={
            <RequirAuth>
              <Order></Order>
            </RequirAuth>
          }
        ></Route>
        <Route
          path="/manage"
          element={
            <RequirAuth>
              <ManageServices></ManageServices>
            </RequirAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
