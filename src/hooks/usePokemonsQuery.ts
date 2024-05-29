import { useQuery } from "@tanstack/react-query";
import { getAllPokemons, getPokemon } from "../utils/fetcher";

export const usePokemonsQuery = (offset: number) => {
  return useQuery({
    queryKey: ["pokemon", "all"],
    queryFn: () => getAllPokemons(offset, 20),
  });
};

export const usePokemonQuery = (name: string) => {
  return useQuery({
    queryKey: ["pokemon", name],
    queryFn: () => getPokemon(name),
  });
};
