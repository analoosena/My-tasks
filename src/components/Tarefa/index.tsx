import { useState } from "react";
import * as S from "./style";

import * as enums from "../../utils/enums/Tarefa";

type Props = {
  titulo: string;
  prioridade: enums.Prioridade;
  status: enums.Status;
  descricao: string;
};

const Tarefa = ({ titulo, prioridade, descricao, status }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false);

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
      <S.Descricao value={descricao} />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoRemover onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BotaoRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoRemover>Remover</S.BotaoRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  );
};
export default Tarefa;
