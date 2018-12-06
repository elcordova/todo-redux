import * as FromFiltro from './filter.actions';

const estadoinicial: FromFiltro.filtrosValidos = 'todos';

export function filtroReducer(state = estadoinicial, action: FromFiltro.AccionesFilter): FromFiltro.filtrosValidos {
  switch (action.type) {
    case FromFiltro.SET_FILTRO:
      return action.filtro;
    default:
      return state;
  }

}
