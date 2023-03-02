import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import postsSlice from '../reducers/postsSlice';

export type RootState = ReturnType<typeof postsSlice>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default configureStore({
  reducer: {
    posts: postsSlice,
    // add more reducers here
  },
});
