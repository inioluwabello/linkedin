import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAreaChart, faPhotoFilm, faVideo } from "@fortawesome/free-solid-svg-icons";

const StartPost = ({ user }) => {
  return (
    <div className="card mt-3">
      <div className="card-content">
        <div className="new-post fl">
          <img src={user.profileImg} />
          <button className="border-1 hover-bg alt-text text-left">
            Start a post
          </button>
        </div>

        <div className="mt-3 post-buttons space-between">
          <button className="icon hover-bg">
            <FontAwesomeIcon
              icon={faPhotoFilm}
              width={16}
              height={16}
              style={{ color: "#0a66c2" }}
            />
            <span className="alt-color">Photo</span>
          </button>
          <button className="icon hover-bg">
            <FontAwesomeIcon
              icon={faVideo}
              width={16}
              height={16}
              style={{ color: "#5f9b41" }}
            />
            <span className="alt-color">Video</span>
          </button>
          <button className="icon hover-bg" style={{ color: "#a872e8" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
            </svg>
            <span className="alt-color">Job</span>
          </button>
          <button className="icon hover-bg">
            <FontAwesomeIcon
              icon={faAreaChart}
              width={16}
              height={16}
              style={{ color: "#e16745" }}
            />
            <span className="alt-color">Write Article</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default StartPost;
