import jwtDecode from "jwt-decode";
import { JwtPayloadCustom } from "../hook/types";

const decode = (token: string) => {
  const payloadToken: JwtPayloadCustom = jwtDecode(token);
  return {
    id: payloadToken.id,
    username: payloadToken.username,
  };
};

export default decode;
