import {Roles} from './roles';

export interface User {
  id ?: number;
  username ?: string;
  firstName ?: string;
  lastName ?: string;
  password ?: string;
  rePassword ?: string;
  phoneNumber ?: string;
  email ?: string;
  roles ?: Roles;
}
