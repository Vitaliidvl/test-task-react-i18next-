import store from '../store';

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type ProfileProps = {
  isAuthenticated: boolean;
};

export type NewsProps = {
  title: string;
};
export type AppDispatch = typeof store.dispatch;
