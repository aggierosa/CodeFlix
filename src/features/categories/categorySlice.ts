import { createSlice } from "@reduxjs/toolkit";

interface Category {
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
  name: "Category",
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
    id: "1",
    name: "Category",
    description: "Category description",
    is_active: true,
    deleted_at: null,
    created_at: "10/10 / 10",
    updated_at: "10/10 / 10",
  },
  {
    ...category,
    id: "2",
    name: "Category",
    description: "Category description",
    is_active: true,
    deleted_at: null,
    created_at: "10/10 / 10",
    updated_at: "10/10 / 10",
  },
  {
    ...category,
    id: "3",
    name: "Category",
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

export default categoriesSclice.reducer;
