import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const PostUser = ({ post }) => {
  const titleLimiterCount = !post.owner.following ? 66 : 80;
  return (
    <div className="space-between">
      <div className="poster" style={{ flexGrow: "1" }}>
        <div className="fl post-owner">
          <img src={post.owner.img} />
          <div>
            <div className="post-user-name pry-text">
              <span className="name bold">{post.owner.name}</span>
              {post.owner.following && (
                <>
                  <div className="grey-dot"></div>
                  <span className="connection alt-text">Following</span>
                </>
              )}
              {!post.owner.following && (
                <>
                  <div className="grey-dot"></div>
                  <span className="connection alt-text">
                    {post.owner.connectionOrder}
                  </span>
                </>
              )}
            </div>

            <div className="owner-title sm-text-1 alt-text">
              {post.owner.title.length > titleLimiterCount
                ? `${post.owner.title.slice(0, titleLimiterCount)}...`
                : post.owner.title}
            </div>

            <div className="post-extra alt-text sm-text-1">
              <span>{post.date}</span>
              {post.edited && (
                <>
                  <div className="grey-dot"></div>
                  <span className="post-edited">Edited</span>
                </>
              )}
              {post.showGlobe && (
                <>
                  <div className="grey-dot"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    fill="currentColor"
                    width="16"
                    height="16"
                    focusable="false"
                  >
                    <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
                  </svg>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      {!post.owner.following && (
        <button className="pry-button alt-text follow pry-button-hover">
          <FontAwesomeIcon icon={faPlus} width={16} height={16} /> Follow
        </button>
      )}
    </div>
  );
};

export default PostUser;
