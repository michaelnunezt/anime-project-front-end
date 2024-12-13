import { useState } from "react";
import { Container, Button, Modal } from "react-bootstrap";
import "./HeroBanner.css";

const HeroBanner = () => {
  const [showModal, setShowModal] = useState(false);

  const handlePlayClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="hero-banner">
      <Container className="text-content text-center text-white">
        <h1>Fullmetal Alchemist</h1>
        <p>Suites you</p>
        <Button variant="success" size="lg" onClick={handlePlayClick}>
          Play
        </Button>
      </Container>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        centered
        size="lg"
        className="video-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Fullmetal Alchemist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="video-wrapper">
            <iframe
              width="100%"
              height="600"
              src="https://www.youtube.com/embed/OgMsBRtbtlg?autoplay=1"
              title="Fullmetal Alchemist Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default HeroBanner;
