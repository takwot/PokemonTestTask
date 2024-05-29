import { useState } from "react";
import { usePokemonsQuery } from "../../hooks/usePokemonsQuery";
import { Wrapper } from "./styled";
import { Pokemon } from "../pokemon";

type Props = {
  list: { name: string; url: string }[];
};

export const List = ({ list }: Props) => {
  return (
    <Wrapper>
      {list.map((el) => (
        <Pokemon name={el.name} />
      ))}
    </Wrapper>
  );
};
