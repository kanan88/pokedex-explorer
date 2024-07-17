'use client';
import { useLocalStorageState } from '../_hooks/useLocalStorageState';
import { HiHeart } from 'react-icons/hi';
import Image from 'next/image';
import Link from 'next/link';
import PokemonCard from './PokemonCard';

const FavouritePokemonList = () => {
  const [favourites, setFavourites] = useLocalStorageState([], 'favourites');

  const onRemoveLike = (id) => {
    setFavourites((fav) =>
      fav.filter((item) => item.id.toString() !== id.toString())
    );
  };

  return (
    <>
      {favourites?.length > 0 && (
        <>
          <h1 className="text-xl text-accent-300 text-center">
            Your favourite pokemons
          </h1>
          <ul className="flex flex-wrap items-center justify-center gap-4 ">
            {favourites?.map((item) => {
              const id = item.id;

              return (
                <li
                  key={item.id}
                  className="h-80 w-48 rounded-md mt-5 ml-5  border-primary-800 border bg-accent-300"
                >
                  <PokemonCard
                    id={id}
                    name={item.name}
                    imageUrl={`${item.imageUrl}/${id}.svg`}
                  />

                  <HiHeart
                    onClick={() => onRemoveLike(id)}
                    className="text-accent-300 cursor-pointer text-3xl hover:scale-125 transition-transform duration-200 ease-out"
                  />
                </li>
              );
            })}
          </ul>
        </>
      )}
      {favourites?.length === 0 && (
        <h1 className="text-xl text-accent-300 text-center">
          You do not have any favourite pokemons...
        </h1>
      )}
    </>
  );
};

export default FavouritePokemonList;
