import axios from "axios";
import { Pokemon, Result } from "./types";

const instanse = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

async function getAllPokemons(offset: number, limit: number) {
  const res: Result = (
    await instanse.get(`pokemon?offset=${offset}&limit=${limit}`)
  ).data;
  return res;
}

async function getPokemon(name: string) {
  const res: Pokemon = (await instanse.get(`pokemon/${name}`)).data;
  return res;
}

export { getAllPokemons, getPokemon };
