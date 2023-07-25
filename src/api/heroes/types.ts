import { Maybe } from '../../utils/types';

export interface IHeroesListItemDTO {
  name: string;
  url: string;
}

export interface IHeroesListItem {
  name: string;
  url: string;
  id: string;
}

export interface IHeroesListDTO {
  count: number;
  next: Maybe<string>;
  previous: Maybe<string>;
  results: IHeroesListItemDTO[];
}

export interface IHeroesList {
  count: number;
  next: Maybe<string>;
  previous: Maybe<string>;
  results: IHeroesListItem[];
}
