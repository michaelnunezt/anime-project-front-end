import { useEffect, useRef, useState } from "react";
import "./CardGrid.css";
import { fetchAnimeList } from "../../services/animeListService";
import CommentList from "../CommentList/CommentList";
import CreateComment from "../CreateComment/CreateComment";

const CardGrid = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);
  const [show, setShow] = useState(false);
  const [popularContent, setPopularContent] = useState([]);
  const cardGridRef = useRef(null);

  const handleCardClick = (content) => {
    setSelectedContent(content);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedContent(null);
  };

  const getAnimeList = async () => {
    try {
      const getAnimeList = await fetchAnimeList();
      setPopularContent(getAnimeList.data.results || []);
      console.log(getAnimeList.data.results);
    } catch (error) {
      console.error("Error fetching Anime", error);
      alert("Error fetching Anime");
    }
  };

  useEffect(() => {
    getAnimeList();
  }, []);

  // Automatic scrolling logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (cardGridRef.current) {
        const firstChild = cardGridRef.current.firstChild;
        cardGridRef.current.appendChild(firstChild); // Move the first card to the end
        cardGridRef.current.style.transition = "none"; // Disable transition during the DOM change
        cardGridRef.current.style.transform = `translateX(-226px)`; // Offset for one card width + gap
        setTimeout(() => {
          cardGridRef.current.style.transition = "transform 0.5s ease-in-out"; // Re-enable transition
          cardGridRef.current.style.transform = `translateX(0)`; // Reset the transform
        }, 50);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-5">
      <h2 className="text-white">Most Popular</h2>
      <div className="carousel-container">
        <div className="card-grid-container">
          <div className="card-grid" ref={cardGridRef}>
            {popularContent.map((content) => (
              <div
                key={content.id}
                className="card shadow"
                onClick={() => handleCardClick(content)}
              >
                <img
                  src={content.thumbnail}
                  alt={content.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {showModal && selectedContent && (
        <div className={`modal ${showModal ? "modal-show" : ""}`}>
          <div className="modal-content">
            <div className="modal-header">
              <h2>{selectedContent.title}</h2>
              <button
                onClick={handleCloseModal}
                style={{
                  color: "white",
                  fontSize: "20px",
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                }}
              >
                X
              </button>
            </div>
            <img
              src={selectedContent.thumbnail}
              alt={selectedContent.title}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                marginBottom: "20px",
              }}
            />
            <div className="d-flex justify-content-between mb-4">
              <span>
                <strong>Release Date: </strong> {selectedContent.release_date}
              </span>
              <span>
                <strong>Length:</strong> {selectedContent.duration}
              </span>
            </div>
            <p>
              Enjoy an exciting journey with <strong>{selectedContent.title}</strong>!
            </p>
            <p>
              <strong>Description: </strong> {selectedContent.description}
            </p>
            <div className="d-flex justify-content-between">
              <button onClick={() => setShow(true)} className="btn btn-success">
                Play
              </button>
              {/* <button
                onClick={() =>
                  alert(`Added ${selectedContent.title} to your list!`)
                }
                className="btn btn-primary"
              >
                Add to List
              </button> */}
            </div>
            {show && (
              <div>
                <iframe
                  width="790"
                  height="568"
                  src={selectedContent.video_url}
                  title={selectedContent.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            <CommentList id={selectedContent.id} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CardGrid;