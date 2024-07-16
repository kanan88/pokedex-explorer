'use client';

import { useLocalStorageState } from '../_hooks/useLocalStorageState';
import Image from 'next/image';
import Link from 'next/link';
import { HiHeart } from 'react-icons/hi';

const FavouritesPage = () => {
  const [favourites, setFavourites] = useLocalStorageState([], 'favourites');

  const onRemoveLike = (id) => {
    setFavourites((fav) =>
      fav.filter((item) => item.id.toString() !== id.toString())
    );
  };

  if (favourites?.length > 0) {
    return (
      <ul className="flex flex-wrap items-center justify-center gap-4 ">
        {favourites?.map((item) => {
          const id = item.id;

          return (
            <li
              key={item.id}
              className="h-80 w-48 rounded-md mt-5 ml-5  border-primary-800 border bg-accent-300"
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
                  src={`${item.imageUrl}/${id}.svg`}
                />
                <p className="text-gray-900 text-lg">ID: {id}</p>
              </Link>

              <HiHeart
                onClick={() => onRemoveLike(id)}
                className=" text-accent-300 cursor-pointer text-3xl hover:scale-125 transition-transform duration-200 ease-out"
              />
            </li>
          );
        })}
      </ul>
    );
  } else {
    return (
      <p className="text-xl text-accent-300 text-center">
        You do not have any favourite pokemons...
      </p>
    );
  }
};

export default FavouritesPage;
