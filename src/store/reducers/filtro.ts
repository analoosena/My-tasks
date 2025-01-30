import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import * as enums from "../../utils/enums/Tarefa";

type FiltroState = {
  termoBusca?: string;
  criterio: "prioridade" | "status" | "todas";
  valor?: enums.Prioridade | enums.Status;
};

const initialState: FiltroState = {
  termoBusca: "",
  criterio: "todas",
};
const filtroSlice = createSlice({
  name: "filtro",
  initialState,
  reducers: {
    alteraTermoBusca: (state, action: PayloadAction<string>) => {
      state.termoBusca = action.payload;
    },
    alterarFiltro: (state, action: PayloadAction<FiltroState>) => {
      state.criterio = action.payload.criterio;
      state.valor = action.payload.valor;
    },
  },
});

export const { alteraTermoBusca, alterarFiltro } = filtroSlice.actions;
export default filtroSlice.reducer;
