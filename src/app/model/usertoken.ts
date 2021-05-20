import {Roles} from "./roles";

export interface UserToken {
  id?: number;
  token?: string;
  type?: string;
  username?: string;
  name?: string;
  roles?: any;
}
