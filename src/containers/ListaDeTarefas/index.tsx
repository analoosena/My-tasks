import { useSelector } from "react-redux";

import { RootReducer } from "../../store";
import Tarefa from "../../components/Tarefa";
import { Container } from "./styles";

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas);
  const { termoBusca } = useSelector((state: RootReducer) => state.filtro);

  const filtraTarefas = () => {
    return itens.filter(
      (item) =>
        item.titulo
          .toLocaleLowerCase()
          .search(termoBusca.toLocaleLowerCase()) >= 0
    );
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
