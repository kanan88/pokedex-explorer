import Image from 'next/image';
import Link from 'next/link';

const BASE_API_URL = 'https://pokeapi.co/api/v2';
const IMAGE_URL =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world';
let OFFSET = 20;
let LIMIT = 20;

const HomePage = async () => {
  const response = await fetch(
    `${BASE_API_URL}/pokemon/?offset=${OFFSET}&limit=${LIMIT}`
  );
  const data = await response.json();

  return (
    <ul className="flex flex-wrap items-center justify-center gap-4">
      {data?.results.map((item) => {
        const id = item.url
          .replace(`${BASE_API_URL}/pokemon/`, '')
          .replace('/', '');

        return (
          <li key={item.url} className="h-80 rounded-md mt-5 ml-5 bg-gray-300 ">
            <Link
              href={`pokemon/${id}`}
              className="p-5 flex flex-col items-center justify-between h-80"
            >
              <p className="text-gray-900 mb-5 text-lg">{item.name}</p>
              <Image
                alt={item.name}
                height={100}
                width={100}
                className="mb-5"
                src={`${IMAGE_URL}/${id}.svg`}
              />
              <p className="text-gray-900 text-lg">ID: {id}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default HomePage;
