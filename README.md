Technologies used: Next.js (includes React.js), Tailwind CSS, PokeAPI Rest API v2.

## Getting Started

You need to create .env.local file in the root of project with the following content:

BASE_API_URL=https://pokeapi.co/api/v2
IMAGE_URL=https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world

Then install the npm dependencies and run the project
#
npm install
#
npm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project displays a list of Pokemons, fetching data from PokeAPI Rest endpoints.
The app built in Next.js using serverside components for data fetching and client side components for user interactivity. Next.js is perfect framework as it has very nice caching which makes the app super fast. All 3 Phases in requirements should be met. Bonus challenges are done only partially due to lack of time.
