import { useState } from "react";

const PostItem = ({ post }) => {
    const [postLimiter, setPostLimiter] = useState(200);
    const limitedPost = post.postContent.slice(0, postLimiter)
  return (
    <div className="post-item">
        <div className="post-text text-md alt-text-1">
            {postLimiter > 0 && post.postContent.length > 200 &&
            <>
                <div>{limitedPost}</div>
                <div className="text-right alt-text text-md">
                    <span style={{cursor: "pointer"}} onClick={() => {setPostLimiter(0)}}>...See more</span></div>
            </>
            }

            {postLimiter === 0 && <div>{post.postContent}</div>}
        </div>
        <div className="post-image">
            <img src={post.postImage} />
        </div>
    </div>
  );
};

export default PostItem;
