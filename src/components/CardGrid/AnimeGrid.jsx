function AnimeGrid({ animes }) {
  return (
    <section className="py-10 px-5">
      <h2 className="text-xl mb-5">Popular on Anime App</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {animes.map((anime) => (
          <div
            key={anime.id}
            className="w-40 h-64 bg-cover bg-center"
            style={{ backgroundImage: `url(${anime.image})` }}
            onClick={() => alert(`Selected: ${anime.title}`)}
          >
            <div className="bg-black bg-opacity-50 text-white p-2">{anime.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AnimeGrid;