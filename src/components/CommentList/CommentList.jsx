import Button from "react-bootstrap/Button";

const CommentList = ({ comments, onEditComment, onDeleteComment }) => {
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id} style={{ marginBottom: "1rem" }}>
          <p>{comment.text}</p>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => onEditComment(comment)}
            style={{ marginRight: "0.5rem" }}
          >
            Edit
          </Button>
          <Button
            variant="danger"
            size="sm"
            onClick={() => onDeleteComment(comment.id)}
          >
            Delete
          </Button>
        </div>
      ))}
    </div>
  );
};

export default CommentList;