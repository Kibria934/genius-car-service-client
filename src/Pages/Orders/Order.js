import { async } from "@firebase/util";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import axiosPrivate from "../api/axiocPrivate";

const Order = () => {
  const [user, loading, error] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    /*    ============================================
                         axios style fetch
        ============================================= */
    const getOrder = async () => {
      const email = user.email;
      const url = `http://localhost:5000/order?email=${email}`;
      try {
        const { data } = await axiosPrivate.get(url);
        setOrders(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getOrder(); //have to call it
  }, [user]);
  return (
    <div>
      <h1>
        your order {orders?.length}: {orders[0]?.service}
      </h1>
    </div>
  );
};

export default Order;
