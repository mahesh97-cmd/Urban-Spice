import { createSlice } from "@reduxjs/toolkit";

const intialState={
    isLoggedIn:false
}

const authSlice=createSlice({
   name:"auth",
   initialState:intialState,
   reducers:{
       login:(state)=>{
           state.isLoggedIn=true
       },
       logout:(state)=>{
           state.isLoggedIn=false
       }
   } 
})

export default authSlice.reducer;
export const {login,logout}=authSlice.actions