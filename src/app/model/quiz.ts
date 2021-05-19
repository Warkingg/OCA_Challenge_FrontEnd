import {User} from './user';

export interface Quiz {
  id?: number;
  title?: string;
  content?: string;
  score?: number;
  startTime? : number;
  endTime?: number;
  level?: string;
  quantity?; number;
  user?: User;
}
