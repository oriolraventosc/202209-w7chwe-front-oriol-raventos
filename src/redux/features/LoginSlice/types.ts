export interface UserLoginData {
  id: string;
  accesstoken: string;
  username: string;
}

export interface UserState extends UserLoginData {
  isLogged: boolean;
}

export interface UiState {
  modal: string;
}

export interface UserCredentials {
  username: string;
  password: string;
}

export interface UserRegisterData extends UserCredentials {
  email: string;
}
export interface UserToRegisterData {
  username: string;
  password: string;
  email: string;
  backUpImage?: File;
  image?: File;
}
export interface JwtCustomPayload {
  id: string;
  username: string;
}

export interface UserStructure {
  username: string;
  backupPicure?: string;
}

export interface UserListState {
  list: UserStructure[];
}

export interface UsersApi {
  users: UserStructure[];
}
