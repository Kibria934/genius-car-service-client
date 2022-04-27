import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("http://localhost:5000/service", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  return (
    <div className="w-50 mx-auto m-4">
      <h2 className="text-center m-4">Add your Service</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="m-2 p-3 border-1  rounded-3"
          placeholder="Name"
          {...register("name", { required: true, maxLength: 50 })}
        />
        <textarea
          className="m-2 p-3 border-1  rounded-3"
          placeholder="Description"
          {...register("description")}
        />
        <input
          className="m-2 p-3 border-1  rounded-3"
          type="number"
          placeholder="Price"
          {...register("price")}
        />
        <input
          className="m-2 p-3 border-1  rounded-3"
          type="text"
          placeholder="photoUrl"
          {...register("img")}
        />
        <input className="m-2 p-3 border-1  rounded-3" type="submit" />
      </form>
    </div>
  );
};

export default AddService;
