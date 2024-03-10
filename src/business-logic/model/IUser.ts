export interface IGithubResponse {
  items: [IUser];
}

export default interface IUser {
  id: string;
  login: string;
}
