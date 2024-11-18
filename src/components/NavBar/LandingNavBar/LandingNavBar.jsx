
const LandingNavBar = () => {
  return (
    <header className="p-5 flex justify-between items-center">
      <img
        src=""
        alt="PopPlay"
        width="110"
      />
      <nav className="flex space-x-5">
        <a href="/" className="hover:text-gray-400">Home</a>
        <div className="dropdown">
          <span className="cursor-pointer">Genres ▼</span>
          <div className="dropdown-content hidden absolute bg-gray-800 p-2">
            {["Action", "Comedy", "Drama", "Fantasy", "Horror"].map((genre) => (
              <a key={genre} href={`/genre/${genre.toLowerCase()}`} className="block hover:text-gray-400">
                {genre}
              </a>
            ))}
          </div>
        </div>
        <a href="/my-list" className="hover:text-gray-400">My List</a>
      </nav>
      <form action="search" method="POST" className="flex space-x-2">
        <input type="search" placeholder="Search" className="bg-gray-700 p-2 rounded" />
        <button type="submit" className="bg-red-600 p-2 rounded hover:bg-red-500">Search</button>
      </form>
    </header>
  );
}

export default LandingNavBar;