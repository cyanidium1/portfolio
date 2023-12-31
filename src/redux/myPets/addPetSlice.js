import { createSlice, isAnyOf, createAction } from '@reduxjs/toolkit';
import {
  addNewPet,
  addNewPetNotice,
  deletePet,
  updatePetInfo,
} from './addPetOperations';

const initialState = {
  name: '',
  location: '',
  file: '',
  type: '',
  date: '',
  sex: '',
  title: '',
  comments: '',
  category: '',
  price: '',
  isLoad: false,
};

export const addPetSlice = createSlice({
  name: 'addPet',
  initialState,
  reducers: {
    resetState: state => initialState,
    addPetStatus: (state, { payload }) => {
      state.category = payload;
    },
    addPetPersonalInfo: (state, { payload }) => {
      state.date = payload.date;
      state.title = payload.title;
      state.type = payload.type;
      state.name = payload.name;
      state.isLoad = false;
    },
    addPetMoreInfo: (state, { payload }) => {
      state.price = payload.price;
      state.location = payload.location;
      state.comments = payload.comments;
      state.sex = payload.sex;
      state.photo = payload.photo;
    },
  },
  extraReducers: builder => {
    builder.addCase(addNewPet.fulfilled, (state, { payload }) => {
      state.isLoad = false;
    });
    builder.addCase(addNewPet.pending, (state, { payload }) => {
      state.isLoad = true;
    });
    builder.addCase(addNewPetNotice.fulfilled, (state, { payload }) => {
      state.name = payload.name;
      state.location = payload.location;
      state.comments = payload.comments;
      state.sex = payload.sex;
      state.photo = payload.photo;
      state.isLoad = true;
    });
  },
});
export const { resetState, addPetStatus, addPetMoreInfo, addPetPersonalInfo } =
  addPetSlice.actions;
export const addPetSliceReducer = addPetSlice.reducer;
