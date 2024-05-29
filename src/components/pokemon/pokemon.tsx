import { usePokemonQuery } from "../../hooks/usePokemonsQuery";
import { Card } from "./styled";

type Props = {
  name: string;
};

export const Pokemon = ({ name }: Props) => {
  const { data, isSuccess } = usePokemonQuery(name);

  if (!isSuccess) {
    return <></>;
  }

  return (
    <Card>
      <p>Name: {data.name}</p>
      <p>Weight:{data.weight}</p>
      <p>Height: {data.height}</p>

      <p>Abilities:</p>
      <ul typeof="dics">
        {data.abilities.map((el) => (
          <li>{el.ability.name}</li>
        ))}
      </ul>
    </Card>
  );
};
