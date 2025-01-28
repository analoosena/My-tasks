import Tarefa from "../../components/Tarefa";
import { Container } from "./styles";
import * as enums from '../../utils/enums/Tarefa'

const tarefas = [
  {
    titulo: "Estudar Typescript",
    descricao: "Assistir a videoaula no youtube",
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE,
  },
  {
    titulo: "Arrumar um emprego",
    descricao: "Tornar o linckedin atrativo",
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.PENDENTE,
  },
  {
    titulo: "Ir trabalhar",
    descricao: "Permanecer feliz no meu presisiozinho",
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.CONCLUIDA,
  },
];

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como:"categoria" e "termo"</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
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
export default ListaDeTarefas;
