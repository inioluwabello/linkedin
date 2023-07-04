import { useState } from "react";
import PostSort from "./PostSort";

const Posts = () => {
  const [orderBy, setOrderBy] = useState("Top");

  return (
    <>
      <PostSort orderBy={orderBy} setOrderBy={setOrderBy} />
    </>
  );
};

export default Posts;
