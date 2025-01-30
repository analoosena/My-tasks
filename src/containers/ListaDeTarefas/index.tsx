import { useSelector } from "react-redux";

import { RootReducer } from "../../store";
import Tarefa from "../../components/Tarefa";
import { Container } from "./styles";

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas);
  const { termoBusca, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  );

  const filtraTarefas = () => {
    let tarefasFiltradas = itens;
    if (termoBusca !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) =>
          item.titulo
            .toLocaleLowerCase()
            .search(termoBusca.toLocaleLowerCase()) >= 0
      );

      if (criterio === "prioridade") {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.prioridade === valor
        );
      } else if (criterio === "status") {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.status === valor
        );
      }
      return tarefasFiltradas;
    } else {
      return itens;
    }
  };
  return (
    <Container>
      <p>2 categorias marcadas como: {termoBusca}</p>
      <ul>
        {filtraTarefas().map((t) => (
          <li key={t.titulo}>
            <Tarefa
              id={t.id}
              titulo={t.titulo}
              descricao={t.descricao}
              prioridade={t.prioridade}
              status={t.status}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
};
export default ListaDeTarefas;
