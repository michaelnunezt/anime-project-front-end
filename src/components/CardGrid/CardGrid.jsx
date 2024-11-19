import { Container, Row, Col, Card } from "react-bootstrap";
import "./CardGrid.css"; // For horizontal scrolling styles

const CardGrid = () => {
  const popularContent = [
    { title: "Dragon Ball Z", img: "/" },
    { title: "Jujutsu Kaisen", img: "/path/to/image2.jpg" },
    { title: "Attack on Titan", img: "/path/to/image3.jpg" },
    { title: "Naruto", img: "/path/to/image4.jpg" },
    { title: "Fullmetal Alchemist", img: "/path/to/image5.jpg" },
    { title: "Hunter x Hunter", img: "/path/to/image6.jpg" },
    { title: "Haikyuu!!", img: "/path/to/image7.jpg" },
    { title: "Vinland Saga", img: "/path/to/image8.jpg" },
  ];

  return (
    <Container className="my-5">
      <h2 className="text-white">Most Popular</h2>
      <Row className="card-grid">
        {popularContent.map((content, index) => (
          <Col key={index} xs={6} sm={4} md={3} className="mb-4">
            <Card bg="dark" text="white">
              <Card.Img variant="top" src={content.img} />
              <Card.Body>
                <Card.Title className="text-center">{content.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardGrid;
