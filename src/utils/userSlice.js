import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name:'user',
    initialState:null,
    reducers:{
        addUser: (state,action)=>{
            return action.payLoad;
        },
        removerUser:(state,action)=>{
            return null;
        }
    }
})
export const{addUser,removerUser} = userSlice.actions;

export default userSlice.reducer;
