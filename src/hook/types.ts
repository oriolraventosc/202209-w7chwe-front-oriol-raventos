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
  backUpImage?: string;
}

export interface PayloadLogin {
  token: string;
}

export interface UserStructure {
  username: string;
  email: string;
  backupPicure?: string;
  image: string;
  id: string;
}
export interface UsersApi {
  users: UserStructure[];
}
