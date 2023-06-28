import React from 'react';
import { PokemonType } from '../../pages/pokemon';

interface Props {
    pokemon: PokemonType;
}

const PokemonCard = (props: Props) => {
    const { name, image, types, resistant, weaknesses } = props.pokemon;
    return (
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white">
            <img src={image} alt={name} className="w-full h-48 object-contain hover:scale-110 transition-all ease-in cursor-pointer" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <div className="mb-2">
                    <strong>Types: </strong>
                    {types.map((type: string, index: number) => (
                        <span key={index} className="mr-2 capitalize">
                            {type}
                        </span>
                    ))}
                </div>
                <div className="mb-2">
                    <strong>Resistant: </strong>
                    {resistant.map((resist: string, index: number) => (
                        <span key={index} className="mr-2 capitalize">
                            {resist}
                        </span>
                    ))}
                </div>
                <div className="mb-2">
                    <strong>Weaknesses: </strong>
                    {weaknesses.map((weakness: string, index: number) => (
                        <span key={index} className="mr-2 capitalize">
                            {weakness}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PokemonCard;
