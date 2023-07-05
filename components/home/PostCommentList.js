import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import CommentItem from './CommentItem'

const PostCommentList = ({ post }) => {
  return (
    <div className="post-comment-list mt-3">
      <button className="order alt-color text-md bold">
        <span>Most Relevant</span>{" "}
        <FontAwesomeIcon icon={faCaretDown} width={12} height={12} />
      </button>

      {post.comments.map((comment) => {
        return <CommentItem key={comment.id} comment={comment} />;
      })}
    </div>
  );
};

export default PostCommentList;
