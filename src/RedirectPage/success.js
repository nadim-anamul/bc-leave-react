import React from "react";
import { useParams, Navigate } from "react-router-dom";

const Success = () => {
  const { token }: any = useParams();
  console.log(token);

  localStorage.setItem("__token__", token);

  fetch("http://localhost:5000/emp", {
    method: "POST",
    headers: {
      "authorization" : `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
  .then(res => res.json())
  .then(data => {
    localStorage.setItem('__user__', JSON.stringify(data.data));;
  });

  return <Navigate to="/home"></Navigate>;
};

export default Success;
