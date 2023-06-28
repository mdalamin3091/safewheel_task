import { useQuery } from "@apollo/client";
import { GET_POKEMON_LIST } from "../../src/graphql/data";
import LoadingSpinner from "../../src/components/LoadingSpinner";
import ErrorMessage from "../../src/components/ErrorMessage";
import DataNotFoundMessage from "../../src/components/NotFound";
import PokemonCard from "../../src/components/PokemonCard";
import { useEffect } from "react";

export type PokemonType = {
    id: string;
    name: string;
    image: string;
    types: string[];
    resistant: string[];
    weaknesses: string[];
};

const Pokemon = () => {
    
    useEffect(() =>{
        document.title = "Safewheel - Pokemon"
    }, [])

    const { loading, error, data } = useQuery(GET_POKEMON_LIST);
    let content;
    if (loading) {
        content = <LoadingSpinner />;
    }
    if (error) {
        content = <ErrorMessage message={error.message} />;
    }
    if (data?.pokemons?.length === 0) {
        content = <DataNotFoundMessage />;
    }
    if (data?.pokemons?.length > 0) {
        content = (
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
                {data?.pokemons.map((pokemon: PokemonType) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
        );
    }

    return (
        <div className="flex items-center justify-start flex-col gap-8 min-h-screen pb-10 px-3 md:px-0">
            <h2 className="text-white text-xl text-center">Pokemon Data</h2>
            {content}
        </div>
    );
};

export default Pokemon;
