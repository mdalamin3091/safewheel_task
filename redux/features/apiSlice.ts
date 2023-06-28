import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
type Pokemon = {
    id?: string;
    name?: string;
};
export const pokemonApi = createApi({
    reducerPath: "pokemon",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://graphql-pokemon2.vercel.app/",
    }),
    endpoints: (builder) => ({
        getPokemons: builder.query<Pokemon[], void>({
            query: () => "/",
        }),
    }),
});

export const { useGetPokemonsQuery } = pokemonApi;
