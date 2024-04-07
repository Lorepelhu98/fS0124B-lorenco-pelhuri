export interface User {
email: any;
name: any;
  id: number;
  username: string;
  password: string;
  details: UserDetails;
  favorites: number[];
}

export interface UserDetails {
  name: string;
  email: string;
}
