import { gql } from "@apollo/client";
export const GET_POKEMON_LIST = gql`
  query {
    pokemons(first: 30) {
      id
      name
      image
      types
      resistant
      weaknesses
    }
  }
`;
