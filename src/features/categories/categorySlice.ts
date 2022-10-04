import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface Category {
  id: string;
  name: string;
  description: string | null;
  is_active: boolean;
  deleted_at: null | string;
  created_at: string;
  updated_at: string;
}

const category: Category = {
  id: "1",
  name: "Category1",
  description: "Category description",
  is_active: true,
  deleted_at: null,
  created_at: "10/10/10",
  updated_at: "10/10/10",
};

export const initialState = [
  category,
  {
    ...category,
    id: "2",
    name: "Category2",
    description: "Category description",
    is_active: false,
    deleted_at: null,
    created_at: "10/10 / 10",
    updated_at: "10/10 / 10",
  },
  {
    ...category,
    id: "3",
    name: "Category3",
    description: "Category description",
    is_active: true,
    deleted_at: null,
    created_at: "10/10 / 10",
    updated_at: "10/10 / 10",
  },
  {
    ...category,
    id: "4",
    name: "Category4",
    description: "Category description",
    is_active: true,
    deleted_at: null,
    created_at: "10/10 / 10",
    updated_at: "10/10 / 10",
  },
];

const categoriesSclice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {
    createCategory(state, action) {},
  },
});

//Selectors

export const selectCategories = (state: RootState) => state.categories;

// select by ID

export const selectCategoryById = (state: RootState, id: string) => {
  const category = state.categories.find((category) => category.id == id);

  return (
    category || {
      id: "",
      name: "",
      description: "",
      is_active: false,
      deleted_at: null,
      created_at: "",
      updated_at: "",
    }
  );
};
// export const selectCategoryByName = (state: RootState, categoryName: string) =>

export default categoriesSclice.reducer;
