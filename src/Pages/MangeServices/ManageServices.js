import React from "react";
import UseServices from "../../hooks/UseServices";

const ManageServices = () => {
  const [service] = UseServices();
  console.log(service);
  const handleDelete = (id) => {
    const procced = window.confirm("Are you sure ?");
    if (procced) {
      console.log(id);
    }
  };
  return (
    <div className="w-50 mx-auto">
      <h1 className="mt-4">Manage Your sevices:</h1>
      {service.map((s) => (
        <div key={s._id} className="mt-4 d-flex card">
          <h3 className="d-flex justify-content-between">
            {s.name}{" "}
            <span>
              <button onClick={() => handleDelete(s._id)}>Delete</button>
            </span>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
