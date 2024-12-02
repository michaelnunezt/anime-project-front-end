import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { getToken } from "../../../utils/auth";
import CreateComment from "../CreateComment/CreateComment";
import EditComment from "../EditComment/EditComment";

const CommentList = ({ id }) => {
  console.log(id);
const [show,setShow]=useState(false)
  const takeToken = getToken();
  console.log(takeToken);

  const [comments, setComments] = useState([]);
  
  const fetchCommentList = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/anime/${id}/reviews`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${takeToken}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data.data);
      setComments(data.data);
      return data;
    } catch (error) {
      console.error("Fetch error:", error);
      throw error;
    }
  };

  const fetchDeleteComment = async (commentId) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/reviews/${commentId}/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${takeToken}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      console.log("Comment deleted");

      fetchCommentList();
    } catch (error) {
      console.error("Error delete comment:", error);
    }
  };
  const gotoEdit=()=>{
    setShow(true)
  }
  useEffect(() => {
    fetchCommentList();
  }, []);

  return (
    <>
      <div>
        {comments ? (
          comments.map((comment) => (
            <div key={comment.id} style={{ marginBottom: "1rem" }}>
              <p>{comment.content}</p>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => gotoEdit()}
                style={{ marginRight: "0.5rem" }}
              >
                Go to Edit
              </Button>
              <Button
                variant="danger"
                size="sm"
                onClick={() => fetchDeleteComment(comment.id)}
              >
                Delete
              </Button>
              {show&&<EditComment id={comment.id} fetchCommentList={fetchCommentList}/>}
            </div>
          ))
        ) : (
          <p>No comments for this anime</p>
        )}
      </div>
      
      <CreateComment id={id} fetchCommentList={fetchCommentList} /> {/* Passa la funzione al componente */}
    </>
  );
};

export default CommentList;
