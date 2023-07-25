import { ForwardAdapter } from '../types';
import { heroesListItemAdapter } from './heroes-adapter';
import { IHeroesList, IHeroesListDTO } from './types';

export const heroesListAdapter: ForwardAdapter<IHeroesListDTO, IHeroesList> = {
  forward({ results, ...rest }) {
    return {
      results: results.map(heroesListItemAdapter.forward),
      ...rest,
    };
  },
};
