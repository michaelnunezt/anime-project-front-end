import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { getToken } from "../../../utils/auth";
import { fetchAnimeList } from "../../services/animeListService";

const CreateComment = ({ id, fetchCommentList }) => {
  const [content, setContent] = useState("");
  const takeToken = getToken();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCreateComment(id, content); // Crea il commento
  };

  const fetchCreateComment = async (id, text) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/anime/${id}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${takeToken}`,
        },
        body: JSON.stringify({ content: text }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Risposta API:", data);

      fetchCommentList(); 

      setContent("");
      return data;
    } catch (error) {
      console.error("Fetch error:", error);
      throw error;
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Write your comment here: </h2>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        
        <Form.Control
          as="textarea"
          rows={3}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Comment
      </Button>
    </Form>
  );
};

export default CreateComment;
