import { useQuery } from '@tanstack/react-query';

import { http } from '../_http-client/http-client';
import { IHero } from './types';

const getHero = (id: string) => http.get<IHero>(`people/${id}`);

export const useHero = (id: string) => useQuery(['getHero', id], () => getHero(id));
