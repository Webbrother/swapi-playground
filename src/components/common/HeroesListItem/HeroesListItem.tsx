import { Card } from 'antd';
import { Link } from 'react-router-dom';

import { IHeroesListItem } from '../../../api/heroes/types';

interface HeroesListItemProps {
  value: IHeroesListItem;
}

export const HeroesListItem = ({ value: { name, id } }: HeroesListItemProps) => (
  <Link to={`hero/${id}`} className={'block'}>
    <Card size={'small'}>{name}</Card>
  </Link>
);
