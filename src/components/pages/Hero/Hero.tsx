import { Button, Card } from 'antd';
import { Link, useParams } from 'react-router-dom';

import { useHero } from '../../../api/hero';
import { ErrorMessage } from '../../common/ErrorMessage/ErrorMessage';
import { HeroForm } from '../../common/HeroForm/HeroForm';
import { Spinner } from '../../common/Spinner/Spinner';

export const Hero = () => {
  const { userId } = useParams();
  const { data, isFetching, error, refetch } = useHero(userId!);

  if (isFetching) return <Spinner fillParent />;

  if (error || !data) return <ErrorMessage message={'Network error'} onRetry={refetch} pending={isFetching} />;

  return (
    <>
      <Link to={'/'} className={'block mb-4'}>
        <Button>Back to list</Button>
      </Link>
      <Card>
        <HeroForm value={data} />
      </Card>
    </>
  );
};
