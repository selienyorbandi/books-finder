import { GoogleOAuthInitCodeCLient } from "./google3PAuthJsLib.interface";

export interface authorizationSliceState {
  client: GoogleOAuthInitCodeCLient | null;
  access_token: string;
}

export const authorizationSliceEmptyState = {
  client: null,
  access_token: "",
};
