import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className=" text-white font-semibold" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Cerrar sesion
    </button>
  );
};

export default LogoutButton;