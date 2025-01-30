import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Tarefa from "../../models/Tarefa";
import * as enums from "../../utils/enums/Tarefa";

type TarefaState = {
  itens: Tarefa[];
};
const initialState: TarefaState = {
  itens: [
    {
      titulo: "Estudar JS",
      prioridade: enums.Prioridade.IMPORTANTE,
      descricao: "",
      status: enums.Status.PENDENTE,
      id: 1,
    },
    {
      titulo: "Estudar Redux",
      prioridade: enums.Prioridade.NORMAL,
      descricao: "rever videos e aplicar eu mesma em projetos",
      status: enums.Status.CONCLUIDA,
      id: 2,
    },
    {
      titulo: "Ir para o cross",
      prioridade: enums.Prioridade.URGENTE,
      descricao: "Fazer check in às 17 hrs e levar grip",
      status: enums.Status.PENDENTE,
      id: 3,
    },
  ],
};
const tarefasSlice = createSlice({
  name: "tarefas",
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((tarefa) => tarefa.id !== action.payload),
      ];
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      );
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload;
      }
    },
  },
});

export const { remover, editar } = tarefasSlice.actions;
export default tarefasSlice.reducer;
