'use client';

import { HiOutlineHeart, HiHeart } from 'react-icons/hi';

import Image from 'next/image';
import Link from 'next/link';
import { useLocalStorageState } from '../_hooks/useLocalStorageState';

const PokemonList = ({ data, apiUrl, imageUrl }) => {
  const [favourites, setFavourites] = useLocalStorageState([], 'favourites');

  const onAddLike = (id, name) => {
    const checkPokemon = (obj) => obj.id.toString() === id.toString();

    if (favourites.some(checkPokemon)) return;

    setFavourites((favourites) => [
      ...favourites,
      {
        id,
        imageUrl,
        name,
        selected: true,
      },
    ]);
  };

  const onRemoveLike = (id) => {
    setFavourites((fav) =>
      fav.filter((item) => item.id.toString() !== id.toString())
    );
  };

  return (
    <ul className="flex flex-wrap items-center justify-center gap-4 ">
      {data?.map((item) => {
        const id = item.url.replace(`${apiUrl}/pokemon/`, '').replace('/', '');

        return (
          <li
            key={item.url}
            className="h-80 w-48 rounded-md mt-5 ml-5 bg-gray-300 border-primary-800 border hover:bg-accent-300"
          >
            <Link
              href={`pokemon/${id}`}
              className="h-80 w-48 p-5 flex flex-col items-center justify-between"
            >
              <p className="text-gray-900 mb-5 text-xl ">{item.name}</p>
              <Image
                alt={item.name}
                height={100}
                width={100}
                className="mb-5"
                src={`${imageUrl}/${id}.svg`}
              />
              <p className="text-gray-900 text-lg">ID: {id}</p>
            </Link>

            <HiOutlineHeart
              onClick={() => onAddLike(id, item.name)}
              className="cursor-pointer text-3xl hover:scale-125  hover:text-accent-300 transition-transform duration-200 ease-out"
            />

            {/* <HiOutlineHeart
              onClick={() => onAddLike(id, item.name)}
              className="cursor-pointer text-3xl hover:scale-125  hover:text-accent-300 transition-transform duration-200 ease-out"
            /> */}
          </li>
        );
      })}
    </ul>
  );
};

export default PokemonList;
