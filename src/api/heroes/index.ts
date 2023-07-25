import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { Maybe } from '../../utils/types';
import { http } from '../_http-client/http-client';
import { heroesListAdapter } from './heroes-list-item-adapter';
import { IHeroesList, IHeroesListDTO } from './types';

const heroesPlaceholderData: IHeroesList = {
  count: 0,
  results: [],
  next: null,
  previous: null,
};

const getHeroesList = (page: number, search: string) =>
  http.get<IHeroesListDTO>('people', { params: { page, search } }).then(heroesListAdapter.forward);

export const useHeroesList = (page: Maybe<string>, search: Maybe<string>) => {
  let pageNumber = Number(page);

  if (isNaN(pageNumber) || page === null) {
    pageNumber = 1;
  }

  const { data, ...restQuery } = useQuery<IHeroesList, AxiosError>(
    ['getHeroesList', pageNumber, search],
    () => getHeroesList(pageNumber, search || ''),
    {
      keepPreviousData: true,
    },
  );

  return {
    data: (data as IHeroesList) || heroesPlaceholderData,
    ...restQuery,
  };
};
