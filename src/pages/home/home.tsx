import { useEffect, useState } from "react";
import { List } from "../../components/list";
import { Pagination } from "../../components/pagination";
import { usePokemonsQuery } from "../../hooks/usePokemonsQuery";
import { Wrapper } from "./styled";

export const HomePage = () => {
  const [page, setPage] = useState(0);

  const { data, isSuccess, refetch, isFetching, isError } = usePokemonsQuery(
    page * 20
  );

  useEffect(() => {
    refetch();
  }, [page]);

  if (isFetching) {
    return <p>Загрузка...</p>;
  }

  if (isError || !isSuccess) {
    return <p>Ошибка</p>;
  }

  return (
    <Wrapper>
      <p>Test task</p>
      <List list={data.results} />
      <Pagination
        page={page}
        setPage={setPage}
        limit={Math.floor(isSuccess ? data.count / 20 : 0) + 1}
      />
    </Wrapper>
  );
};
