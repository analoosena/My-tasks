import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import * as S from "./style";

import { remover, editar } from "../../store/reducers/tarefas";
import TarefaClass from "../../models/Tarefa";

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

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
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
            <S.BotaoSalvar onClick={salvarEdicao}>Salvar</S.BotaoSalvar>
            <S.BotaoRemover onClick={cancelarEdicao}>Cancelar</S.BotaoRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
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
