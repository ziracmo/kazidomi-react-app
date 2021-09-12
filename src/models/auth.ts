export interface LoginResponse {
  status: LoginResponseStatus;
  token?: string;
  message?: string;
}

export enum LoginResponseStatus {
  Success,
  Error,
}
