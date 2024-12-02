import { useState } from "react";
import { getToken } from "../../../utils/auth";
import { Button, Form } from "react-bootstrap";


const EditComment=({id,fetchCommentList})=>{
  const [content, setContent] = useState("");
  const takeToken = getToken();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchEditComment(id,content)
  }

  const fetchEditComment = async (commentId, text) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/reviews/${commentId}/`, {
        method: "PUT",
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

      setContent(content);
      return data;
    } catch (error) {
      console.error("Fetch error:", error);
      throw error;
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <h2>EDIT your comment here: </h2>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        
        <Form.Control
          as="textarea"
          rows={3}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        EDIT 
      </Button>
    </Form>
  );
}
export default EditComment