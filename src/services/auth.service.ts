import { GoogleAuthRes } from "../models/user.interface";
/* eslint-disable @typescript-eslint/no-explicit-any */
declare let google: any;

export async function signInWithGoogle(btnId: string, callback: (res: GoogleAuthRes) => void) {
  google.accounts.id.initialize({
    client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
    callback: callback,
  });
  google.accounts.id.renderButton(document.getElementById(btnId), {
    theme: "outline",
    size: "large",
  });
  google.accounts.id.prompt();
}
