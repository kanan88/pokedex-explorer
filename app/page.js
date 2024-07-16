import { Suspense } from 'react';
import PokemonList from './_components/PokemonList';
import Spinner from './_components/Spinner';

const HomePage = async () => {
  const response = await fetch(`${process.env.BASE_API_URL}/pokemon/`);
  const data = await response.json();

  return (
    <Suspense fallback={<Spinner />}>
      <PokemonList
        data={data.results}
        apiUrl={process.env.BASE_API_URL}
        imageUrl={process.env.IMAGE_URL}
      />
    </Suspense>
  );
};

export default HomePage;
