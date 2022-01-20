import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { apiClient } from "../api";

const Success = () => {
  const { token }: any = useParams();
  const navigate = useNavigate();
  localStorage.setItem("__token__", token);

  apiClient.post('/emp', {}, {
    headers: {
      "authorization" : `Bearer ${token}`,
    }
  }).then((res) => {
    localStorage.setItem('__user__', JSON.stringify(res.data.data));
    navigate('/dashboard');
  }).catch(err => err);

  return <></>;
};

export default Success;
