import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import * as S from "./style";
import { Botao, BotaoSalvar } from "../../styles";

import { remover, editar, alteraStatus } from "../../store/reducers/tarefas";
import TarefaClass from "../../models/Tarefa";
import * as enums from "../../utils/enums/Tarefa";

type Props = TarefaClass;

const Tarefa = ({
  titulo,
  prioridade,
  descricao: descricaoOriginal,
  status,
  id,
}: Props) => {
  const [estaEditando, setEstaEditando] = useState(false);
  const dispatch = useDispatch();
  const [descricao, setDescricao] = useState("");

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal);
    }
  }, [descricaoOriginal]);

  function cancelarEdicao() {
    setEstaEditando(false);
    setDescricao(descricaoOriginal);
  }
  function salvarEdicao() {
    setEstaEditando(false);
    dispatch(editar({ descricao, id, prioridade, status, titulo }));
  }

  function alteraEstadotarefa(evento: ChangeEvent<HTMLInputElement>) {
    dispatch(alteraStatus({ id, finalizado: evento.target.checked }));
  }

  return (
    <S.Card>
      <label htmlFor={titulo}>
        <input
          type="checkbox"
          id={titulo}
          checked={status === enums.Status.CONCLUIDA}
          onChange={alteraEstadotarefa}
        />
        <S.Titulo>
          {estaEditando? <em>Editando: </em> : ''}
          
          {titulo}</S.Titulo>
      </label>

      <div>
        <S.Tag parametro="prioridade" prioridade={prioridade}>
          {prioridade}
        </S.Tag>
        <S.Tag parametro="status" status={status}>
          {status}
        </S.Tag>
      </div>
      <S.Descricao
        disabled={!estaEditando}
        value={descricao}
        onChange={(evento) => setDescricao(evento.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar onClick={salvarEdicao}>Salvar</BotaoSalvar>
            <S.BotaoRemover onClick={cancelarEdicao}>Cancelar</S.BotaoRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  );
};
export default Tarefa;
