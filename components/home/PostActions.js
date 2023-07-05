import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faRedo, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const PostActions = ({ user, post }) => {
  return (
    <>
      <div className="space-between post-actions mt-2 text-md alt-text border-top-1">
        <button className="hover-bg">
          <img
            src={user.profileImg}
            className="profile-img-sm"
            style={{ display: "inline-block" }}
          />{" "}
          <FontAwesomeIcon icon={faCaretDown} width={12} height={12} />
        </button>
        <button className={`hover-bg alt-text bold ${post.likedByUser ? "post-liked" : ""}`}>
          <FontAwesomeIcon icon={faThumbsUp} width={16} height={16} />{" "}
          <span>Like</span>
        </button>
        <button className="hover-bg alt-text bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            class="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
          </svg> {" "}
          <span>Comment</span>
        </button>
        
        <button className="hover-bg alt-text bold">
          <FontAwesomeIcon icon={faRedo} width={16} height={16} />{" "}
            <span>Repost</span>
        </button>
        
        <button className="hover-bg alt-text bold">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
            </svg> {" "}
            <span>Send</span>
        </button>
        
      </div>
    </>
  );
};

export default PostActions;
