import { GoogleAuthJWTDecoded, GoogleAuthRes } from "../models/authentication.interface";
import jwt_decode from "jwt-decode";

export function adaptAuthentication(authRes: GoogleAuthRes) {
  const decodedJWT: GoogleAuthJWTDecoded = jwt_decode(authRes.credential);

  return {
    jwt: authRes.credential,
    email: decodedJWT.email,
    name: decodedJWT.name,
    picture: decodedJWT.picture,
  };
}
