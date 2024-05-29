export type Result = {
  results: { name: string; url: string }[];
  next: null | string;
  previous: null | string;
  count: number;
};

export type Pokemon = {
  abilities: {
    slot: number;
    is_hidden: boolean;
    ability: {
      name: string;
      url: string;
    };
  }[];
  name: string;
  height: number;
  weight: number;
};
