import { useEffect, useState } from "react";
import "./CardGrid.css";
import { fetchAnimeList } from "../../services/animeListService";

const CardGrid = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);
const [show, setShow]=useState(false)
  const [popularContent, setPopularContent] = useState([])

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
      console.error('Error fetching Anime', error);
      alert("Error fetching Anime");
    }
  }
  
  useEffect(() => {
    getAnimeList();
    console.log(popularContent);
    
  },[]);


  return (
    <div className="my-5">
      <h2 className="text-white">Most Popular</h2>
      <div className="card-grid">
        {popularContent.map((content) => (
          <div
            key={content.id}
            className="card shadow"
            onClick={() => handleCardClick(content)}
          >
            <img
              src={content.thumbnail}
              alt={content.title}
              style={{ height: "200px", objectFit: "cover", width: "100%" }}
            />
            <div className="text-center p-2">
              <h5>{content.title}</h5>
            </div>
          </div>
        ))}
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
                <strong>Relase Date: </strong> {selectedContent.release_date} 
              </span>
              <span>
                <strong> Length:</strong> {selectedContent.duration}
              </span>
            </div>
            <p>
              Enjoy an exciting journey with <strong>{selectedContent.title}</strong>!
            </p>
            <p><strong>Description: </strong>  {selectedContent.description}</p>
            <div className="d-flex justify-content-between">
              <button onClick={() => setShow(true)} className="btn btn-success">
                Play
              </button>
              <button
                onClick={() =>
                  alert(`Added ${selectedContent.title} to your list!`)
                }
                className="btn btn-primary"
              >
                Add to List
              </button>
            </div>
            {show && (
              <div>
                <iframe
                  width="790"
                  height="568"
                  src="https://www.youtube.com/embed/gcgKUcJKxIs"
                  title="JUJUTSU KAISEN | OFFICIAL TRAILER"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}  

export default CardGrid;

