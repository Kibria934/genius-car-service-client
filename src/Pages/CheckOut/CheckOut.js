import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useServiceDetails from "../../hooks/useServiceDetails";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import axios from "axios";
import { toast } from "react-toastify";

const CheckOut = () => {
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();
  const navigate = useNavigate();
  const { serviceId } = useParams();
  const [service, setService] = useServiceDetails(serviceId);

  // -----------------function on submit--------------
  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      email: e.target.email.value,
      service: service.name,
      serviceId: serviceId,
      address: e.target.address.value,
      phone: e.target.phone.value,
    };
    // console.log(order);
    axios.post("http://localhost:5000/order", order).then((respons) => {
      const { data } = respons;
      console.log(data);
      if (data.insertedId) {
      toast("Your order booked!!!");
      e.target.reset()
      }
    });
  };
  return (
    <div className="w-50 mx-auto">
      <h1>Please Order:{service.name} </h1>
      <form onSubmit={handleSubmit}>
        <input
          className="w-100 mb-2"
          type="name"
          name="name"
          value={user?.displayName}
          readOnly
          placeholder="name"
          required
        ></input>
        <br></br>
        <input
          className="w-100 mb-2"
          type="email"
          name="email"
          value={user?.email}
          readOnly placeholder="Email"
          required
        ></input>
        <br></br>
        <input
          className="w-100 mb-2"
          type="name"
          name="service"
          value={service.name}
          readOnly
          placeholder="Service"
          required
        ></input>
        <br></br>
        <input
          className="w-100 mb-2"
          type="name"
          name="address"
          autoComplete="off"
          placeholder="Address"
          required
        ></input>
        <br></br>
        <input
          className="w-100 mb-2"
          type="number"
          name="phone"
          placeholder="Phone"
          required
        ></input>
        <br></br>
        <input
          className="w-100 mb-2 btn btn-primary"
          type="submit"
          value="Place Order"
        ></input>
        <br></br>
      </form>
    </div>
  );
};

export default CheckOut;
