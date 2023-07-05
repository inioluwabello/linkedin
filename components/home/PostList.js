import PostReferrer from "./PostReferrer";
import PostContent from "./PostContent";
import PostActions from "./PostActions";
import PostComment from "./PostComment";

const PostList = ({ post, user }) => {
  return (
    <div className="card mt-2">
      <div className="card-content">
        {post.referrer && <PostReferrer post={post} />}
        <PostContent post={post} />
        <PostActions user={user} post={post} />
        <PostComment user={user} post={post} />
      </div>
    </div>
  );
};

export default PostList;
