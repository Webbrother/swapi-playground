import { Input, Pagination } from 'antd';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useHeroesList } from '../../../api/heroes';
import { searchParamsToObject } from '../../../utils/common';
import { DEFAULT_CURRENT_PAGE, DEFAULT_PAGE_SIZE } from '../../../utils/constants';
import { ErrorMessage } from '../../common/ErrorMessage/ErrorMessage';
import { HeroesList } from '../../common/HeroesList/HeroesList';

const { Search } = Input;

export const Heroes = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = searchParams.get('page');
  const searchParam = searchParams.get('search');

  useEffect(() => {
    if (pageParam === null || Number(pageParam) === 0 || isNaN(Number(pageParam))) {
      setSearchParams(prev => ({ ...searchParamsToObject(prev), page: '1' }));
    }
  }, [pageParam, searchParams, setSearchParams]);

  const { data, refetch, isFetching, isError, error } = useHeroesList(pageParam, searchParam);
  const { count, results } = data;

  if (isError) {
    return <ErrorMessage message={error.message} onRetry={refetch} pending={isFetching} />;
  }

  return (
    <div className={'space-y-4'}>
      <Search
        placeholder='input search text'
        allowClear
        enterButton='Search'
        size='large'
        defaultValue={searchParam || ''}
        onSearch={search => setSearchParams({ page: '1', search })}
      />
      <HeroesList heroes={results} isLoading={isFetching} />
      <Pagination
        defaultCurrent={DEFAULT_CURRENT_PAGE}
        pageSize={DEFAULT_PAGE_SIZE}
        current={Number(pageParam) || 1}
        total={count}
        disabled={!count}
        showSizeChanger={false}
        onChange={newPage => setSearchParams(prev => ({ ...searchParamsToObject(prev), page: `${newPage}` }))}
      />
    </div>
  );
};
