import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return <button className=" text-white font-semibold" onClick={() => loginWithRedirect()}>Iniciar sesion</button>;
};

export default LoginButton;