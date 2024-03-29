import { User } from "./user.service";

export interface Todo {
  title: string;
  user: any;
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

