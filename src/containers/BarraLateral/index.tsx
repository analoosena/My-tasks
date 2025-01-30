import { useDispatch, useSelector } from "react-redux";
import FiltroCard from "../../components/FiltroCard";
import * as S from "./styles";
import { alteraTermoBusca } from "../../store/reducers/filtro";
import { RootReducer } from "../../store";

const BarraLateral = () => {
  const dispatch = useDispatch();
  const { termoBusca } = useSelector((state: RootReducer) => state.filtro);
  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Buscar"
          value={termoBusca}
          onChange={(evento) => dispatch(alteraTermoBusca(evento.target.value))}
        />
        <S.Filtros>
          <FiltroCard legenda="pendentes" contador={1} />
          <FiltroCard legenda="concluidas" contador={2} />
          <FiltroCard legenda="urgentes" contador={3} />
          <FiltroCard legenda="importantes" contador={4} />
          <FiltroCard legenda="normal" contador={5} />
          <FiltroCard legenda="todas" contador={10} ativo />
        </S.Filtros>
      </div>
    </S.Aside>
  );
};
export default BarraLateral;
