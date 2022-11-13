export interface UserCredentials {
  username: string;
  password: string;
}

export interface JwtPayloadCustom {
  id: string;
  username: string;
}

export interface LogInUserResponse {
  accesstoken: string;
}
