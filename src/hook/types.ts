export interface UserCredentials {
  username: string;
  password: string;
}

export interface JwtPayloadCustom {
  id: string;
  username: string;
  accesstoken: string;
}

export interface LogInUserResponse {
  accesstoken: string;
}

export interface UserInformation {
  username: string;
  email: string;
  image: string;
}

export interface PayloadLogin {
  token: string;
}
