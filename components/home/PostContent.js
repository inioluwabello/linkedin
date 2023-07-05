import PostItem from "./PostItem";
import PostUser from "./PostUser";

const PostList = ({ post }) => {
  return (
    <>
      <PostUser post={post} />
      <PostItem post={post} />
    </>
  );
};

export default PostList;
