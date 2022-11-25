import jwt_decode from "jwt-decode";
import { GoogleAuthJWTDecoded, GoogleAuthRes, UserInfo } from "./../models/user.interface";

export function adaptUser(authRes: GoogleAuthRes): UserInfo {
  const decodedJWT: GoogleAuthJWTDecoded = jwt_decode(authRes.credential);

  return {
    jwt: authRes.credential,
    email: decodedJWT.email,
    name: decodedJWT.name,
    picture: decodedJWT.picture,
  };
}
