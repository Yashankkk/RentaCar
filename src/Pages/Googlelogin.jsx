// import {useState} from "react";
import { useGoogleLogin } from "@react-oauth/google";
// import { googleAuth } from "./api";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const GoolgeLogin = () => {
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_PROD_BASE_URL;
  const responseGoogle = async (authResult) => {
    console.log("yeh tha code frontend sa", authResult);

    try {
      if (authResult.code) {
   await axios
.post(`${BASE_URL}/auth/google?code=${authResult.code}`)
          .then((res) => {
            console.log("yeh ha res from backend", res);
            const { email, name, image } = res.data.user;
            const token = res.data.token;
            const obj = { email, name, token, image };
            localStorage.setItem("user-info", JSON.stringify(obj));
            navigate("/sidebar");
          })
          .catch((err) => {
            console.log("yeh ha err", err);
          });
      } else {
        console.log(authResult);
        throw new Error(authResult);
      }
    } catch (e) {
      console.log("Error while Google Login...", e);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: "auth-code",
  });

  return (
    <div className="App">
      <button onClick={googleLogin}>Sign in with Google</button>
    </div>
  );
};

export default GoolgeLogin;
