import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Nav = ({
  page,
  setPage,
  profileImg,
  userName,
  newPost,
  newRequests,
  newMessages,
  newNotifications,
  isMobile,
}) => {
  const handlePageClick = (page) => {
    setPage(page);
  };

  return (
    <>
      <ul className="nav">
        <li>
          <a
            onClick={() => handlePageClick("Home")}
            className={`nav-link ${page === "Home" ? "nav-link-active" : ""}`}
          >
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
              <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path>
            </svg>
            {!isMobile && <span className="link-name">Home</span>}
            {newPost === true && <span className="notification-badge"></span>}
          </a>
          {page === "Home" && <div style={{position: "relative"}}><span className="nav-link-active-bar"></span></div>}
        </li>
        <li>
          <a
            onClick={() => handlePageClick("Network")}
            className={`nav-link ${
              page === "Network" ? "nav-link-active" : ""
            }`}
          >
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
              <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
            </svg>
            {!isMobile && <span className="link-name">My Network</span>}
            {newRequests > 0 && (
              <span className="network notification-badge">{newRequests}</span>
            )}
          </a>
          {page === "Network" && <div style={{position: "relative"}}><span className="nav-link-active-bar"></span></div>}
        </li>
        <li>
          <a
            onClick={() => handlePageClick("Jobs")}
            className={`nav-link ${page === "Jobs" ? "nav-link-active" : ""}`}
          >
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
              <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
            </svg>
            {!isMobile && <span className="link-name">Jobs</span>}
          </a>
          {page === "Jobs" && <div style={{position: "relative"}}><span className="nav-link-active-bar"></span></div>}
        </li>
        <li>
          <a
            onClick={() => handlePageClick("Messaging")}
            className={`nav-link ${
              page === "Messaging" ? "nav-link-active" : ""
            }`}
          >
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
              <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
            </svg>
            {!isMobile && <span className="link-name">Messaging</span>}
            {newMessages > 0 && (
              <span className="messaging notification-badge">
                {newMessages}
              </span>
            )}
          </a>
          {page === "Messaging" && <div style={{position: "relative"}}><span className="nav-link-active-bar"></span></div>}
        </li>
        <li>
          <a
            onClick={() => handlePageClick("Notifications")}
            className={`nav-link ${
              page === "Notifications" ? "nav-link-active" : ""
            }`}
          >
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
              <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
            </svg>
            {!isMobile && <span className="link-name">Notifications</span>}
            {newNotifications > 0 && (
              <span className="notification notification-badge">
                {newNotifications}
              </span>
            )}
          </a>
          {page === "Notifications" && <div style={{position: "relative"}}><span className="nav-link-active-bar"></span></div>}
        </li>
        <li>
          <a className={`nav-link`}>
            <img src={profileImg} className="profile-img-sm" />
            {!isMobile && (
              <span className="link-name">
                Me <FontAwesomeIcon width={8} icon={faCaretDown} />
              </span>
            )}
          </a>
        </li>
        <li className="border-left-1">
          <a className={`nav-link`}>
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
              <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
            </svg>
            {!isMobile && (
              <span className="link-name">
                For Business <FontAwesomeIcon width={8} icon={faCaretDown} />
              </span>
            )}
          </a>
        </li>
        <li>
          <a className={`nav-link`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              width="24"
              height="24"
              focusable="false"
            >
              <path
                d="M12 17.13a5.13 5.13 0 010-10.25V4a8 8 0 108 8h-2.87A5.13 5.13 0 0112 17.13z"
                style={{ isolation: "isolate" }}
                opacity=".75"
              ></path>
              <path d="M23.31 6.34l-4.95-.71-.7-4.94-3.54 3.53.35 2.48-3.89 3.89a2 2 0 002.83 2.83l3.89-3.89 2.48.35z"></path>
            </svg>
            {!isMobile && <span className="link-name">Advertise</span>}
          </a>
        </li>
      </ul>
    </>
  );
};

export default Nav;
