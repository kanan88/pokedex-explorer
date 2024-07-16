import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <span className="text-xl font-semibold text-primary-100">
        Pokedex Explorer
      </span>
    </Link>
  );
};

export default Logo;
