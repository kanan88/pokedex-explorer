import Image from 'next/image';
import Link from 'next/link';

const PokemonCard = ({ id, name, imageUrl, style = '' }) => {
  return (
    <Link
      href={`pokemon/${id}`}
      className={`h-80 w-48 p-5 flex flex-col items-center justify-between rounded-md ${style}`}
    >
      <p className="text-gray-900 mb-5 text-xl ">{name}</p>
      <Image
        alt={name}
        height={100}
        width={100}
        className="mb-5"
        src={imageUrl}
      />
      <p className="text-gray-900 text-lg">ID: {id}</p>
    </Link>
  );
};
export default PokemonCard;
