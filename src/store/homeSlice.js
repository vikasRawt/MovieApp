import { createSlice } from '@reduxjs/toolkit'


export const homeSlice = createSlice({
  name: 'home',
  initialState:{
    url:{},
    genres:{}
  },
  reducers: {
    getAppConfiguration:(state, action)=>{
        state.url = action.payload;
    },
    getAppGenres:(state, action)=>{
        state.genres = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { getAppConfiguration, getAppGenres } = homeSlice.actions

export default homeSlice.reducer