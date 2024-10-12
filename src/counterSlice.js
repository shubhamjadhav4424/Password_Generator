import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  list:[],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addtolist:(state, actions)=>{
        let findindex= state.list.findIndex(
            (item)=> item.id === actions.payload.id
        );

        if(findindex>=0){
            state.list.push()
        }
        
    }
  },
})

export const { addtolist } = counterSlice.actions

export default counterSlice.reducer