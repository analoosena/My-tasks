import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import * as S from "./styles";
import { Botao, Campo } from "../../styles";

import FiltroCard from "../../components/FiltroCard";
import { alteraTermoBusca } from "../../store/reducers/filtro";
import { RootReducer } from "../../store";
import * as enums from "../../utils/enums/Tarefa";



type Props = {
  mostrarFiltros: boolean;
};

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const { termoBusca } = useSelector((state: RootReducer) => state.filtro);
  
  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termoBusca}
              onChange={(evento) =>
                dispatch(alteraTermoBusca(evento.target.value))
              }
            />
            <S.Filtros>
              <FiltroCard
                valor={enums.Status.PENDENTE}
                criterio="status"
                legenda="pendentes"
              />
              <FiltroCard
                valor={enums.Status.CONCLUIDA}
                criterio="status"
                legenda="concluidas"
              />
              <FiltroCard
                valor={enums.Prioridade.URGENTE}
                criterio="prioridade"
                legenda="urgentes"
              />
              <FiltroCard
                valor={enums.Prioridade.IMPORTANTE}
                criterio="prioridade"
                legenda="importantes"
              />
              <FiltroCard
                valor={enums.Prioridade.NORMAL}
                criterio="prioridade"
                legenda="normal"
              />
              <FiltroCard criterio="todas" legenda="todas" />
            </S.Filtros>
          </>
        ) : (
          <Botao onClick={()=>navigate('/')} type="button">Voltar a lista de tarefas</Botao>
        )}
      </div>
    </S.Aside>
  );
};
export default BarraLateral;
