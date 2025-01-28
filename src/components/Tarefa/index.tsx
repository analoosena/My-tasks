import * as S from "./style";

const Tarefa = () => (
  <S.Card>
    <S.Titulo>Nome da Tarefa</S.Titulo>
    <div>
      <S.Tag>importante</S.Tag>
      <S.Tag>pendente</S.Tag>
    </div>
    <S.Descricao />
    <S.BarraAcoes>
      <S.Botao>Editar</S.Botao>
      <S.Botao>Remover</S.Botao>
    </S.BarraAcoes>
  </S.Card>
);
export default Tarefa;
