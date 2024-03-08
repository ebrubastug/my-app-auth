import React from "react";
import Cookies from "universal-cookie";
import { verifyJwtToken } from "@/libs/auth";

const fromServer = async () => {
  const cookies = require("next/headers").cookies;
  const cookieList = cookies();
  const { value: token } = cookieList.get("token") ?? { value: null };
  const verifiedToken = await verifyJwtToken(token);

  return verifiedToken;
};

// TODO: this `useAuth` creates a vulnerability issue because it needs to have
// Alternatively we can have an API route to to verification on the server layer.
export function useAuth() {
  const [auth, setAuth] = React.useState(null);

  const getVerifiedtoken = async () => {
    const cookies = new Cookies();
    const token = cookies.get("token") ?? null;
    const verifiedToken = await verifyJwtToken(token);
    setAuth(verifiedToken);
  };

  React.useEffect(() => {
    getVerifiedtoken();
  }, []);

  return auth;
}

useAuth.fromServer = fromServer;
