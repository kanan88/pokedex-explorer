'use client';

import Image from 'next/image';

const PokemonDetails = ({ data }) => {
  const { name, moves, stats } = data;

  return (
    <div className="flex sm:flex-row flex-col border-primary-800 border">
      <div className="flex *:flex-1 relative items-center">
        <Image
          src={data?.sprites?.other?.dream_world?.front_default}
          alt={name}
          width={310}
          height={310}
          className="object-cover border-primary-800 p-5"
        />
      </div>
      <div className="flex-grow">
        <div className="pt-5 pb-4 px-7 bg-primary-950">
          <h3 className="text-accent-500 font-semibold text-2xl mb-3">
            Pokemon: {name}
          </h3>

          <div className="flex gap-3 items-center mb-2">
            <p className="text-lg text-primary-200">
              Top 3 moves:{' '}
              <span className="font-bold">
                {moves[0].move.name}, {moves[1].move.name}, {moves[2].move.name}
              </span>
            </p>
          </div>
          <div className="flex gap-3 items-center mb-2">
            <ul className="text-lg text-primary-200">
              {stats?.map((s) => (
                <li key={s.stat.name}>
                  {s.stat.name}:{' '}
                  <span className="font-bold">{s.base_stat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
