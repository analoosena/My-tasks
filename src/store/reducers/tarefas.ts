import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Tarefa from "../../models/Tarefa";
import * as enums from "../../utils/enums/Tarefa";

const tarefasSlice = createSlice({
  name: "tarefas",

  initialState: [
    new Tarefa(
      "Estudar JS",
      enums.Prioridade.IMPORTANTE,
      "",
      enums.Status.PENDENTE,
      1
    ),
    new Tarefa(
      "Estudar TypeScript",
      enums.Prioridade.URGENTE,
      "Rever aula 2",
      enums.Status.CONCLUIDA,
      2
    ),
    new Tarefa(
      "Ir para o Crossfit",
      enums.Prioridade.NORMAL,
      "Fazer check in",
      enums.Status.PENDENTE,
      3
    ),
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload);
    },
  },
});

export const { remover } = tarefasSlice.actions;
export default tarefasSlice.reducer;
