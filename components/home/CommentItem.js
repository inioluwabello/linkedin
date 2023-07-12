const CommentItem = ({ comment }) => {
  const titleLimiterCount = 70;
  return (
    <div key={comment.id} className="new-comment mt-2">
      <div className="fl comment-profile-details">
        <img src={comment.profileImg} alt="User Profile Image" />
        <div className="flex-grow-1">
          <div className="comment-identity">
            <div className="post-user-name pry-text">
              <span className="name bold">{comment.name}</span>
              {comment.isAuthor && <span className="author-tag text-md bold">Author</span>}
            </div>
            <div className="owner-title sm-text-1 alt-text">
              {comment.title.length > titleLimiterCount
                ? `${comment.title.slice(0, titleLimiterCount)}...`
                : comment.title}
            </div>

            <div className="comment-content text-md mt-2">
              {comment.content}
            </div>
          </div>

          <div className="comment-actions mt-1 text-sm bold alt-text">
            <span className="hover-bg">Like</span> |{" "}
            <span className="hover-bg">Reply</span>
          </div>

          {comment.replies &&
            comment.replies.map((reply) => {
              return <CommentItem key={comment.id} comment={reply} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
