export interface GoogleOAuthInitCodeCLient {
  client_id: string;
  scope: string;
  requestCode: () => void;
  requestAccessToken(overrideConfig?: OverridableTokenClientConfig): void;
}

export interface OverridableTokenClientConfig {
  scope?: string;
  include_granted_scopes?: boolean;
  prompt?: string;
  enable_serial_consent?: boolean;
  hint?: string;
  state?: string;
}

export interface TokenResponse {
  access_token: string;
  expires_in: number;
  scope: string;
  token_type: string;
  id_token: string;
  error: string;
  erro_description: string;
  error_uri: string;
  state: string;
  hd: string;
  prompt: string;
}

export interface CodeClientConfig {
  client_id: string;
  scope: string;
  include_granted_scopes?: boolean;
  redirect_uri?: string;
  callback?: (resp: TokenResponse) => void;
  state?: string;
  enable_serial_consent?: boolean;
  hint?: string;
  hosted_domain?: string;
  ux_mode?: string;
  selected_account?: string;
  error_callback?: (resp: TokenResponse) => void;
}

export interface CodeClient {
  requestCode(): void;
}

export interface CodeResponse {
  code: string;
  scope: string;
  state: string;
  error: string;
  error_description: string;
  error_uri: string;
}

export interface TokenClientConfig {
  client_id: string;
  callback: (resp: TokenResponse) => void;
  scope: string;
  include_granted_scopes?: boolean;
  prompt?: string;
  enable_serial_consent?: boolean;
  hint?: string;
  hosted_domain?: string;
  state?: string;
  error_callback?: (resp: TokenResponse) => void;
}

export interface GoogleAuthorizationRes {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  authuser: string;
  prompt: string;
}
