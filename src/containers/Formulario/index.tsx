import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";

import { BotaoSalvar, MainContainer, Titulo } from "../../styles";
import { Campo } from "../../styles";
import { Opcoes, Form, Opcao } from "./styles";
import * as enums from "../../utils/enums/Tarefa";
import { cadastrar } from "../../store/reducers/tarefas";

const Formulario = () => {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL);

  const dispatch = useDispatch();

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault();

    dispatch(
      cadastrar({
        titulo,
        prioridade,
        descricao,
        status: enums.Status.PENDENTE,
      })
    );
  };

  return (
    <MainContainer>
      <Titulo>Nova Tarefa</Titulo>
      <Form onSubmit={cadastrarTarefa}>
        <Campo
          value={titulo}
          onChange={(ev) => setTitulo(ev.target.value)}
          type="text"
          placeholder="Título"
        />
        <Campo
          value={descricao}
          onChange={(ev) => setDescricao(ev.target.value)}
          as="textarea"
          placeholder="Descrição da tarefa"
        />
        <Opcoes>
          <p>Prioridade:</p>
          {Object.values(enums.Prioridade).map((prio) => (
            <Opcao key={prio}>
              <input
                name="prioridade"
                type="radio"
                onChange={(ev) =>
                  setPrioridade(ev.target.value as enums.Prioridade)
                }
                id={prio}
                value={prio}
                defaultChecked={prio === enums.Prioridade.NORMAL}
              />{" "}
              <label htmlFor={prio}>{prio}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  );
};
export default Formulario;
