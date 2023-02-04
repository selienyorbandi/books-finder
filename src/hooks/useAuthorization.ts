import { useDispatch } from "react-redux";
import {
  GoogleAuthorizationRes,
  GoogleOAuthInitCodeCLient,
} from "../models/google3PAuthJsLib.interface";
import { useEffect, useState } from "react";
import { setAuthorization } from "../redux/slices/authorization.slice";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let google: any;

export const useAuthorization = () => {
  const dispatch = useDispatch();
  const [client, setClient] = useState<GoogleOAuthInitCodeCLient | null>(null);

  useEffect(() => {
    const client = google.accounts.oauth2.initTokenClient({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      scope: "https://www.googleapis.com/auth/books",
      callback: (response: GoogleAuthorizationRes) => {
        dispatch(setAuthorization(response));
      },
    });
    setClient(client);
  }, []);

  return client;
};
