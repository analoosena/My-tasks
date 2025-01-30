import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import * as enums from "../../utils/enums/Tarefa";

type FiltroState = {
  termoBusca:string,
  criterioFiltragem: 'prioridade' | 'status' | 'todas',
  valor?: enums.Prioridade | enums.Status
}

const initialState: FiltroState = {
  termoBusca:'',
  criterioFiltragem: 'todas'
}
const filtroSlice = createSlice({
  name:'filtro',
  initialState,
  reducers:{
    alteraTermoBusca:(state, action:PayloadAction<string>) => {
      state.termoBusca = action.payload
    }
  }
})

export const {alteraTermoBusca} =filtroSlice.actions
export default filtroSlice.reducer;