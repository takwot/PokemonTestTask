import React, { useEffect } from "react";
import { Text, Wrapper } from "./styled";

type Props = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  limit: number;
};

function generateArray(num: number) {
  let result = Array.from({ length: 7 }, (_, i) => num - 2 + i);

  // if (num < 4) {
  //   result = result.slice(0, 7);
  // } else {
  //   result = result.slice(num - 3, num + 4);
  // }
  return result;
}

export const Pagination = ({ page, setPage, limit }: Props) => {
  const arr = generateArray(page);

  return (
    <Wrapper>
      {page + 1 >= 5 && <Text onClick={() => setPage(0)}>1</Text>}
      {page + 1 >= 6 && <p>...</p>}
      {arr.map(
        (el) =>
          el >= 1 &&
          el <= limit && (
            <Text
              style={{ color: page === el - 1 ? "blue" : "" }}
              onClick={() => setPage(el - 1)}
            >
              {el}
            </Text>
          )
      )}
      {page + 1 <= limit - 4 && <p>...</p>}
      {page + 7 <= limit && (
        <Text onClick={() => setPage(limit - 1)}>{limit}</Text>
      )}
    </Wrapper>
  );
};
