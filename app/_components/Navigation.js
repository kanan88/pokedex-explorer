import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link href="/" className="hover:text-accent-400 transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/favourites"
            className="hover:text-accent-400 transition-colors"
          >
            Favourites
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
