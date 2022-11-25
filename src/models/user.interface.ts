//? ------------------------ API MODELS -------------------------------------------------

export interface GoogleAuthRes {
  clientId: string;
  client_id: string;
  credential: string; //JWT
  select_by: string;
}

//GoogleAuthRes.credential decoded
export interface GoogleAuthJWTDecoded {
  iss: string;
  nbf: number;
  aud: string;
  sub: string;
  email: string;
  email_verified: boolean;
  azp: string;
  name: string;
  picture: string;
  given_name: string;
  family_name: string;
  iat: number;
  exp: number;
  jti: string;
}

//* ------------------------ APP MODELS -------------------------------------------------

export interface UserInfo {
  jwt: string;
  email: string;
  name: string;
  picture: string;
}

export const userSliceEmptyState = {
  jwt: "",
  email: "",
  name: "",
  picture: "",
};
