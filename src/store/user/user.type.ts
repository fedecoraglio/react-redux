export interface User {
  id: number;
  name: string;  
}

export interface UserState {
  user?: User | null;
  users?: User[] | null;
  isFetching?: boolean | null;
}