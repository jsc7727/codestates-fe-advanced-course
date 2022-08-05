export interface postInterface {
  userId: string;
  id: number;
  title: string;
  body: string;
}

export type commentInterface = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
