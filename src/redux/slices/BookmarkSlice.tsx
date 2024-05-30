import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ImageSourcePropType } from 'react-native';

export type ArticleNewsTypes = {
  key: string;
  date: string;
  description: string;
  label: string;
  image: ImageSourcePropType;
};

type BookmarkState = ArticleNewsTypes[];

const initialState: BookmarkState = [];

const BookmarkSlice = createSlice({
  name: 'fav',
  initialState,
  reducers: {
    addToBookmark: (state, action: PayloadAction<ArticleNewsTypes>) => {
      const existingItem = state.find(item => item.key === action.payload.key);
      if (!existingItem) {
        state.push(action.payload);
      }
    },
    removeFromBookmark: (state, action: PayloadAction<string>) => {
      return state.filter(item => item.key !== action.payload);
    },
  },
});

export const { addToBookmark, removeFromBookmark } = BookmarkSlice.actions;
export default BookmarkSlice.reducer;
