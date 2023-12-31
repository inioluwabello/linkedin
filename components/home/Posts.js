import { useState } from "react";
import PostSort from "./PostSort";
import PostList from "./PostList";

const Posts = ({ posts, user }) => {
  const [orderBy, setOrderBy] = useState("Top");
  return (
    <>
      <PostSort orderBy={orderBy} setOrderBy={setOrderBy} />
      {
       posts.map(post => {
        return <PostList key={post.id} post={post} user={user} />
       })
       }
    </>
  );
};

export default Posts;
