import { TablePaginationConfig } from 'antd';
import { useMemo, useState } from 'react';

function useTable<T>(data: T[] = [], defaultPageSize = 10) {
  const [limit, setLimit] = useState(defaultPageSize);
  const [page, setPage] = useState(1);

  const formatData = useMemo(() => {
    return data.slice((page - 1) * limit, page * limit);
  }, [data, limit, page]);

  const onChange = ({ current, pageSize }: TablePaginationConfig) => {
    setPage(current ?? 1);
    setLimit(pageSize ?? 10);
  };

  return {
    limit,
    onChange,
    setLimit,
    page,
    setPage,
    formatData,
  };
}

export default useTable;
