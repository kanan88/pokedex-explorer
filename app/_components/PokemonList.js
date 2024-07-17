'use client';

import { useEffect, useState } from 'react';

import { useLocalStorageState } from '../_hooks/useLocalStorageState';
import PokemonCard from './PokemonCard';
import { HiOutlineHeart, HiHeart } from 'react-icons/hi';
import SearchBar from './SearchBar';

const PokemonList = ({ data, apiUrl, imageUrl }) => {
  const [apiData, setApiData] = useState(data);

  const [searchValue, setSearchValue] = useState('');
  const [favourites, setFavourites] = useLocalStorageState([], 'favourites');

  useEffect(() => {
    const updatedData = data?.filter((item) =>
      item?.name?.toLowerCase().includes(searchValue.toLowerCase())
    );

    setApiData(updatedData);
  }, [searchValue, data]);

  const onAddLike = (id, name) => {
    const checkPokemon = (obj) => obj.id.toString() === id.toString();

    if (favourites.some(checkPokemon)) return;

    setFavourites((favourites) => [
      ...favourites,
      {
        id,
        imageUrl,
        name,
      },
    ]);
  };

  const onRemoveLike = (id) => {
    setFavourites((fav) =>
      fav.filter((item) => item.id.toString() !== id.toString())
    );
  };

  return (
    <>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />

      <ul className="flex flex-wrap items-center justify-center gap-4">
        {apiData?.map((item) => {
          const id = item.url
            .replace(`${apiUrl}/pokemon/`, '')
            .replace('/', '');

          return (
            <li
              key={item.url}
              className="h-80 w-48 rounded-md mt-5 ml-5 bg-gray-300 border-primary-800 border "
            >
              <PokemonCard
                id={id}
                name={item.name}
                imageUrl={`${imageUrl}/${id}.svg`}
                style={`${
                  favourites.find((fav) => fav.name === item.name)
                    ? 'bg-accent-300'
                    : ''
                }`}
              />

              {favourites?.find((fav) => fav.name === item.name) ? (
                <HiHeart
                  onClick={() => onRemoveLike(id)}
                  className="cursor-pointer text-3xl hover:scale-125 text-accent-300 hover:text-accent-300 transition-transform duration-200 ease-out"
                />
              ) : (
                <HiOutlineHeart
                  onClick={() => onAddLike(id, item.name)}
                  className="cursor-pointer text-3xl hover:scale-125  hover:text-accent-300 transition-transform duration-200 ease-out"
                />
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default PokemonList;
