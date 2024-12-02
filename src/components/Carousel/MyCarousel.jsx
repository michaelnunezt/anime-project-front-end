import { Carousel, Card } from "react-bootstrap";
import "./CardGrid.css";

const MyCarousel = () => {
  const popularContent = [
    { title: "Dragon Ball Z", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLw1Ull7UlR8mvNhIcj3bxMuXGh262qMG2jg&s" },
    { title: "Jujutsu Kaisen", img: "https://example.com/jujutsukaisen.jpg" },
    { title: "Attack on Titan", img: "https://example.com/attackontitan.jpg" },
    { title: "Naruto", img: "https://example.com/naruto.jpg" },
    { title: "Fullmetal Alchemist", img: "https://example.com/fullmetal.jpg" },
    { title: "Hunter x Hunter", img: "https://example.com/hunterxhunter.jpg" },
    { title: "Haikyuu!!", img: "https://example.com/haikyuu.jpg" },
    { title: "Vinland Saga", img: "https://example.com/vinlandsaga.jpg" },
  ];

  // Split content into chunks (e.g., 4 cards per slide)
  const chunkedContent = [];
  const chunkSize = 4;

  for (let i = 0; i < popularContent.length; i += chunkSize) {
    chunkedContent.push(popularContent.slice(i, i + chunkSize));
  }

  return (
    <div className="my-5">
      <h2 className="text-white">Most Popular</h2>
      <Carousel>
        {chunkedContent.map((chunk, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-center">
              {chunk.map((content, idx) => (
                <Card
                  bg="dark"
                  text="white"
                  key={idx}
                  className="mx-2"
                  style={{ minWidth: "200px", maxWidth: "250px" }}
                >
                  <Card.Img
                    variant="top"
                    src={content.img}
                    onError={(e) => {
                      e.target.src = "https://example.com/fallback-image.jpg"; // Fallback image
                    }}
                  />
                  <Card.Body>
                    <Card.Title className="text-center">{content.title}</Card.Title>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default MyCarousel;