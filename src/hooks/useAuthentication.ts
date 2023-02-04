import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { adaptAuthentication } from "../adapters/authentication.adapter";
import { setAuthentication } from "../redux/slices/authentication.slice";
import { GoogleAuthRes } from "./../models/authentication.interface";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let google: any;

export const useAuthentication = (btnId: string, updateState: boolean) => {
  const dispatch = useDispatch();
  useEffect(() => {
    google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: (res: GoogleAuthRes) => {
        dispatch(setAuthentication(adaptAuthentication(res)));
      },
    });
    if (document.getElementById(btnId)) {
      google.accounts.id.renderButton(document.getElementById(btnId), {
        theme: "outline",
        size: "large",
      });
      google.accounts.id.prompt();
    }
  }, [updateState]);
};
