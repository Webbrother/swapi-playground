import { Empty } from 'antd';

import { IHeroesListItem } from '../../../api/heroes/types';
import { PropsWithClassName } from '../../../utils/types';
import { HeroesListItem } from '../HeroesListItem/HeroesListItem';
import { Spinner } from '../Spinner/Spinner';

interface HeroesListProps extends PropsWithClassName {
  heroes: IHeroesListItem[];
  isLoading: boolean;
}

export const HeroesList = ({ heroes, isLoading, className = '' }: HeroesListProps) => {
  const list = heroes.length ? (
    <div className='space-y-2'>
      {heroes.map(hero => (
        <HeroesListItem key={hero.url} value={hero} />
      ))}
    </div>
  ) : (
    <Empty className={'h-[354px]'} />
  );

  return <div className={className}>{isLoading ? <Spinner>{list}</Spinner> : list}</div>;
};
