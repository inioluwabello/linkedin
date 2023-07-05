import PostReferrer from "./PostReferrer";
import PostContent from "./PostContent";

const PostList = ({ post }) => {
  return (
    <div className="card mt-2">
      <div className="card-content">
        {post.referrer && <PostReferrer post={post} />}
        <PostContent post={post} />
      </div>
    </div>
  );
};

export default PostList;
