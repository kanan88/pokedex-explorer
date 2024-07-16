import { Suspense } from 'react';

import Spinner from '@/app/_components/Spinner';
import PokemonDetails from '@/app/_components/PokemonDetails';

const PokemonDetailsPage = async ({ params }) => {
  const response = await fetch(
    `${process.env.BASE_API_URL}/pokemon/${params.pokemonId}`
  );
  const data = await response.json();

  return (
    <Suspense fallback={<Spinner />}>
      <PokemonDetails data={data} />
    </Suspense>
  );
};

export default PokemonDetailsPage;
