import { Suspense } from 'react';

import Spinner from '../_components/Spinner';
import FavouritePokemonList from '../_components/FavouritePokemonList';

const FavouritesPage = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <FavouritePokemonList />
    </Suspense>
  );
};

export default FavouritesPage;
