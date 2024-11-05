import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectOption: 10,
  search : '',

}

export const tableSlice = createSlice({
  name: 'table',
  initialState: initialState,
  reducers:{
    setSelectOption : (state, action) => {
      state.selectOption =  action.payload
    },
    search : (state, action) =>{
      state.search = action.payload
    }
  }
})