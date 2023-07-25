import { ForwardAdapter } from '../types';
import { IHeroesListItem, IHeroesListItemDTO } from './types';

// "https://swapi.dev/api/people/11/" => "11"
const getIdFromUrl = (url: string) => {
  const parts = url.split('/');
  return parts[parts.length - 2];
};

export const heroesListItemAdapter: ForwardAdapter<IHeroesListItemDTO, IHeroesListItem> = {
  forward({ url, ...rest }) {
    return {
      url,
      id: getIdFromUrl(url),
      ...rest,
    };
  },
};
