import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

function MyCarousel() {
  const animes = [
    { title: "Dragonball Z", description: "Suits You", image: "https://i.ytimg.com/vi/Ao8J38fzngw/hqdefault.jpg" },
    { title: "Fullmetal Alchemist", description: "Suits You", image: "https://www.japanpowered.com/media/images/fma-brotherhood-characters-scaled.jpg" },
  ];

  return (
    <Swiper spaceBetween={50} slidesPerView={1}>
      {animes.map((anime, index) => (
        <SwiperSlide key={index}>
          <div
            className="h-96 flex flex-col justify-end p-10"
            style={{
              backgroundImage: `url(${anime.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1 className="text-5xl mb-5">{anime.title}</h1>
            <p className="mb-5">{anime.description}</p>
            <button className="bg-red-600 text-white p-2 px-5 rounded hover:bg-red-500">Play</button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MyCarousel;