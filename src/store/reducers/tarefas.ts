import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Tarefa from "../../models/Tarefa";
import * as enums from "../../utils/enums/Tarefa";

type TarefaState = {
  itens: Tarefa[];
};
const initialState: TarefaState = {
  itens: [
    {
      titulo: "Estudar JavaScript",
      prioridade: enums.Prioridade.IMPORTANTE,
      descricao: "Rever aula do módulo 7",
      status: enums.Status.PENDENTE,
      id: 1,
    },
    {
      titulo: "Revisar Projetos em TypeScript + Angular",
      prioridade: enums.Prioridade.NORMAL,
      descricao: "Trabalhar em projetos antigos a fim de converte-los em TS",
      status: enums.Status.CONCLUIDA,
      id: 2,
    },
    {
      titulo: "Praticar atividade física",
      prioridade: enums.Prioridade.URGENTE,
      descricao: "Fazer check in no CrossFit e levar a grip, hoje é dia de Bar Muscle Up(BMU)",
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
    cadastrar: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) => {
      const tarefaExiste = state.itens.find(
        (t) => t.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      );
      if (tarefaExiste) {
        alert("Ja existe essa tarefa");
      } else {
        const ultimaTarefa = state.itens[state.itens.length-1]

        const tarefaNova ={
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1 
        }
        state.itens.push(tarefaNova)
      }
    },
    alteraStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      );
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa].status = action.payload.finalizado
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE;
      }
    },
  },
});

export const { remover, editar, cadastrar, alteraStatus } = tarefasSlice.actions;
export default tarefasSlice.reducer;
